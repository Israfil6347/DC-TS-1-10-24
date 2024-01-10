import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import { GetPolicyRequestModel } from 'authenticated_pages/shared/model/request/GetPolicyRequestModel';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { TermsAndConditionModel } from 'global_shared/model/data/TermsAndConditionModel';
import { getFormattedAccountNumber } from 'global_shared/utils/textUtils';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DepositNowRequestModel } from '../deposit_now/model/request/DepositNowRequestModel';
import { validateDepositNowRequestState } from '../deposit_now/validation/validateDepositNowRequestState';
import AccountHolderAndBeneficiaryView from '../shared/components/AccountHolderAndBeneficiaryView';
import CollectionLedgerAccountsView from '../shared/components/CollectionLedgerAccountsView';
import Notes from '../shared/components/Notes';
import useCollectionLedgerState, {
  CollectionLedgerState,
} from '../shared/hooks/useCollectionLedgerState';
import useDepositRequestState from '../shared/hooks/useDepositRequestState';
import { GetCollectionLedgersRequestModel } from '../shared/model/request/GetCollectionLedgersRequestModel';
import BkashDeposit from './BkashDeposit';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Sunit Corneleous
 * @updatedOn      :  23 August 2023
 *========================================================================**/

const steps = ['DEPOSIT FOR', 'ACCOUNTS TO DEPOSIT', 'DEPOSIT PARTICULARS'];

