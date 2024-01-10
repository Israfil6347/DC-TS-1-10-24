import { Box, Step, StepLabel, Stepper } from '@mui/material';
import CardPage from 'authenticated_pages/info/financial_card/CardPage';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import { CollectionLedgersResponseModel } from 'authenticated_pages/shared/model/data/CollectionLedgersResponseModel';
import { GetPolicyRequestModel } from 'authenticated_pages/shared/model/request/GetPolicyRequestModel';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyDropdown from 'global_shared/components/MyDropdown';
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
import getRemainingPascalMonths from 'global_shared/utils/dateUtils';
import getScheduleDepositDates from 'global_shared/utils/scheduleDepositDates';
import { getFormattedAccountNumber } from 'global_shared/utils/textUtils';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountHolderAndBeneficiaryView from '../shared/components/AccountHolderAndBeneficiaryView';
import CollectionLedgerAccountsView from '../shared/components/CollectionLedgerAccountsView';
import Instruction from '../shared/components/Instruction';
import Notes from '../shared/components/Notes';
import useCollectionLedgerState, {
  CollectionLedgerState,
} from '../shared/hooks/useCollectionLedgerState';
import useDepositLaterRequestState from './hooks/useDepositLaterRequestState';
import { CollectionAccountListRequestModel } from './model/request/CollectionAccountListRequestModel';
import { DepositLaterRequestModel } from './model/request/DepositLaterRequestModel';
import { validateDepositLaterRequestState } from './validation/validateDepositLaterRequestState';
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
  'UPCOMING MONTH SCHEDULE',
  'PREVIEW',
  'TRANSFER FROM',
];

