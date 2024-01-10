import logoIcon from 'assets/images/logo/logocccul.png';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import { useCardVerificationState } from 'authenticated_pages/shared/hooks/useCardVerificationState';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCard from 'global_shared/components/MyCard';
import MyModal from 'global_shared/components/MyModal';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import TermsConditionsDialog from 'global_shared/components/dialogues/TermsConditionsDialog';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useAuthUserAndMenu from 'global_shared/hooks/useAuthUserAndMenu';
import useCardPinRemainingTry from 'global_shared/hooks/useCardPinRemainingTry';
import useCommand from 'global_shared/hooks/useCommand';
import { CardHandler } from 'global_shared/model/data/CardHandler';
import { TermsAndConditionModel } from 'global_shared/model/data/TermsAndConditionModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InstantLoanEligibleDialog from './instant_loan/components/InstantLoanEligibleDialog';
import InstantLoanNotEligibleDialogue from './instant_loan/components/InstantLoanNotEligibleDialogue';
import useInstantLoanApplicationState from './instant_loan/hooks/useInstantLoanApplicationState';
import { InstantLoanApplicationRequestModel } from './instant_loan/model/request/InstantLoanApplicationRequestModel';
import { InstantLoanEligibilityResponseModel } from './instant_loan/model/response/InstantLoanEligibilityResponseModel';
import { GetOfficeHourPoliceModel } from './product_loan/model/response/GetOfficeHourPoliceModel';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  06 July 2023
 *========================================================================**/

