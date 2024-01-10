import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import { PaymentServiceResponseModel } from 'authenticated_pages/payment/dc_payment/model/data/PaymentServiceResponseModel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCardPinRemainingTry from 'global_shared/hooks/useCardPinRemainingTry';
import useCommand from 'global_shared/hooks/useCommand';
import { CardHandler } from 'global_shared/model/data/CardHandler';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMakePaymentState from './hooks/useMakePaymentState';
import { PaymentRequestModel } from './model/request/PaymentRequestModel';

import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useCardVerificationState } from 'authenticated_pages/shared/hooks/useCardVerificationState';
import { validateCardVerificationState } from 'authenticated_pages/shared/validations/validateCardVerificationState';
import { fundTransferValidation } from 'authenticated_pages/transfer/transfer_within_dc/utils/fundTransferValidation';
import * as React from 'react';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';
import { Size } from 'global_shared/enum/Size';
/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  07 July 2023
 *========================================================================**/
const steps = ['PAYMENT TO', 'ACCOUNT HOLDER VERIFICATION'];

function DcPayment() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();
  const { makePaymentState, updateMakePaymentState } = useMakePaymentState();
  const { cardVerificationState, updateCardVerificationState } =
    useCardVerificationState();
  const {
    loading: myCardsResponseDataLoading,
    data: myCardsResponseData,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[] | null>();

  const {
    loading: paymentMenusResponseDataLoading,
    data: paymentMenusResponseData,
    executeCommand: paymentMenusRequestCommand,
  } = useCommand<PaymentServiceResponseModel[] | null>();

  const {
    loading: cardLockResponseDataLoading,
    data: cardLockResponseData,
    status: cardLockResponseStatus,
    setStatus: setCardLockResponseStatus,
    executeCommand: cardLockRequestCommand,
  } = useCommand<string | null>();

  const {
    data: verifyPinResponseData,
    loading: verifyPinResponseDataLoading,
    status: verifyPinResponseStatus,
    message: verifyPinResponseMessage,
    setStatus: setVerifyPinResponseStatus,
    executeCommand: verifyPinRequestCommand,
  } = useCommand<any>();

  const {
    data: makePaymentResponseData,
    loading: makePaymentResponseDataLoading,
    status: makePaymentResponseStatus,
    message: makePaymentResponseMessage,
    setMessage: setMakePaymentResponseMessage,
    setStatus: setMakePaymentResponseStatus,
    executeCommand: makePaymentRequestCommand,
  } = useCommand<string | null>();

  var myCards: CardHandler | null = null;

  if (myCardsResponseData !== null) {
    myCards = new CardHandler(myCardsResponseData);
  }

  useEffect(() => {
    var paymentMenusRequestModel = new BaseRequestModel(authUser);

    paymentMenusRequestCommand(
      process.env.REACT_APP_BASE_URL + '/payments_v1/getPaymentServices',
      JSON.stringify(paymentMenusRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    myCardsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V2/myCards',
      JSON.stringify(paymentMenusRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [cardLockResponseData]);

  useEffect(() => {
    if (myCardsResponseData !== null) {
      updateCardVerificationState(
        'CardNo',
        myCardsResponseData?.[0]?.CardNo?.trim()
      );
      updateCardVerificationState(
        'CardAccount',
        myCardsResponseData?.[0]?.CardsAccounts?.[0].AccountNumber.trim()
      );
    }
  }, [myCardsResponseData]);

  const cardLockRequestHandler = () => {
    if (cardPinRemainingTry !== 0) {
      updateCardPinRemainingTry(1);
    } else {
      var cardLockObj = {
        NameOnCard: myCards?.getHandledCard()[0]?.NameOnCard,
        CardNo: myCards?.getHandledCard()[0]?.CardNo,
        RequestFrom: 'Web',
      };

      cardLockRequestCommand(
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

  const verifyCardPinRequestHandler = () => {
    var encryptPassword = CryptoJS.MD5(cardVerificationState?.CardPIN);
    const makePaymentRequestModel = new PaymentRequestModel(authUser);
    if (myCardsResponseData) {
      makePaymentRequestModel.AccHolder =
        myCardsResponseData[0].CardsAccounts[0].AccountNumber!;
      makePaymentRequestModel.AccNo =
        myCardsResponseData[0].CardsAccounts[0].AccountNumber!;
      makePaymentRequestModel.AccountNo =
        myCardsResponseData[0].CardsAccounts[0].AccountNumber!;
      makePaymentRequestModel.AccType =
        myCardsResponseData[0].CardsAccounts[0].AccountTypeCode!;
      makePaymentRequestModel.AccountNumber =
        myCardsResponseData[0].CardsAccounts[0].AccountNumber!;
    }
    makePaymentRequestModel.AccTransfer = makePaymentState?.ServiceName;
    makePaymentRequestModel.Amount = parseInt(makePaymentState?.Amount);
    makePaymentRequestModel.CardNo = myCardsResponseData?.[0]?.CardNo!;
    makePaymentRequestModel.SecretKey = encryptPassword.toString();
    makePaymentRequestModel.NameOnCard = myCardsResponseData?.[0]?.Name!;
    makePaymentRequestModel.Remarks = makePaymentState?.Reference;
    makePaymentRequestModel.MobileNumber = '0'; //Required to be zero

    verifyPinRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(makePaymentRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const makePaymentRequestHandler = (otpData: string) => {
    verifyPinResponseData.OTPValue = otpData;

    makePaymentRequestCommand(
      process.env.REACT_APP_BASE_URL + '/payments_v2/submitPayment',
      JSON.stringify(verifyPinResponseData),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <LoaderDialogue
        isLoading={
          verifyPinResponseDataLoading ||
          makePaymentResponseDataLoading ||
          myCardsResponseDataLoading ||
          cardLockResponseDataLoading ||
          paymentMenusResponseDataLoading
        }
      />
      {verifyPinResponseStatus === 'success' && (
        <OTPValidationView
          isOTPValidationViewOpen={
            verifyPinResponseStatus === 'success' ? true : false
          }
          closeOTPValidationView={() => {
            setVerifyPinResponseStatus(null);
          }}
          otpValidateRequestHandler={makePaymentRequestHandler}
          resendOTPRequestHandler={verifyCardPinRequestHandler}
        />
      )}

      {/* Begin Make payment request success dialogue */}

      <SuccessDialogue
        isDialogueOpen={makePaymentResponseStatus === 'success' ? true : false}
        onCloseButtonClick={() => {
          setMakePaymentResponseStatus(null);
          navigate('/payment/dc_payment');
        }}
      >
        {makePaymentResponseData}
      </SuccessDialogue>
      {/* End Make payment request success dialogue */}

      {/* Begin Make payment request failed dialogue */}

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={makePaymentResponseStatus === 'failed' ? true : false}
        OkButtonText="Retry"
        onOkButtonClick={() => {
          setMakePaymentResponseStatus(null);
        }}
        cancelButtonText="Back"
        onCloseButtonClick={() => {
          navigate('/payment/dc_payment');
        }}
      >
        {makePaymentResponseMessage}
      </FailedDialogue>
      {/* End Make payment request failed dialogue */}

      {/* Begin card lock request success dialogue */}
      <SuccessDialogue
        isDialogueOpen={cardLockResponseStatus === 'success' ? true : false}
        onOkButtonClick={() => {
          setCardLockResponseStatus(null);
        }}
      >
        {cardLockResponseData}
      </SuccessDialogue>

      {/* End card lock request success dialogue */}

      {/* Begin verify card PIN request failed dialogue */}
      {verifyPinResponseMessage?.includes('Invalid Card PIN') && (
        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={verifyPinResponseStatus === 'failed' ? true : false}
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setVerifyPinResponseStatus(null);
            cardLockRequestHandler();
          }}
        >
          {verifyPinResponseMessage +
            'Remaining Tries' +
            ' ' +
            cardPinRemainingTry}
        </FailedDialogue>
      )}
      {/* Begin verify card PIN request failed dialogue */}

      <div className="grid grid-cols-1 gap-8 rounded lg:grid-cols-2">
        <CardAccountPinView
          showAccountInfo={true}
          titleAccounts="Payment From"
          showCardInfo={false}
          myCards={myCardsResponseData}
          parentPageState={makePaymentState}
          updateParentPageState={updateMakePaymentState}
        />

        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className=" items-center rounded bg-surface p-6 shadow lg:p-10"
        >
          <div className="w-full">
            <motion.h2 className="text-center text-lg font-bold">
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
            </motion.h2>
            {activeStep + 1 === 1 && (
              <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-1">
                <div className="relative mt-3 w-full">
                  <MyDropdown
                    label="Service Name"
                    name="ServiceName"
                    required={true}
                    disabled={false}
                    value={makePaymentState?.ServiceName}
                    error={makePaymentState?.Errors?.ServiceName}
                    dropDownData={paymentMenusResponseData?.map(
                      (obj, index) => {
                        return {
                          id: index,
                          value: obj?.ServiceAccount,
                          label: obj?.ServiceName,
                        };
                      }
                    )}
                    onChange={(event) => {
                      updateMakePaymentState(
                        event.target.name,
                        event.target.value
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-truck-medical"></i>}
                  />
                </div>

                <div className="">
                  <MyTextInput
                    label="Amount"
                    name="Amount"
                    id="Amount"
                    value={parseInt(makePaymentState?.Amount.toString())}
                    inputType="number"
                    disabled={false}
                    required={true}
                    error={
                      parseInt(makePaymentState?.Amount) >
                      myCards?.getHandledCard()?.[0]?.WithdrawableBalance!
                        ? 'Cross  withdrawable amount'
                        : makePaymentState?.Errors?.Amount
                    }
                    onChangeHandler={(event) => {
                      updateMakePaymentState(
                        event.target.name,
                        event.target.value
                      );
                    }}
                    leftIcon={
                      <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                    }
                  />
                </div>
                <div className="">
                  <MyTextInput
                    label={
                      makePaymentState?.ServiceName === 'T-0058497'
                        ? 'Student ID'
                        : 'Reference'
                    }
                    name="Reference"
                    id="Reference"
                    value={makePaymentState?.Reference}
                    inputType="text"
                    disabled={false}
                    required={false}
                    error={makePaymentState?.Errors?.Reference}
                    onChangeHandler={(event) => {
                      updateMakePaymentState(
                        event.target.name,
                        event.target.value
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-asterisk"></i>}
                  />
                </div>
              </div>
            )}
            {activeStep + 1 === 2 && (
              <CardAccountPinView
                showAccountInfo={false}
                titleAccounts=""
                showCardInfo={true}
                myCards={myCardsResponseData}
                parentPageState={cardVerificationState}
                updateParentPageState={updateCardVerificationState}
              />
            )}
          </div>
          <div className="flex w-full items-center justify-center gap-4 p-6">
            <MyButton
              disabled={activeStep === 0 ? true : false}
              onClick={() => {
                handleBack();
              }}
              type="button"
              label="Back"
              styleClass="w-2/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
              name={''}
            />

            <MyButton
              disabled={false}
              onClick={() => {
                var error = '';
                if (activeStep + 1 === 1) {
                  let fieldName: keyof typeof makePaymentState;
                  for (fieldName in makePaymentState) {
                    updateMakePaymentState(
                      fieldName,
                      makePaymentState[fieldName]
                    );
                    error =
                      error +
                      fundTransferValidation(
                        fieldName,
                        makePaymentState[fieldName]
                      );
                  }

                  if (error.length === 0) {
                    handleNext();
                  }
                }
                if (activeStep + 1 === 2) {
                  let fieldName: keyof typeof cardVerificationState;
                  for (fieldName in cardVerificationState) {
                    updateCardVerificationState(
                      fieldName,
                      cardVerificationState[fieldName]
                    );
                    error =
                      error +
                      validateCardVerificationState(
                        fieldName,
                        cardVerificationState[fieldName]
                      );
                  }

                  if (error) {
                    window.scrollTo({
                      top: window.innerHeight / 2,
                      behavior: 'smooth',
                    });
                  }
                  if (error.length === 0) {
                    if (cardPinRemainingTry === 0) {
                      cardLockRequestHandler();
                    } else {
                      verifyCardPinRequestHandler();
                    }
                  }
                }
              }}
              type="button"
              label="Next"
              styleClass="w-2/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
              name={''}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default DcPayment;