function ThroughBkash() {
  const [activeStep, setActiveStep] = useState(0);

  const navigate = useNavigate();

  const notify = () => toast('Please, select accounts to deposit.');
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [bKashPaymentOpen, setBkashPaymentOpen] = useState<boolean>(false);

  const { depositRequestState, updateDepositRequestState } =
    useDepositRequestState(validateDepositNowRequestState);

  const {
    collectionLedgerState,
    initCollectionLedgerState,
    updateCollectionLedgerState,
    setCollectionLedgerState,
  } = useCollectionLedgerState();

  const {
    loading: collectionAccountsResponseDataLoading,
    data: collectionAccountsResponseData,
    setData: setCollectionAccountsResponseData,
    message: collectionAccountsResponseMessage,
    status: collectionAccountsResponseStatus,
    setStatus: setCollectionAccountsResponseStatus,
    executeCommand: collectionAccountsRequestExecuteCommand,
  } = useCommand<CollectionLedgersResponseModel | null>();

  const {
    loading: getMfsPolicyResponseDataLoading,
    data: getMfsPolicyResponseData,
    executeCommand: getMfsPolicyRequestExecutedCommand,
  } = useCommand<TermsAndConditionModel | null>();

  useEffect(() => {
    if (collectionAccountsResponseData != null) {
      var sortedAccount = collectionAccountsResponseData?.AccountInfoList;
      sortedAccount.sort((obj1, obj2) =>
        obj1.AccountNo.trim() > obj2.AccountNo.trim()
          ? 1
          : obj1.AccountNo.trim() < obj2.AccountNo.trim()
          ? -1
          : 0
      );

      initCollectionLedgerState(sortedAccount);
    }
  }, [collectionAccountsResponseData]);

  useEffect(() => {
    const getPolicyRequestModel = new GetPolicyRequestModel(authUser);
    getPolicyRequestModel.AccountModuleCode = '16';
    getPolicyRequestModel.ApplicationName = 'MFS';
    getPolicyRequestModel.ContentName = 'RealTime Deposit Notes';

    getMfsPolicyRequestExecutedCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(getPolicyRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  const getCollectionAccounts = (accountNo: string) => {
    const collectionAccountsRequestModel = new GetCollectionLedgersRequestModel(
      authUser
    );
    collectionAccountsRequestModel.SearchText =
      getFormattedAccountNumber(accountNo);

    collectionAccountsRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getCollectionAccount',
      JSON.stringify(collectionAccountsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const getSelectedCollectionLedgers = (
    collectionLedgers: CollectionLedgerState[]
  ) => {
    var checkedAccounts: CollectionLedgerState[] = [];
    collectionLedgers.forEach((element) => {
      if (element?.isSelected) {
        checkedAccounts.push(element);
      }
    });

    return checkedAccounts;
  };

  var totalAmount = 0;
  if (collectionLedgerState.length > 0) {
    collectionLedgerState.forEach((collectionLedger, index) => {
      if (collectionLedger?.isSelected) {
        totalAmount = totalAmount + collectionLedger.Amount;
      }
    });
  }

  const submitCollectionLedgerAccountsSubmit = () => {
    var error = '';
    let fieldName: keyof typeof depositRequestState;
    var isAllLedgerAccountChecked = false;
    for (fieldName in depositRequestState) {
      updateDepositRequestState(fieldName, depositRequestState[fieldName]);
      error =
        error +
        validateDepositNowRequestState(
          fieldName,
          depositRequestState[fieldName]
        );
    }

    collectionLedgerState?.forEach((element) => {
      if (element?.isSelected) {
        isAllLedgerAccountChecked = true;
      }
    });

    if (isAllLedgerAccountChecked) {
    } else {
      notify();
    }

    if (error.length === 0) {
      var encryptPassword = CryptoJS.MD5(depositRequestState?.CardPIN);
      const depositNowRequestModel = new DepositNowRequestModel(authUser);
      depositNowRequestModel.AccountHolderName = '';
      depositNowRequestModel.AccountId = 0;
      depositNowRequestModel.AccountType = '';
      depositNowRequestModel.CardNo = '';
      depositNowRequestModel.DepositDate = moment(new Date()).format();
      depositNowRequestModel.FromAccountNo = '';
      depositNowRequestModel.AccountNo = '';
      depositNowRequestModel.LedgerId = 0;
      depositNowRequestModel.RepeatMonths = 0;
      depositNowRequestModel.SecretKey = encryptPassword.toString();
      depositNowRequestModel.TotalDepositAmount = totalAmount;
      depositNowRequestModel.TransactionMethod = '12';
      depositNowRequestModel.TransactionModels = getSelectedCollectionLedgers(
        collectionLedgerState
      );

      var depositNowRequestEncryptModel = {
        Data: JSON.stringify(depositNowRequestModel),
      };
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const hasSelectedAccounts = collectionLedgerState?.filter((item) => {
    if (item.isSelected) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      <div className="hidden">
        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
        >
          <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
            <div className="w-full">
              <div className="">
                <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
                  <div className="animate-backInRight py-20 text-center">
                    <motion.h1
                      variants={MyVariants.SlideInFromLeft}
                      transition={MyTransition.Spring.Low}
                      className=" text-3xl font-extrabold"
                    >
                      Deposit through bKash
                    </motion.h1>
                    <motion.p
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                    >
                      we are going to implement 'Deposit through bKash' very
                      soon. Please, stay connected with us.
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
      <div className="">
        <LoaderDialogue
          isLoading={
            collectionAccountsResponseDataLoading ||
            getMfsPolicyResponseDataLoading
          }
        />

        {/* Begin collection Accounts failed dialog */}
        <FailedDialogue
          isDialogueOpen={
            collectionAccountsResponseStatus === 'failed' ? true : false
          }
          onCloseButtonClick={() => {
            setCollectionAccountsResponseStatus(null);
          }}
        >
          {collectionAccountsResponseMessage}
        </FailedDialogue>
        {/* End collection Accounts failed dialog */}

        {bKashPaymentOpen ? (
          <BkashDeposit
            collectionLedgerState={collectionLedgerState}
            setBkashPaymentOpen={setBkashPaymentOpen}
          />
        ) : (
          <motion.div
            initial="initial"
            animate="animate"
            transition={MyTransition.StaggerChildren.Fast}
          >
            <div className=" cursor-pointer">
              <section className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row">
                <div className="w-full">
                  <div className="">
                    <div className="flex flex-col gap-6 lg:flex-row">
                      <div className="flex w-full flex-col gap-6 lg:w-4/12">
                        <Notes
                          data={{
                            __html: getMfsPolicyResponseData?.BanglaContent!,
                          }}
                        />
                      </div>
                      <motion.div
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="w-full lg:w-8/12"
                      >
                        <div className="rounded-md bg-surface p-7 shadow">
                          {/* stepper */}
                          <div className="md:hidden">
                            <Box sx={{ maxWidth: 400 }}>
                              <Stepper
                                activeStep={activeStep}
                                orientation="vertical"
                                sx={stepStyle}
                              >
                                {steps.map((label) => (
                                  <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                  </Step>
                                ))}
                              </Stepper>
                            </Box>
                          </div>
                          <div className="hidden md:block">
                            <Box sx={{ width: '100%' }}>
                              <Stepper
                                activeStep={activeStep}
                                alternativeLabel
                                sx={stepStyle}
                              >
                                {steps.map((label) => (
                                  <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                  </Step>
                                ))}
                              </Stepper>
                            </Box>
                          </div>

                          {/* content */}
                          {activeStep + 1 === 1 && (
                            <AccountHolderAndBeneficiaryView
                              collectionAccountsResponseData={
                                collectionAccountsResponseData
                                // ?.AccountHolderInfo[0]?.FullName!
                              }
                              getCollectionAccounts={getCollectionAccounts}
                              parentPageState={depositRequestState}
                              updateParentPageState={updateDepositRequestState}
                            />
                          )}

                          {activeStep + 1 === 2 && (
                            <CollectionLedgerAccountsView
                              collectionLedgerState={collectionLedgerState}
                              updateCollectionLedgerState={
                                updateCollectionLedgerState
                              }
                              setCollectionLedgerState={
                                setCollectionLedgerState
                              }
                              sectionTitle={'Accounts to Deposit'}
                              submitCollectionLedgerAccountsSubmit={() => {
                                setBkashPaymentOpen(true);
                              }}
                              cardAccountWithdrawableBalance={999999999999990}
                              cardPinRemainingTry={3}
                              cardLockRequestHandler={() => {}}
                            />
                          )}

                          {activeStep + 1 === 3 && (
                            <motion.div
                              variants={MyVariants.SlideInFromRight}
                              transition={MyTransition.Spring.Low}
                            >
                              <BkashDeposit
                                collectionLedgerState={collectionLedgerState}
                                setBkashPaymentOpen={setBkashPaymentOpen}
                                handleBack={handleBack}
                              />
                            </motion.div>
                          )}

                          {/* stepper button */}
                          {activeStep + 1 !== 3 && (
                            <div className="flex w-full items-center justify-center gap-4 p-6">
                              <MyButton
                                onClick={() => {
                                  handleBack();
                                }}
                                type="button"
                                disabled={activeStep === 0 ? true : false}
                                label="Back"
                                styleClass="w-2/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                                name={''}
                              />

                              <MyButton
                                onClick={() => {
                                  if (activeStep === 0) {
                                    let error = '';

                                    if (
                                      depositRequestState['SearchAccount'] ===
                                      ''
                                    ) {
                                      updateDepositRequestState(
                                        'SearchAccount',
                                        ''
                                      );

                                      error =
                                        error +
                                        validateDepositNowRequestState(
                                          'SearchAccount',
                                          ''
                                        );
                                    }

                                    if (error.length === 0) {
                                      handleNext();
                                    }
                                  } else if (activeStep === 1) {
                                    if (hasSelectedAccounts.length > 0) {
                                      for (let key in hasSelectedAccounts) {
                                        const obj = hasSelectedAccounts[key];

                                        if (
                                          obj.Amount < obj.MinimumDeposit &&
                                          !obj.IsSubLedger &&
                                          obj.PlType !== 2
                                        ) {
                                          return;
                                        }
                                      }

                                      let totalAmount = 0;

                                      if (collectionLedgerState.length > 0) {
                                        collectionLedgerState.forEach(
                                          (collectionLedger, index) => {
                                            if (collectionLedger?.isSelected) {
                                              totalAmount =
                                                totalAmount +
                                                collectionLedger.Amount;
                                            }
                                          }
                                        );
                                      }

                                      if (totalAmount > 0) {
                                        handleNext();
                                      }
                                    }
                                  }
                                }}
                                type="button"
                                label={
                                  activeStep === steps.length - 1
                                    ? 'Verify'
                                    : 'Next'
                                }
                                styleClass="w-2/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                                name={''}
                                disabled={
                                  activeStep === 0 &&
                                  !collectionAccountsResponseData
                                }
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default ThroughBkash;
