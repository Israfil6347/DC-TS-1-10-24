import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import CardPage from 'authenticated_pages/info/financial_card/CardPage';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import { useCardVerificationState } from 'authenticated_pages/shared/hooks/useCardVerificationState';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';
import { validateCardVerificationState } from 'authenticated_pages/shared/validations/validateCardVerificationState';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import useCardPinRemainingTry from 'global_shared/hooks/useCardPinRemainingTry';
import useCommand from 'global_shared/hooks/useCommand';
import { CardHandler } from 'global_shared/model/data/CardHandler';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import useGenerateOneTimeQRState from './hooks/useGenerateOneTimeQRState';
import { OneTimeCashWithdrawQRRequestModel } from './model/request/OneTimeCashWithdrawQRRequestModel';
import { validateGenerateOneTimeQRState } from './validation/validateGenerateOneTimeQRState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
const steps = ['CASH FROM ATM', 'ACCOUNT HOLDER VERIFICATION'];

const ThroughATMPage = () => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const { generateOneTimeQRState, updateGenerateOneTimeQRState } =
    useGenerateOneTimeQRState();
  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();

  const { cardVerificationState, updateCardVerificationState } =
    useCardVerificationState();

  const {
    loading: cardLockResponseDataLoading,
    data: cardLockResponseData,
    status: cardLockResponseStatus,
    setStatus: setCardLockResponseStatus,
    executeCommand: cardLockRequestCommand,
  } = useCommand<string | null>();

  const {
    loading: verifyCardPINResponseDataLoading,
    data: verifyCardPINResponseData,
    message: verifyCardPINResponseMessage,
    status: verifyCardPINResponseStatus,
    setStatus: setVerifyCardPINResponseStatus,
    executeCommand: verifyCardPINRequestCommand,
  } = useCommand<OneTimeCashWithdrawQRRequestModel | null>();

  console.log(verifyCardPINResponseStatus);

  const {
    loading: generateOneTimeQRResponseDataLoading,
    data: generateOneTimeQRResponseData,
    message: generateOneTimeQRResponseMessage,
    setMessage: setGenerateOneTimeQRResponseMessage,
    status: generateOneTimeQRResponseStatus,
    setStatus: setGenerateOneTimeQRResponseStatus,
    executeCommand: generateOneTimeQRRequestCommand,
  } = useCommand<string>();

  const {
    loading: myCardsResponseDataLoading,
    data: myCardsResponseData,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[]>();

  const cardLockRequestHandler = () => {
    if (cardPinRemainingTry !== 0) {
      updateCardPinRemainingTry(1);
    } else {
      var cardLockObj = {
        NameOnCard: card?.getHandledCard()[0]?.NameOnCard,
        CardNo: card?.getHandledCard()[0]?.CardNo,
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

  var card: CardHandler | null = null;

  if (myCardsResponseData !== null) {
    card = new CardHandler(myCardsResponseData);
  }

  useEffect(() => {
    var myCardsRequestModel = new BaseRequestModel(authUser);
    myCardsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V2/myCards',
      JSON.stringify(myCardsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [cardLockResponseStatus]);

  useEffect(() => {
    if (myCardsResponseData !== null) {
      updateCardVerificationState(
        'CardNo',
        myCardsResponseData?.[0]?.CardNo?.trim()
      );
      updateCardVerificationState(
        'CardAccount',
        myCardsResponseData?.[0]?.CardsAccounts?.[0]?.AccountNumber.trim()
      );
    }
  }, [myCardsResponseData]);

  const generateOneTimeQRRequestHandler = (otpData: string) => {
    if (verifyCardPINResponseData) {
      verifyCardPINResponseData.OTPValue = otpData;
    }

    generateOneTimeQRRequestCommand(
      process.env.REACT_APP_BASE_URL + '/withdraw_v1/generateOneTimeWithdrawQR',
      JSON.stringify(verifyCardPINResponseData),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const verifyCardPINRequestHandler = () => {
    var encryptCardPIN = CryptoJS.MD5(cardVerificationState?.CardPIN);
    const verifyPinRequestModel = new OneTimeCashWithdrawQRRequestModel(
      authUser
    );
    verifyPinRequestModel.CardNo = myCardsResponseData?.[0]?.CardNo!;
    verifyPinRequestModel.Amount = parseInt(generateOneTimeQRState?.Amount);
    verifyPinRequestModel.SecretKey = encryptCardPIN.toString();
    verifyPinRequestModel.AccountNo = card?.getHandledCard()[0]?.AccountNumber!;
    verifyPinRequestModel.NameOnCard = card?.getHandledCard()[0]?.NameOnCard!;

    verifyCardPINRequestCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(verifyPinRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const notify = () => toast('Minimum withdraw amount is 20000!');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (myCardsResponseData?.length === 0) {
    return <CardPage />;
  } else {
    return (
      <>
        <LoaderDialogue
          isLoading={
            verifyCardPINResponseDataLoading ||
            generateOneTimeQRResponseDataLoading ||
            myCardsResponseDataLoading ||
            cardLockResponseDataLoading
          }
        />

        {/* Begin verify card PIN request failed dialogue */}
        {verifyCardPINResponseMessage?.includes('Invalid Card PIN') && (
          <FailedDialogue
            dialogueSize={Size.Small}
            isDialogueOpen={
              verifyCardPINResponseStatus === 'failed' ? true : false
            }
            cancelButtonText="ok"
            onCloseButtonClick={() => {
              setVerifyCardPINResponseStatus(null);
              cardLockRequestHandler();
            }}
          >
            <div className="px-8 py-6 text-center md:px-14">
              {verifyCardPINResponseMessage +
                'Remaining Tries' +
                ' ' +
                cardPinRemainingTry}
            </div>
          </FailedDialogue>
        )}
        {/* End verify card PIN request failed dialogue */}

        {verifyCardPINResponseStatus === 'success' && (
          <OTPValidationView
            isOTPValidationViewOpen={
              verifyCardPINResponseStatus === 'success' ? true : false
            }
            closeOTPValidationView={() => {
              setVerifyCardPINResponseStatus(null);
            }}
            otpValidateRequestHandler={generateOneTimeQRRequestHandler}
            resendOTPRequestHandler={verifyCardPINRequestHandler}
          />
        )}

        {/* Begin generate one time QR request success dialogue */}
        <MyModal
          show={generateOneTimeQRResponseStatus === 'success' ? true : false}
          size={Size.Small}
          onClose={() => {
            setGenerateOneTimeQRResponseStatus(null);
            navigate('/Withdraw');
          }}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="w-full bg-background py-6">
                <div className="flex w-full flex-col items-center gap-3">
                  <img src={logoIcon} alt="" className="w-28" />
                  <h3 className="text-xl font-bold uppercase text-primary">
                    QR Code For ATM
                  </h3>
                  <span className="px-6 text-center text-primary">
                    Scan This QR Code to Dhaka Credit ATM within 10 minutes to
                    get your cash
                  </span>
                </div>
              </div>
            }
            dialogueFooter={
              <div className="flex w-full items-center justify-center gap-4 bg-background p-6">
                <button
                  className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  onClick={() => {
                    setGenerateOneTimeQRResponseStatus(null);
                    navigate('/Withdraw');
                  }}
                >
                  Ok
                </button>
              </div>
            }
            onCancel={() => {
              setGenerateOneTimeQRResponseStatus(null);
              navigate('/Withdraw');
            }}
          >
            <div className="flex justify-center px-8 py-6 md:px-14">
              {<QRCode value={generateOneTimeQRResponseData!} />}
              {}
            </div>
          </MyDialogueView>
        </MyModal>
        {/* End generate one time QR request success dialogue */}

        {/* <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            verifyCardPINResponseStatus === 'failed' ? true : false
          }
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setVerifyCardPINResponseStatus(null);
          }}
        >
          <div className="px-8 py-6 text-center md:px-14">
            {verifyCardPINResponseMessage}
          </div>
        </FailedDialogue> */}

        {/* Begin generate one time QR request failed dialogue */}
        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            generateOneTimeQRResponseStatus === 'failed' ? true : false
          }
          OkButtonText="Retry"
          onOkButtonClick={() => {
            setGenerateOneTimeQRResponseStatus(null);
          }}
          cancelButtonText="Back"
          onCloseButtonClick={() => {
            navigate('/Withdraw/through_atm');
          }}
        >
          <div className="px-8 py-6 text-center md:px-14">
            {generateOneTimeQRResponseMessage}
          </div>
        </FailedDialogue>
        {/* End generate one time QR request failed dialogue */}

        {/* Begin card lock request success dialogue */}
        <SuccessDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={cardLockResponseStatus === 'success' ? true : false}
          onOkButtonClick={() => {
            setCardLockResponseStatus(null);
          }}
        >
          {cardLockResponseData}
        </SuccessDialogue>
        {/* End card lock request success dialogue */}

        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
        >
          <div className="w-full">
            <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
              <CardAccountPinView
                titleAccounts="Account Details"
                showAccountInfo={true}
                showCardInfo={false}
                myCards={myCardsResponseData}
                parentPageState={generateOneTimeQRState}
                updateParentPageState={updateGenerateOneTimeQRState}
              />
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="flex w-full items-center justify-center rounded-md bg-surface p-7 shadow"
              >
                <div className="w-full">
                  <motion.h2 className="py-4 text-center text-lg font-bold uppercase">
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
                    <div className="grid gap-4">
                      <div className="grid grid-cols-1 gap-4 ">
                        <div className="w-full">
                          <MyTextInput
                            label="Amount"
                            name="Amount"
                            id="Amount"
                            value={generateOneTimeQRState?.Amount.toString()}
                            inputType="number"
                            required={true}
                            error={
                              parseInt(generateOneTimeQRState?.Amount) >
                              myCardsResponseData?.[0].CardsAccounts?.[0]
                                ?.WithdrawableBalance!
                                ? 'You do not have sufficient balance'
                                : generateOneTimeQRState?.Errors?.Amount
                            }
                            onChangeHandler={(event) => {
                              if (
                                parseInt(event.target.value) < 20001 ||
                                event.target.value === ''
                              ) {
                                updateGenerateOneTimeQRState(
                                  event.target.name,
                                  event.target.value
                                );
                              } else {
                                notify();
                              }
                            }}
                            leftIcon={
                              <i className="fa-solid fa-bangladeshi-taka-sign"></i>
                            }
                          />
                        </div>
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
                          let fieldName: keyof typeof generateOneTimeQRState;
                          for (fieldName in generateOneTimeQRState) {
                            updateGenerateOneTimeQRState(
                              fieldName,
                              generateOneTimeQRState[fieldName]
                            );
                            error =
                              error +
                              validateGenerateOneTimeQRState(
                                fieldName,
                                generateOneTimeQRState[fieldName]
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
                              verifyCardPINRequestHandler();
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
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
};
export default ThroughATMPage;