function ApplyLoans() {
  const { authUser, IsMenuExist } = useAuthUserAndMenu();
  const navigate = useNavigate();
  const [isNotEligibilityDialogueOpen, setNotEligibilityDialogueOpen] =
    useState(false);
  const [isEligibilityDialogueOpen, setEligibilityDialogueOpen] =
    useState(false);
  const [isUpcomingFeatureDialogueOpen, setUpcomingFeatureDialogueOpen] =
    useState(false);

  const {
    updateInstantLoanApplicationState,
    setInstantLoanApplicationState,
    instantLoanApplicationState,
  } = useInstantLoanApplicationState();

  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();

  const { cardVerificationState, updateCardVerificationState } =
    useCardVerificationState();
  const {
    loading: productLoanTermsAndConditionResponseDataLoading,
    data: productLoanTermsAndConditionResponseData,
    status: productLoanTermsAndConditionResponseStatus,
    setStatus: setProductLoanTermsAndConditionResponseStatus,
    executeCommand: productLoanTermsAndConditionResponseCommand,
  } = useCommand<TermsAndConditionModel | null>();

  console.log(authUser);
  const {
    loading: instantLoanTermsAndConditionResponseDataLoading,
    data: instantLoanTermsAndConditionResponseData,
    status: instantLoanTermsAndConditionResponseStatus,
    setStatus: setInstantLoanTermsAndConditionResponseStatus,
    executeCommand: instantLoanTermsAndConditionRequestExecuteCommand,
  } = useCommand<TermsAndConditionModel | null>();

  const {
    loading: instantLoanEligibilityResponseDataLoading,
    data: instantLoanEligibilityResponseData,
    message: instantLoanEligibilityResponseMessage,
    status: instantLoanEligibilityResponseStatus,
    setStatus: setInstantLoanEligibilityResponseStatus,
    executeCommand: instantLoanEligibilityRequestExecuteCommand,
  } = useCommand<InstantLoanEligibilityResponseModel | null>();

  const {
    loading: myCardsResponseDataLoading,
    data: myCardsResponseData,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[] | null>();

  const {
    loading: getOfficeHourPoliceLoading,
    data: getOfficeHourPoliceData,
    status: getOfficeHourPoliceStatus,
    message: getOfficeHourPoliceMessage,
    executeCommand: getOfficeHourPoliceExecuteCommand,
  } = useCommand<GetOfficeHourPoliceModel[] | null>();

  console.log(getOfficeHourPoliceMessage);

  const {
    data: verifyCardPinResponseData,
    loading: verifyCardPinResponseDataLoading,
    message: verifyCardPinResponseMessage,
    status: verifyCardPinResponseStatus,
    setStatus: setVerifyCardPinResponseStatus,
    executeCommand: verifyCardPinRequestCommand,
  } = useCommand<any>();

  const {
    data: applyInstantLoanResponseData,
    loading: applyInstantLoanResponseDataLoading,
    message: applyInstantLoanResponseMessage,
    setMessage: setApplyInstantLoanResponseMessage,
    status: applyInstantLoanResponseStatus,
    setStatus: setApplyInstantLoanResponseStatus,
    executeCommand: applyInstantLoanRequestCommand,
  } = useCommand<string | null>();

  const {
    loading: cardLockResponseDataLoading,
    data: cardLockResponseData,
    status: cardLockResponseStatus,
    setStatus: setCardLockResponseStatus,
    executeCommand: cardLockRequestCommand,
  } = useCommand<string | null>();

  const headers = {
    'Content-Type': 'application/json',
    token: localStorage.getItem('token'),
  };

  const instantLoanTermsAndConditionsRequestHandler = () => {
    const instantLoanTermsAndConditionsRequestModel = {
      ApplicationName: 'MFS',
      ContentName: 'Instant Loan Policy',
      RequestFrom: 'Web',
    };

    instantLoanTermsAndConditionRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(instantLoanTermsAndConditionsRequestModel),
      { headers: headers }
    );
  };

  const productLoanTermsAndConditionsRequestHandler = () => {
    const productLoanTermsAndConditionsRequestModel = {
      ApplicationName: 'MFS',
      ContentName: 'product loan policy',
      RequestFrom: 'Web',
    };

    productLoanTermsAndConditionResponseCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(productLoanTermsAndConditionsRequestModel),
      { headers: headers }
    );
  };

  const instantLoanTermsAndConditionsAcceptHandler = () => {
    const instantLoanEligibilityRequestModel = new BaseRequestModel(authUser);

    instantLoanEligibilityRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/loans_v3/checkInstantLoanEligibility',
      JSON.stringify(instantLoanEligibilityRequestModel),
      { headers: headers }
    );
  };

  const productLoanTermsAndConditionsAcceptHandler = () => {
    navigate('/loans/deposit_loan ');
  };

  var myCards: CardHandler | null = null;
  if (myCardsResponseData !== null) {
    myCards = new CardHandler(myCardsResponseData);
  }

  useEffect(() => {
    if (instantLoanEligibilityResponseData !== null) {
      if (
        instantLoanEligibilityResponseData?.EligibilityMessage.includes(
          'Not Eligible'
        )
      ) {
        setNotEligibilityDialogueOpen(true);
      } else {
        setEligibilityDialogueOpen(true);
      }
    }
  }, [instantLoanEligibilityResponseData, cardLockResponseStatus]);

  useEffect(() => {
    if (getOfficeHourPoliceData === null) {
      var officeHourPoliceModel = new BaseRequestModel(authUser);

      console.log(officeHourPoliceModel);
      getOfficeHourPoliceExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/info_V1/GetOfficeHourPolicy',
        JSON.stringify(officeHourPoliceModel),
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    var myCardsRequestModel = new BaseRequestModel(authUser);

    myCardsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V2/myCards',
      JSON.stringify(myCardsRequestModel),
      { headers: headers }
    );
  }, []);

  const verifyCardPinRequestHandler = () => {
    var encryptPassword = CryptoJS.MD5(cardVerificationState?.CardPIN);

    const applyInstantLoanRequestModel = new InstantLoanApplicationRequestModel(
      authUser
    );
    applyInstantLoanRequestModel.ModuleCode = '50';
    applyInstantLoanRequestModel.NameOnCard =
      myCards?.getHandledCard()[0]?.NameOnCard!;
    applyInstantLoanRequestModel.SecretKey = encryptPassword.toString();
    applyInstantLoanRequestModel.CardNo = myCards?.getHandledCard()[0]?.CardNo!;
    applyInstantLoanRequestModel.AccountNo =
      myCards?.getHandledCard()[0]?.AccountNumber!;
    applyInstantLoanRequestModel.AppliedAmount = parseInt(
      instantLoanApplicationState?.AppliedAmount
    );
    applyInstantLoanRequestModel.Amount = 0.0;

    verifyCardPinRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(applyInstantLoanRequestModel),
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
      var cardLockRequestModel = {
        NameOnCard: myCards?.getHandledCard()[0]?.NameOnCard,
        CardNo: myCards?.getHandledCard()[0]?.CardNo,
        RequestFrom: 'Web',
      };

      cardLockRequestCommand(
        process.env.REACT_APP_BASE_URL + '/cards_V1/lockTheCard',
        JSON.stringify(cardLockRequestModel),
        { headers: headers }
      );
    }
  };

  const applyInstantLoanRequestHandler = (otpValue: string) => {
    verifyCardPinResponseData.OTPValue = otpValue;

    applyInstantLoanRequestCommand(
      process.env.REACT_APP_BASE_URL + '/loans_v2/submitInstantLoan',
      JSON.stringify(verifyCardPinResponseData),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };
  var card: CardHandler = new CardHandler([]);
  if (myCardsResponseData !== null) {
    card = new CardHandler(myCardsResponseData);
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <LoaderDialogue
        isLoading={
          productLoanTermsAndConditionResponseDataLoading ||
          instantLoanTermsAndConditionResponseDataLoading ||
          instantLoanEligibilityResponseDataLoading ||
          verifyCardPinResponseDataLoading ||
          applyInstantLoanResponseDataLoading ||
          myCardsResponseDataLoading ||
          cardLockResponseDataLoading ||
          getOfficeHourPoliceLoading
        }
      />
      {verifyCardPinResponseStatus === 'success' && (
        <OTPValidationView
          isOTPValidationViewOpen={
            verifyCardPinResponseStatus === 'success' ? true : false
          }
          closeOTPValidationView={() => {
            setVerifyCardPinResponseStatus(null);
            setApplyInstantLoanResponseStatus(null);
            // closeDialogue();
          }}
          otpValidateRequestHandler={applyInstantLoanRequestHandler}
          resendOTPRequestHandler={verifyCardPinRequestHandler}
        />
      )}
      <FailedDialogue
        isDialogueOpen={
          instantLoanEligibilityResponseStatus === 'failed' ? true : false
        }
        onCloseButtonClick={() => {
          setInstantLoanEligibilityResponseStatus(null);
        }}
        cancelButtonText={'ok'}
        dialogueSize={Size.Small}
      >
        {instantLoanEligibilityResponseMessage}
      </FailedDialogue>
      <FailedDialogue
        isDialogueOpen={
          applyInstantLoanResponseStatus === 'failed' ? true : false
        }
        onCloseButtonClick={() => {
          setApplyInstantLoanResponseStatus(null);
        }}
      >
        {applyInstantLoanResponseMessage}
      </FailedDialogue>
      <SuccessDialogue
        isDialogueOpen={
          applyInstantLoanResponseStatus === 'success' ? true : false
        }
        cancelButtonText={'ok'}
        onCloseButtonClick={() => {
          setApplyInstantLoanResponseStatus(null);
          setVerifyCardPinResponseStatus(null);
          navigate('/loans/my_loans');
        }}
      >
        {applyInstantLoanResponseData}
      </SuccessDialogue>
      <SuccessDialogue
        isDialogueOpen={cardLockResponseStatus === 'success' ? true : false}
        onCloseButtonClick={() => {
          setCardLockResponseStatus(null);
        }}
      >
        {cardLockResponseData}
      </SuccessDialogue>
      <FailedDialogue
        isDialogueOpen={verifyCardPinResponseStatus === 'failed' ? true : false}
        onCloseButtonClick={() => {
          setVerifyCardPinResponseStatus(null);
        }}
      >
        {cardLockResponseData}
      </FailedDialogue>
      <FailedDialogue
        isDialogueOpen={verifyCardPinResponseStatus === 'failed' ? true : false}
        onCloseButtonClick={() => {
          setVerifyCardPinResponseStatus(null);
        }}
      >
        {verifyCardPinResponseMessage}
      </FailedDialogue>
      {verifyCardPinResponseMessage?.includes('Invalid Card PIN') && (
        <FailedDialogue
          isDialogueOpen={
            verifyCardPinResponseStatus === 'failed' ? true : false
          }
          onCloseButtonClick={() => {
            setVerifyCardPinResponseStatus(null);
            cardLockRequestHandler();
          }}
        >
          {verifyCardPinResponseMessage +
            '. ' +
            'Remaining Tries ' +
            ' ' +
            cardPinRemainingTry}
        </FailedDialogue>
      )}
      <TermsConditionsDialog
        dialogueTitle={'ইনস্ট্যান্ট লোনের নীতিমালা'}
        dialogueContent={instantLoanTermsAndConditionResponseData}
        isTermsAndConditionsDialog={
          instantLoanTermsAndConditionResponseStatus === 'success'
            ? true
            : false
        }
        closeOrRejectTermsAndConditionsDialog={() => {
          setInstantLoanTermsAndConditionResponseStatus(null);
        }}
        acceptTermsAndConditions={instantLoanTermsAndConditionsAcceptHandler}
      />

      <TermsConditionsDialog
        dialogueTitle={'ডিপোজিট লোনের নীতিমালা'}
        dialogueContent={productLoanTermsAndConditionResponseData}
        isTermsAndConditionsDialog={
          productLoanTermsAndConditionResponseStatus === 'success'
            ? true
            : false
        }
        closeOrRejectTermsAndConditionsDialog={() => {
          setProductLoanTermsAndConditionResponseStatus(null);
        }}
        acceptTermsAndConditions={productLoanTermsAndConditionsAcceptHandler}
      />

      {/* Begin Upcoming dialogue open */}
      <MyModal
        size={Size.Small}
        show={isUpcomingFeatureDialogueOpen}
        onClose={() => {
          setUpcomingFeatureDialogueOpen(false);
        }}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="bg-background p-6">
              <div className="hover:animate-swing flex w-full flex-col items-center hover:cursor-pointer">
                <img src={logoIcon} alt="" className="w-28" />
                <h3 className="font-bold text-primary">
                  Dhaka Credit Web Portal
                </h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex w-full justify-center gap-4 bg-background p-4">
              <button
                className=" w-2/5  rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                onClick={() => {
                  setUpcomingFeatureDialogueOpen(false);
                }}
              >
                OK
              </button>
            </div>
          }
          onCancel={() => {
            setUpcomingFeatureDialogueOpen(false);
          }}
        >
          <div className="content mt-5 bg-surface p-4 text-onSurface">
            <p className="text-center font-semibold">
              Thank you for showing your interest in us, We are going to
              implement general loan application very soon. Please stay
              connected with us.
            </p>
          </div>
        </MyDialogueView>
      </MyModal>
      {/* End Upcoming dialogue open */}
      {isEligibilityDialogueOpen && (
        <InstantLoanEligibleDialog
          isEligibilityDialogueOpen={isEligibilityDialogueOpen}
          eligibilityData={
            instantLoanEligibilityResponseData?.EligibleConditions
          }
          instantLoanApplicationInputState={instantLoanApplicationState}
          updateInstantLoanApplicationState={updateInstantLoanApplicationState}
          closeDialogue={() => {
            setEligibilityDialogueOpen(false);
            setInstantLoanApplicationState({
              AppliedAmount: '',
              Errors: {
                AppliedAmount: '',
              },
            });
          }}
          myCards={myCardsResponseData}
          cardVerificationState={cardVerificationState}
          updateCardVerificationState={updateCardVerificationState}
          verifyCardPinRequestHandler={verifyCardPinRequestHandler}
        />
      )}
      <InstantLoanNotEligibleDialogue
        isNotEligibilityDialogueOpen={isNotEligibilityDialogueOpen}
        closeDialogue={() => {
          setNotEligibilityDialogueOpen(false);
        }}
        notEligibleReason={
          instantLoanEligibilityResponseData?.EligibleConditions
        }
      />
      <div className="grid w-full grid-cols-1 gap-3 text-onSurface md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {IsMenuExist('Apply Instant Loan') ? (
          <motion.div
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            onClick={() => {
              instantLoanTermsAndConditionsRequestHandler();
            }}
          >
            <MyCard
              rounded={RoundedClass.Medium}
              shadow={Size.Small}
              minimumHeight={80}
              bgColor={'bg-surface'}
            >
              <div
                className={`group flex items-center gap-4 p-4 text-left hover:cursor-pointer`}
              >
                <i className="fa-solid fa-sack-dollar text-3xl text-primary"></i>
                <p className="font-semibold">Apply for Instant Loan</p>
              </div>
            </MyCard>
          </motion.div>
        ) : null}
        {IsMenuExist('Apply Product Loan') ? (
          <motion.div
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            onClick={() => {
              // if (getOfficeHourPoliceData?.[0]?.IsAppliable) {
              productLoanTermsAndConditionsRequestHandler();
              // }
            }}
          >
            <MyCard
              rounded={RoundedClass.Medium}
              shadow={Size.Small}
              minimumHeight={80}
              bgColor={
                getOfficeHourPoliceData?.[0]?.IsAppliable
                  ? 'bg-surface'
                  : 'bg-gray-200'
              }
            >
              <div
                className={`group flex items-center gap-4 p-4 text-left hover:cursor-pointer ${
                  getOfficeHourPoliceData?.[0]?.IsAppliable
                    ? ''
                    : 'disabled-card'
                }`}
              >
                <i className="fa-solid fa-sack-dollar text-3xl text-primary"></i>
                <div>
                  <p className={`font-semibold`}>Apply for Deposit Loan</p>
                  {!getOfficeHourPoliceData?.[0]?.IsAppliable && (
                    <div className="text-sm">
                      {getOfficeHourPoliceData?.[0]?.ReturnMessage}
                    </div>
                  )}
                </div>
              </div>
            </MyCard>
          </motion.div>
        ) : null}
        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          onClick={() => {
            setUpcomingFeatureDialogueOpen(true);
          }}
        >
          <MyCard
            rounded={RoundedClass.Medium}
            shadow={Size.Small}
            minimumHeight={80}
            bgColor={'bg-surface'}
          >
            <div
              className={`group flex items-center gap-4 p-4 text-left hover:cursor-pointer`}
            >
              <i className="fa-solid fa-sack-dollar text-3xl text-primary"></i>
              <p className="font-semibold">Apply for General Loan</p>
            </div>
          </MyCard>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ApplyLoans;