const DepositLaterPageNew = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const navigate = useNavigate();

  const { authUser } = React.useContext(AuthUserContext) as AuthUserContextType;

  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();

  const { depositLaterRequestState, updateDepositLaterRequestState } =
    useDepositLaterRequestState();

  const {
    collectionLedgerState,
    initCollectionLedgerState,
    updateCollectionLedgerState,
    setCollectionLedgerState,
  } = useCollectionLedgerState();

  const [scheduleFromNextMonth, setScheduleFromNextMonth] =
    React.useState(false);

  const {
    loading: myCardsResponseDataLoading,
    data: myCardsResponseData,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[] | null>();

  const {
    loading: cardLockResponseDataLoading,
    data: cardLockResponseData,
    status: cardLockResponseStatus,
    setStatus: setCardLockResponseStatus,
    executeCommand: cardLockRequestExecutedCommand,
  } = useCommand<string>();

  const {
    data: verifyPINResponseData,
    loading: verifyPINResponseDataLoading,
    message: verifyPINResponseMessage,
    status: verifyPINResponseStatus,
    setStatus: setVerifyPINResponseStatus,
    executeCommand: verifyPINRequestExecutionCommand,
  } = useCommand<any>();

  const {
    loading: depositLaterResponseDataLoading,
    data: depositLaterResponseData,
    message: depositLaterResponseMessage,
    setMessage: setDepositLaterResponseMessage,
    status: depositLaterResponseStatus,
    setStatus: setDepositLaterResponseStatus,
    executeCommand: depositLaterRequestCommand,
  } = useCommand<string>();

  const {
    loading: collectionAccountResponseDataLoading,
    data: collectionAccountResponseData,
    setData: setCollectionAccountResponseData,
    message: collectionAccountsResponseMessage,
    status: collectionAccountsResponseStatus,
    setStatus: setCollectionAccountsResponseStatus,
    executeCommand: collectionAccountRequestExecuteCommand,
  } = useCommand<CollectionLedgersResponseModel | null>();

  const {
    loading: getDepositPolicyResponseDataLoading,
    data: getDepositPolicyResponseData,
    executeCommand: getDepositPolicyRequestCommand,
  } = useCommand<TermsAndConditionModel | null>();

  const {
    loading: getDepositPolicyInstaurationResponseDataLoading,
    data: getDepositPolicyInstaurationResponseData,
    executeCommand: getDepositPolicyInstaurationRequestCommand,
  } = useCommand<TermsAndConditionModel | null>();

  React.useEffect(() => {
    if (collectionAccountResponseData != null) {
      var sortedAccount = collectionAccountResponseData?.AccountInfoList;
      sortedAccount.sort((obj1, obj2) =>
        obj1.AccountNo.trim() > obj2.AccountNo.trim()
          ? 1
          : obj1.AccountNo.trim() < obj2.AccountNo.trim()
          ? -1
          : 0
      );

      initCollectionLedgerState(
        sortedAccount?.filter((item) => item.IsSubLedger === false)
      );
    }
  }, [collectionAccountResponseData]);

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
    getPolicyRequestModel.ContentName = 'Deposit Notes';
    getPolicyRequestModel.Application = 'PassBook';

    getDepositPolicyRequestCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(getPolicyRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    const getPolicyInstaurationRequestModel = new GetPolicyRequestModel(
      authUser
    );
    getPolicyInstaurationRequestModel.AccountModuleCode = '16';
    getPolicyInstaurationRequestModel.ApplicationName = 'MFS';
    getPolicyInstaurationRequestModel.ContentName = 'Schedule Deposit';
    getPolicyRequestModel.Application = 'PassBook';

    getDepositPolicyInstaurationRequestCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetMfsPolicy',
      JSON.stringify(getPolicyInstaurationRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  useEffect(() => {
    if (myCardsResponseData !== null) {
      updateDepositLaterRequestState(
        'CardNo',
        myCardsResponseData?.[0].CardNo?.trim()
      );
      updateDepositLaterRequestState(
        'CardAccount',
        myCardsResponseData?.[0].CardsAccounts?.[0].AccountNumber.trim()
      );
    }
  }, [myCardsResponseData]);

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

  const getCollectionAccounts = (accountNo: string) => {
    const collectionAccountListRequestModel =
      new CollectionAccountListRequestModel(authUser);
    collectionAccountListRequestModel.SearchText =
      getFormattedAccountNumber(accountNo);

    collectionAccountRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V1/getCollectionAccount',
      JSON.stringify(collectionAccountListRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  function DateFormate(input: string) {
    const date = new Date();
    const getMonth = date.getMonth() + 1;
    const getYear = date.getFullYear();
    return getYear + '-' + getMonth + '-' + input;
  }

  const getSelectedCollectionLedgers = (
    collectionLedgers: CollectionLedgerState[]
  ) => {
    var checkedAccounts: CollectionLedgerState[] = [];
    collectionLedgers.forEach((element) => {
      if (element?.isSelected) {
        checkedAccounts.push(element);
      }
    });
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

  const cardLockRequestHandler = () => {
    if (cardPinRemainingTry !== 0) {
      updateCardPinRemainingTry(1);
    } else {
      var cardLockObj = {
        NameOnCard: myCardsResponseData?.[0]?.Name,
        CardNo: myCardsResponseData?.[0]?.CardNo,
        RequestFrom: 'Web',
      };

      cardLockRequestExecutedCommand(
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
    var encryptPassword = CryptoJS.MD5(depositLaterRequestState?.CardPIN);

    var date = new Date();
    date.setDate(date.getDate() + 1);
    const depositLaterRequestModel = new DepositLaterRequestModel(authUser);

    depositLaterRequestModel.TransactionNumber = '0';
    depositLaterRequestModel.TransactionType = 'DepositRequest';
    depositLaterRequestModel.AccountHolderName =
      myCardsResponseData?.[0]?.Name!;
    depositLaterRequestModel.AccountNo = card?.AccountNumber!;
    depositLaterRequestModel.AccountId = card?.AccountId!;
    depositLaterRequestModel.AccountType = card?.AccountTypeName!;
    depositLaterRequestModel.DepositDate =
      depositLaterRequestState?.DepositDate === ''
        ? moment(new Date(new Date().getTime() + 86400000)).format()
        : moment(depositLaterRequestState?.DepositDate).format();
    depositLaterRequestModel.FromAccountNo = card?.AccountNumber!;
    depositLaterRequestModel.LedgerId = card?.LedgerId!;
    depositLaterRequestModel.RepeatMonths =
      depositLaterRequestState?.RepeatMonths;
    depositLaterRequestModel.ScheduleDate =
      depositLaterRequestState?.DepositLaterDate === ''
        ? moment(new Date()).format()
        : moment(
            DateFormate(depositLaterRequestState?.DepositLaterDate)
          ).format('LLL');
    depositLaterRequestModel.TotalDepositAmount = totalAmount;
    depositLaterRequestModel.TransactionMethod = '11';
    depositLaterRequestModel.TransactionModels = getSelectedCollectionLedgers(
      collectionLedgerState
    );
    depositLaterRequestModel.SecretKey = encryptPassword.toString();
    depositLaterRequestModel.CardNo = myCardsResponseData?.[0]?.CardNo!;
    depositLaterRequestModel.NameOnCard = myCardsResponseData?.[0].Name!;

    verifyPINRequestExecutionCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(depositLaterRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  // const submitCollectionLedgerAccountsSubmit = () => {
  //   var error = '';
  //   var isAllLedgerAccountChecked = false;
  //   let fieldName: keyof typeof depositLaterRequestState;
  //   for (fieldName in depositLaterRequestState) {
  //     updateDepositLaterRequestState(
  //       fieldName,
  //       depositLaterRequestState[fieldName],
  //       scheduleFromNextMonth
  //     );
  //     error =
  //       error +
  //       validateDepositLaterRequestState(
  //         fieldName,
  //         depositLaterRequestState[fieldName],
  //         scheduleFromNextMonth
  //       );
  //   }

  //   collectionLedgerState?.forEach((element) => {
  //     if (element?.isSelected) {
  //       isAllLedgerAccountChecked = true;
  //     }
  //   });

  //   if (isAllLedgerAccountChecked) {
  //   } else {
  //     //   notify();
  //   }

  //   if (error.length === 0) {
  //     verifyCardPinRequestHandler();
  //   }
  // };

  const submitDepositRequestHandler = (otpData: string) => {
    verifyPINResponseData.OTPValue = otpData;

    depositLaterRequestCommand(
      process.env.REACT_APP_BASE_URL + '/deposits_V2/submitDepositLater',
      JSON.stringify(verifyPINResponseData),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  if (myCardsResponseData?.length === 0) {
    return <CardPage />;
  } else {
    return (
      <>
        <LoaderDialogue
          isLoading={
            verifyPINResponseDataLoading ||
            collectionAccountResponseDataLoading ||
            myCardsResponseDataLoading ||
            depositLaterResponseDataLoading ||
            cardLockResponseDataLoading ||
            myCardsResponseDataLoading ||
            getDepositPolicyResponseDataLoading ||
            getDepositPolicyInstaurationResponseDataLoading
          }
        />

        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={verifyPINResponseStatus === 'failed' ? true : false}
          cancelButtonText="ok"
          onCloseButtonClick={() => {
            setVerifyPINResponseStatus(null);
          }}
        >
          {verifyPINResponseMessage}
        </FailedDialogue>

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

        {verifyPINResponseMessage?.includes('Invalid Card PIN') && (
          <FailedDialogue
            dialogueSize={Size.Small}
            isDialogueOpen={verifyPINResponseStatus === 'failed' ? true : false}
            cancelButtonText="ok"
            onCloseButtonClick={() => {
              setVerifyPINResponseStatus(null);
              cardLockRequestHandler();
            }}
          >
            {verifyPINResponseMessage +
              '. ' +
              'Remaining Tries ' +
              ' ' +
              cardPinRemainingTry}
          </FailedDialogue>
        )}

        <SuccessDialogue
          isDialogueOpen={cardLockResponseStatus === 'success' ? true : false}
          onOkButtonClick={() => {
            setCardLockResponseStatus(null);
          }}
        >
          {cardLockResponseData}
        </SuccessDialogue>

        {verifyPINResponseStatus === 'success' && (
          <OTPValidationView
            isOTPValidationViewOpen={
              verifyPINResponseStatus === 'success' ? true : false
            }
            closeOTPValidationView={() => {
              setVerifyPINResponseStatus(null);
            }}
            otpValidateRequestHandler={submitDepositRequestHandler}
            resendOTPRequestHandler={verifyCardPinRequestHandler}
          />
        )}

        <SuccessDialogue
          isDialogueOpen={
            depositLaterResponseStatus === 'success' ? true : false
          }
          onCloseButtonClick={() => {
            setDepositLaterResponseStatus(null);
            navigate('/deposits/deposit_later');
          }}
        >
          {depositLaterResponseData}
        </SuccessDialogue>

        <FailedDialogue
          isDialogueOpen={
            depositLaterResponseStatus === 'failed' ? true : false
          }
          cancelButtonText="back"
          onCloseButtonClick={() => {
            navigate('/deposits/deposit_later');
          }}
          OkButtonText="Retry"
          onOkButtonClick={() => {
            setDepositLaterResponseStatus(null);
          }}
        >
          {depositLaterResponseMessage}
        </FailedDialogue>

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

        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
        >
          <div className="cursor-pointer">
            <section className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row">
              <div className="w-full">
                <div className="">
                  <div className="flex flex-col gap-6 lg:flex-row">
                    <motion.div className="flex w-full flex-col gap-6 lg:w-4/12">
                      <CardAccountPinView
                        showAccountInfo={true}
                        titleAccounts="Transfer From"
                        showCardInfo={false}
                        myCards={myCardsResponseData}
                        parentPageState={depositLaterRequestState}
                        updateParentPageState={updateDepositLaterRequestState}
                      />

                      <motion.div
                        variants={MyVariants.SlideInFromLeft}
                        transition={MyTransition.Spring.Low}
                        className="grid grid-cols-1 gap-6"
                      >
                        <Notes
                          data={{
                            __html:
                              getDepositPolicyResponseData?.BanglaContent!,
                          }}
                        />
                        <Instruction
                          data={{
                            __html:
                              getDepositPolicyInstaurationResponseData?.BanglaContent!,
                          }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="w-full space-y-6 lg:w-8/12"
                    >
                      {/* //* Stepper start here */}

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
                        {activeStep + 1 === 1 && (
                          <AccountHolderAndBeneficiaryView
                            collectionAccountsResponseData={
                              collectionAccountResponseData
                              // ?.AccountHolderInfo[0]?.FullName!
                            }
                            getCollectionAccounts={getCollectionAccounts}
                            parentPageState={depositLaterRequestState}
                            updateParentPageState={
                              updateDepositLaterRequestState
                            }
                          />
                        )}
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
                            updateCollectionLedgerState={
                              updateCollectionLedgerState
                            }
                            setCollectionLedgerState={setCollectionLedgerState}
                            sectionTitle={'Accounts to Deposit'}
                            cardAccountWithdrawableBalance={
                              card?.WithdrawableBalance!
                            }
                            cardLockRequestHandler={cardLockRequestHandler}
                            cardPinRemainingTry={cardPinRemainingTry}
                          />
                        )}
                        {activeStep + 1 === 3 && (
                          <motion.div
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="rounded-md bg-surface p-7"
                          >
                            <div className="space-y-3 text-justify">
                              <div className="">
                                <MyCheckBox
                                  label="Schedule from next month"
                                  disabled={false}
                                  name="ScheduleFromNextMonth"
                                  onChangeHandler={(event) => {
                                    setScheduleFromNextMonth(
                                      event.target.checked
                                    );
                                  }}
                                  value={scheduleFromNextMonth}
                                  error={undefined}
                                />
                              </div>
                              <div className="">
                                <DateSelect
                                  label="Current Month's Deposit Date"
                                  name="DepositDate"
                                  disabled={false}
                                  minDate={dayjs().add(1, 'day')}
                                  value={depositLaterRequestState?.DepositDate}
                                  isDisablePast={true}
                                  error={
                                    depositLaterRequestState?.Errors
                                      ?.DepositDate
                                  }
                                  onChange={(fieldName, fieldValue) => {
                                    updateDepositLaterRequestState(
                                      fieldName,
                                      dayjs(fieldValue).format('DD-MMM-YYYY'),
                                      scheduleFromNextMonth
                                    );
                                  }}
                                />
                              </div>
                              <div className="">
                                <MyDropdown
                                  label="Monthly Deposit Date"
                                  name="DepositLaterDate"
                                  required={true}
                                  disabled={
                                    scheduleFromNextMonth ? false : true
                                  }
                                  value={
                                    depositLaterRequestState?.DepositLaterDate
                                  }
                                  error={
                                    depositLaterRequestState?.Errors
                                      .DepositLaterDate
                                  }
                                  dropDownData={getScheduleDepositDates().map(
                                    (data, index) => {
                                      return {
                                        id: index,
                                        value: data,
                                        label: data,
                                      };
                                    }
                                  )}
                                  onChange={(event) => {
                                    updateDepositLaterRequestState(
                                      event.target.name,
                                      event.target.value,
                                      scheduleFromNextMonth
                                    );
                                  }}
                                  leftIcon={
                                    <i className="fa-regular fa-calendar-days"></i>
                                  }
                                />
                              </div>
                              <div className="">
                                <MyDropdown
                                  label="Monthly Deposit"
                                  name="RepeatMonths"
                                  value={depositLaterRequestState?.RepeatMonths}
                                  required={true}
                                  error={
                                    depositLaterRequestState?.Errors
                                      .RepeatMonths
                                  }
                                  disabled={
                                    scheduleFromNextMonth ? false : true
                                  }
                                  dropDownData={getRemainingPascalMonths().map(
                                    (data, index) => {
                                      return {
                                        id: index,
                                        value: data,
                                        label: data,
                                      };
                                    }
                                  )}
                                  onChange={(event) => {
                                    updateDepositLaterRequestState(
                                      event.target.name,
                                      event.target.value,
                                      scheduleFromNextMonth
                                    );
                                  }}
                                  leftIcon={
                                    <i className="fa-solid fa-list-ol"></i>
                                  }
                                />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeStep + 1 === 4 && (
                          <CollectionLedgerAccountsView
                            collectionLedgerState={getSelectedCollectionLedgers(
                              collectionLedgerState
                            )}
                            allDisable={true}
                            updateCollectionLedgerState={
                              updateCollectionLedgerState
                            }
                            setCollectionLedgerState={setCollectionLedgerState}
                            sectionTitle={'Accounts to Deposit'}
                            cardAccountWithdrawableBalance={
                              card?.WithdrawableBalance!
                            }
                            cardLockRequestHandler={cardLockRequestHandler}
                            cardPinRemainingTry={cardPinRemainingTry}
                          />
                        )}

                        {activeStep + 1 === 5 && (
                          <CardAccountPinView
                            showAccountInfo={false}
                            showCardInfo={true}
                            myCards={myCardsResponseData}
                            parentPageState={depositLaterRequestState}
                            updateParentPageState={
                              updateDepositLaterRequestState
                            }
                          />
                        )}
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
                                  depositLaterRequestState['SearchAccount'] ===
                                  ''
                                ) {
                                  updateDepositLaterRequestState(
                                    'SearchAccount',
                                    ''
                                  );

                                  error =
                                    error +
                                    validateDepositLaterRequestState(
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
                                            totalAmount +
                                            collectionLedger.Amount;
                                        }
                                      }
                                    );
                                  }

                                  if (totalAmount === 0) {
                                    return;
                                  }

                                  handleNext();
                                }
                              } else if (activeStep === 2) {
                                if (scheduleFromNextMonth) {
                                  let error = '';
                                  const {
                                    DepositDate,
                                    DepositLaterDate,
                                    RepeatMonths,
                                  } = depositLaterRequestState;

                                  const cardFields = {
                                    DepositDate,
                                    DepositLaterDate,
                                    RepeatMonths,
                                  };
                                  let fieldName: keyof typeof cardFields;

                                  for (fieldName in cardFields) {
                                    updateDepositLaterRequestState(
                                      fieldName,
                                      cardFields[fieldName],
                                      true
                                    );

                                    error =
                                      error +
                                      validateDepositLaterRequestState(
                                        fieldName,
                                        cardFields[fieldName],
                                        true
                                      );
                                  }

                                  if (error.length === 0) {
                                    handleNext();
                                  }
                                } else {
                                  let error = '';

                                  if (
                                    depositLaterRequestState['DepositDate'] ===
                                    ''
                                  ) {
                                    updateDepositLaterRequestState(
                                      'DepositDate',
                                      '',
                                      false
                                    );

                                    error =
                                      error +
                                      validateDepositLaterRequestState(
                                        'DepositDate',
                                        '',
                                        false
                                      );
                                  }

                                  if (error.length === 0) {
                                    handleNext();
                                  }
                                }
                              } else if (activeStep === 3) {
                                handleNext();
                              }

                              if (activeStep === steps.length - 1) {
                                if (cardPinRemainingTry === 0) {
                                  cardLockRequestHandler();
                                } else {
                                  let error = '';

                                  const { CardAccount, CardNo, CardPIN } =
                                    depositLaterRequestState;

                                  const cardFields = {
                                    CardAccount,
                                    CardNo,
                                    CardPIN,
                                  };

                                  let fieldName: keyof typeof cardFields;

                                  for (fieldName in cardFields) {
                                    updateDepositLaterRequestState(
                                      fieldName,
                                      cardFields[fieldName],
                                      false
                                    );

                                    error =
                                      error +
                                      validateDepositLaterRequestState(
                                        fieldName,
                                        cardFields[fieldName],
                                        false
                                      );
                                  }

                                  if (error.length === 0) {
                                    verifyCardPinRequestHandler();
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
                              activeStep === 0 && !collectionAccountResponseData
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
  }
};

export default DepositLaterPageNew;
