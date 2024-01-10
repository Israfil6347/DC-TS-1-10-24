import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import { GetCollectionLedgersRequestModel } from 'authenticated_pages/shared/model/request/GetCollectionLedgersRequestModel';
import { GetPolicyRequestModel } from 'authenticated_pages/shared/model/request/GetPolicyRequestModel';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCardPinRemainingTry from 'global_shared/hooks/useCardPinRemainingTry';
import useCommand from 'global_shared/hooks/useCommand';
import { CardHandler } from 'global_shared/model/data/CardHandler';
import { CombinedCardModel } from 'global_shared/model/data/CombinedCardModel';
import { TermsAndConditionModel } from 'global_shared/model/data/TermsAndConditionModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { getFormattedAccountNumber } from 'global_shared/utils/textUtils';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AccountHolderAndBeneficiaryView from '../shared/components/AccountHolderAndBeneficiaryView';
import CollectionLedgerAccountsView from '../shared/components/CollectionLedgerAccountsView';
import Notes from '../shared/components/Notes';
import useCollectionLedgerState, {
  CollectionLedgerState,
} from '../shared/hooks/useCollectionLedgerState';
import useDepositRequestState from '../shared/hooks/useDepositRequestState';
import { validateCollectionLedgerState } from '../shared/validation/validateCollectionLedgerState';
import { DepositNowRequestModel } from './model/request/DepositNowRequestModel';
import { validateDepositNowRequestState } from './validation/validateDepositNowRequestState';
import { Size } from 'global_shared/enum/Size';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Sunit Corneleous
 * @updatedOn      :  22 August 2023
 *========================================================================**/

const steps = [
  'DEPOSIT FOR',
  'ACCOUNTS TO DEPOSIT',
  'PREVIEW',
  'TRANSFER FROM',
];

const DepositNowPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const navigate = useNavigate();

  const notify = () => toast('Please, select accounts to deposit.');
  const { authUser } = React.useContext(AuthUserContext) as AuthUserContextType;

  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();

  const { depositRequestState, updateDepositRequestState } =
    useDepositRequestState(validateDepositNowRequestState);

  const {
    collectionLedgerState,
    setCollectionLedgerState,
    initCollectionLedgerState,
    updateCollectionLedgerState,
  } = useCollectionLedgerState();

  const {
    loading: cardLockResponseDataLoading,
    data: cardLockResponseData,
    status: cardLockResponseDataStatus,
    setStatus: setCardLockResponseStatus,
    executeCommand: cardLockRequestExecuteCommand,
  } = useCommand<string>();

  const {
    loading: verifyPinResponseDataLoading,
    data: verifyPinResponseData,
    message: verifyPinResponseMessage,
    status: verifyPinResponseStatus,
    setStatus: setVerifyPinResponseStatus,
    executeCommand: verifyPinRequestExecuteCommand,
  } = useCommand<any>();

  console.log(verifyPinResponseMessage);

  const {
    loading: realTimeDepositResponseDataLoading,
    data: realTimeDepositResponseData,
    message: realTimeDepositResponseMessage,
    setMessage: setRealTimeDepositResponseMessage,
    status: realTimeDepositResponseStatus,
    setStatus: setRealTimeDepositResponseStatus,
    executeCommand: realTimeDepositRequestExecuteCommand,
  } = useCommand<string>();

  const {
    loading: collectionAccountsResponseDataLoading,
    data: collectionAccountsResponseData,
    setData: setCollectionAccountsResponseData,
    message: collectionAccountsResponseMessage,
    status: collectionAccountsResponseStatus,
    setStatus: setCollectionAccountsResponseStatus,
    executeCommand: collectionAccountsRequestExecuteCommand,
  } = useCommand<CollectionLedgersResponseModel | null>();

  console.log(collectionAccountsResponseData);

  const {
    loading: myCardsResponseDataLoading,
    data: myCardsResponseData,
    setData: setMyCardsResponseData,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[] | null>();

  const {
    loading: getMfsPolicyResponseDataLoading,
    data: getMfsPolicyResponseData,
    executeCommand: getMfsPolicyRequestExecutedCommand,
  } = useCommand<TermsAndConditionModel | null>();

  useEffect(() => {
    if (myCardsResponseData !== null) {
      updateDepositRequestState(
        'CardNo',
        myCardsResponseData?.[0]?.CardNo?.trim()
      );
      updateDepositRequestState(
        'CardAccount',
        myCardsResponseData?.[0]?.CardsAccounts?.[0].AccountNumber.trim()
      );
    }
  }, [myCardsResponseData]);

  React.useEffect(() => {
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

  React.useEffect(() => {
    var personalCardInfoObject = new BaseRequestModel(authUser);
    myCardsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V2/myCards',
      JSON.stringify(personalCardInfoObject),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [cardLockResponseData]);

  React.useEffect(() => {
    const getPolicyRequestModel = new GetPolicyRequestModel(authUser);
    getPolicyRequestModel.AccountModuleCode = '16';
    getPolicyRequestModel.ApplicationName = 'MFS';
    getPolicyRequestModel.ContentName = 'RealTime Deposit Notes';
    getPolicyRequestModel.Application = 'PassBook';

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

    console.log(collectionAccountsRequestModel);

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
    console.log(checkedAccounts);

    return checkedAccounts.filter((item) => {
      if (myCardsResponseData) {
        return (
          item.AccountNo.trim() !==
          myCardsResponseData[0]?.CardsAccounts[0]?.AccountNumber.trim()
        );
      } else {
        return item;
      }
    });

    // return checkedAccounts;
  };

  var card: CombinedCardModel | null = null;
  if (myCardsResponseData !== null) {
    const cardHandler = new CardHandler(myCardsResponseData);
    card = cardHandler.getHandledCard()[0];
  }

  var totalAmount = 0;
  if (collectionLedgerState.length > 0) {
    collectionLedgerState.forEach((collectionLedger, index) => {
      if (collectionLedger?.isSelected) {
        totalAmount = totalAmount + collectionLedger.Amount;
      }
    });
  }

  const verifyCardPinRequestHandler = () => {
    var encryptPassword = CryptoJS.MD5(depositRequestState?.CardPIN);
    const depositNowRequestModel = new DepositNowRequestModel(authUser);
    depositNowRequestModel.AccountHolderName = myCardsResponseData?.[0]?.Name!;
    depositNowRequestModel.AccountId = card?.AccountId!;
    depositNowRequestModel.AccountType = card?.AccountTypeName!;
    depositNowRequestModel.CardNo = myCardsResponseData?.[0]?.CardNo!;
    depositNowRequestModel.DepositDate = moment(new Date()).format();
    depositNowRequestModel.FromAccountNo = card?.AccountNumber!;
    depositNowRequestModel.AccountNo = card?.AccountNumber!;
    depositNowRequestModel.LedgerId = card?.LedgerId!;
    depositNowRequestModel.RepeatMonths = 0;
    depositNowRequestModel.SecretKey = encryptPassword.toString();
    depositNowRequestModel.TotalDepositAmount = totalAmount;
    depositNowRequestModel.TransactionMethod = '12';
    depositNowRequestModel.TransactionModels = getSelectedCollectionLedgers(
      collectionLedgerState
    );

    console.log(depositNowRequestModel);

    verifyPinRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(depositNowRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const submitCollectionLedgerAccountsSubmit = () => {
    if (totalAmount > card?.WithdrawableBalance!) {
      return '';
    } else {
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
        verifyCardPinRequestHandler();
      }
    }
  };

  const realTimeDepositRequestHandler = (otpData: string) => {
    verifyPinResponseData.OTPValue = otpData;

    realTimeDepositRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/submitDepositNow',
      JSON.stringify(verifyPinResponseData),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const cardLockRequestHandler = () => {
    if (cardPinRemainingTry !== 0) {
      updateCardPinRemainingTry(1);
    } else {
      var cardLockObj = {
        NameOnCard: myCardsResponseData?.[0]?.Name,
        CardNo: myCardsResponseData?.[0]?.CardNo,
        RequestFrom: 'Web',
      };

      cardLockRequestExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/cards_V1/lockTheCard',
        JSON.stringify(cardLockObj),
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        }
      );
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
      <LoaderDialogue
        isLoading={
          verifyPinResponseDataLoading ||
          cardLockResponseDataLoading ||
          realTimeDepositResponseDataLoading ||
          verifyPinResponseDataLoading ||
          collectionAccountsResponseDataLoading ||
          getMfsPolicyResponseDataLoading ||
          myCardsResponseDataLoading
        }
      />

      {/* Begin real Time deposit success dialog */}
      <SuccessDialogue
        isDialogueOpen={
          realTimeDepositResponseStatus === 'success' ? true : false
        }
        onCloseButtonClick={() => {
          setRealTimeDepositResponseStatus(null);
          navigate('/deposits/deposit_now');
        }}
      >
        {realTimeDepositResponseData}
      </SuccessDialogue>
      {/* End real Time deposit success dialog */}

      {/* Begin real Time deposit failed dialog */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          realTimeDepositResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="back"
        onCloseButtonClick={() => {
          setRealTimeDepositResponseStatus(null);
          navigate('/deposits/deposit_now');
        }}
        OkButtonText="Retry"
        onOkButtonClick={() => {
          setRealTimeDepositResponseStatus(null);
        }}
      >
        {realTimeDepositResponseMessage}
      </FailedDialogue>
      {/* End real Time deposit failed dialog */}

      {/* Begin verifyPin failed dialog */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={verifyPinResponseStatus === 'failed' ? true : false}
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setVerifyPinResponseStatus(null);
        }}
      >
        {verifyPinResponseMessage}
      </FailedDialogue>
      {/* End verifyPin failed dialog */}

      {verifyPinResponseStatus === 'success' && (
        <OTPValidationView
          isOTPValidationViewOpen={
            verifyPinResponseStatus === 'success' ? true : false
          }
          closeOTPValidationView={() => {
            setVerifyPinResponseStatus(null);
          }}
          otpValidateRequestHandler={realTimeDepositRequestHandler}
          resendOTPRequestHandler={verifyCardPinRequestHandler}
        />
      )}

      {/* Begin card Lock success dialog */}
      <SuccessDialogue
        isDialogueOpen={cardLockResponseDataStatus === 'success' ? true : false}
        onOkButtonClick={() => {
          setCardLockResponseStatus(null);
        }}
      >
        {cardLockResponseData}
      </SuccessDialogue>
      {/* End card Lock success dialog */}

      {/* Begin verify Pin failed dialog */}
      {verifyPinResponseMessage?.includes('Invalid Card PIN') && (
        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={verifyPinResponseStatus === 'failed' ? true : false}
          cancelButtonText="Ok"
          onCloseButtonClick={() => {
            setVerifyPinResponseStatus(null);
            cardLockRequestHandler();
          }}
        >
          {verifyPinResponseMessage +
            '. ' +
            'Remaining Tries ' +
            ' ' +
            cardPinRemainingTry}
        </FailedDialogue>
      )}
      {/* End verify Pin failed dialog */}

      {/* Begin collection Accounts failed dialog */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          collectionAccountsResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setCollectionAccountsResponseStatus(null);
        }}
      >
        {collectionAccountsResponseMessage}
      </FailedDialogue>
      {/* End collection Accounts failed dialog */}

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
                    <CardAccountPinView
                      showAccountInfo={true}
                      titleAccounts="Transfer From"
                      showCardInfo={false}
                      myCards={myCardsResponseData}
                      parentPageState={depositRequestState}
                      updateParentPageState={updateDepositRequestState}
                    />

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

                      <div>
                        {/* step 1 */}
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
                        {/* step 2 */}
                        {activeStep + 1 === 2 && (
                          <CollectionLedgerAccountsView
                            collectionLedgerState={collectionLedgerState.filter(
                              (item) => {
                                if (myCardsResponseData) {
                                  return (
                                    item.AccountNo.trim() !==
                                    myCardsResponseData[0]?.CardsAccounts[0]?.AccountNumber.trim()
                                  );
                                } else {
                                  return item;
                                }
                              }
                            )}
                            setCollectionLedgerState={setCollectionLedgerState}
                            updateCollectionLedgerState={
                              updateCollectionLedgerState
                            }
                            sectionTitle={'Accounts to Deposit'}
                            submitCollectionLedgerAccountsSubmit={
                              submitCollectionLedgerAccountsSubmit
                            }
                            cardAccountWithdrawableBalance={
                              card?.WithdrawableBalance!
                            }
                            cardLockRequestHandler={cardLockRequestHandler}
                            cardPinRemainingTry={cardPinRemainingTry}
                          />
                        )}
                        {/* step 3 */}
                        {activeStep + 1 === 3 && (
                          <CollectionLedgerAccountsView
                            collectionLedgerState={getSelectedCollectionLedgers(
                              collectionLedgerState
                            )}
                            setCollectionLedgerState={setCollectionLedgerState}
                            // updateCollectionLedgerState={
                            //   updateCollectionLedgerState
                            // }
                            sectionTitle={'Accounts to Deposit'}
                            submitCollectionLedgerAccountsSubmit={
                              submitCollectionLedgerAccountsSubmit
                            }
                            allDisable={true}
                            cardAccountWithdrawableBalance={
                              card?.WithdrawableBalance!
                            }
                            cardLockRequestHandler={cardLockRequestHandler}
                            cardPinRemainingTry={cardPinRemainingTry}
                          />
                        )}
                        {/* step 4 */}
                        {activeStep + 1 === 4 && (
                          <CardAccountPinView
                            showAccountInfo={false}
                            titleAccounts="Transfer From"
                            showCardInfo={true}
                            myCards={myCardsResponseData}
                            parentPageState={depositRequestState}
                            updateParentPageState={updateDepositRequestState}
                          />
                        )}
                      </div>

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
                              var error = '';

                              if (depositRequestState['SearchAccount'] === '') {
                                updateDepositRequestState('SearchAccount', '');

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
                                /* for (let key in collectionLedgerState) {
                                  const obj = collectionLedgerState[key];

                                  if (obj.Amount < obj.MinimumDeposit) {
                                    return;
                                  }
                                } */

                                let totalAmount = 0;

                                const myLedger = collectionLedgerState.filter(
                                  (item) => {
                                    if (myCardsResponseData) {
                                      return (
                                        item.AccountNo.trim() !==
                                        myCardsResponseData[0]?.CardsAccounts[0]?.AccountNumber.trim()
                                      );
                                    } else {
                                      return item;
                                    }
                                  }
                                );

                                if (myLedger.length > 0) {
                                  myLedger.forEach(
                                    (collectionLedger, index) => {
                                      if (collectionLedger?.isSelected) {
                                        totalAmount =
                                          totalAmount + collectionLedger.Amount;
                                      }
                                    }
                                  );
                                }

                                if (
                                  totalAmount > card?.WithdrawableBalance! ||
                                  totalAmount === 0
                                ) {
                                  return;
                                }

                                var error = '';
                                collectionLedgerState.forEach(
                                  (element, index) => {
                                    let fieldName: keyof typeof element;
                                    for (fieldName in element) {
                                      updateCollectionLedgerState(
                                        fieldName,
                                        element[fieldName],
                                        index
                                      );
                                      error =
                                        error +
                                        validateCollectionLedgerState(
                                          fieldName,
                                          element[fieldName],
                                          collectionLedgerState[index]
                                        );
                                    }
                                  }
                                );

                                if (
                                  totalAmount > card?.WithdrawableBalance! ||
                                  totalAmount === 0
                                ) {
                                  return;
                                } else if (error.length === 0) {
                                  handleNext();
                                }
                              }
                            } else if (activeStep === 2) {
                              handleNext();
                            }

                            if (activeStep === steps.length - 1) {
                              if (cardPinRemainingTry === 0) {
                                cardLockRequestHandler();
                              } else {
                                submitCollectionLedgerAccountsSubmit();
                              }
                            }
                          }}
                          type="button"
                          label={
                            activeStep === steps.length - 1 ? 'Verify' : 'Next'
                          }
                          styleClass="w-2/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                          name={''}
                          disabled={
                            activeStep === 0 && !collectionAccountsResponseData
                          }
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default DepositNowPage;
