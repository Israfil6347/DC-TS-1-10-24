import {
  Box,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FamilyAndRelativeViewModel } from 'authenticated_pages/info/family_and_relatives/model/data/FamilyAndRelativeViewModel';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCardPinRemainingTry from 'global_shared/hooks/useCardPinRemainingTry';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import React, { ChangeEvent, useEffect, useState } from 'react';
import useSchemeDepositAccountState from './hook/useSchemeDepositAccountState';
import { validateInsuranceDepositState } from './validate/validateInsuranceDepositState';

import MyModal from 'global_shared/components/MyModal';
import { Size } from 'global_shared/enum/Size';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetAccountOpeningEligibilityRequestModel } from './model/request/GetAccountOpeningEligibilityRequestModel';
import { GetDurationAmountsRequestModel } from './model/request/GetDurationAmountsRequestModel';
import { GetDurationsRequestModel } from './model/request/GetDurationsRequestModel';

import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import { SubmitInsuranceDepositRequestModel } from './model/request/SubmitInsuranceDepositRequestModel';
import { FamilyAndRelativesRequestModel } from './model/request/FamilyAndRelativesRequestModel';

const steps = [
  'ACCOUNT FOR',
  'ACCOUNT DETAILS',
  'NOMINEE',
  'PREVIEW',
  'CONFIRMATION',
];

const AccountType = [
  { id: 1, value: '01', label: 'Individual' },
  { id: 2, value: '02', label: 'Join Account' },
  { id: 2, value: '03', label: 'Organization' },
];

interface Accounts {
  id: number;
  value: string;
  label: string;
  isUserAccess: boolean;
}

interface Nominee {
  id?: number;
  PersonId?: number;
  NomineePercentage?: number;
  selectedNomineeName?: string;
}
interface Tenure {
  id: number;
  value: string;
  label: string;
  interest: number;
  AmountData: {
    id: number;
    value: string;
    label: string;
  }[];
}

function InsuranceDeposit() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { authUser } = React.useContext(AuthUserContext) as AuthUserContextType;
  const location = useLocation();
  const urlArrays = location.pathname.split('/');
  const navigate = useNavigate();

  const [nomineePercentage, setNomineePercentage] = useState<
    string | undefined
  >('');

  const [nomineeByIndividualPercentage, setNomineeByIndividualPercentage] =
    useState<Nominee>({
      PersonId: 0,
      NomineePercentage: 100,
    });

  const [selectAccount, setSelectedAccount] = useState<
    FamilyAndRelativeViewModel[] | undefined
  >([]);

  const [OperatorName, setIndividualOperator] = useState<any>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const stepStyle = isMobile ? { flexDirection: 'flex-row' } : {};

  const {
    schemeDepositState,
    updateSchemeDepositState,
    nomineeAddHandler,
    removeNomineeHandler,
  } = useSchemeDepositAccountState();

  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const {
    loading: myCardsResponseDataLoading,
    data: myCardsResponseData,
    executeCommand: myCardsRequestCommand,
  } = useCommand<CardModel[] | null>();

  const {
    loading: cardLockResponseDataLoading,
    executeCommand: cardLockRequestExecuteCommand,
  } = useCommand<string>();

  const {
    loading: getFamilyAndRelativesResponseDataLoading,
    data: getFamilyAndRelativesResponseData,
    executeCommand: getFamilyAndRelativesRequestCommand,
  } = useCommand<FamilyAndRelativeViewModel[]>();
  const {
    loading: getPersonFamilyAndRelativesResponseDataLoading,
    data: getPersonFamilyAndRelativesResponseData,
    executeCommand: getPersonFamilyAndRelativesRequestCommand,
  } = useCommand<FamilyAndRelativeViewModel[]>();

  const {
    loading: getDurationsResponseDataLoading,
    data: getDurationsResponseData,
    executeCommand: getDurationsRequestExecuteCommand,
  } = useCommand<string | any>();
  const {
    loading: getDurationAmountsResponseDataLoading,
    data: getDurationAmountsResponseData,
    executeCommand: getDurationAmountsRequestExecuteCommand,
  } = useCommand<string | any>();
  const {
    loading: accountOpeningEligibilityResponseDataLoading,
    data: accountOpeningEligibilityResponseData,
    setData: setAccountOpeningEligibilityResponseData,
    setStatus: setAccountOpeningEligibilityResponseStatus,
    executeCommand: AccountOpeningEligibilityExecuteCommand,
  } = useCommand<string | any>();

  const {
    loading: verifyPINResponseDataLoading,
    data: verifyPINResponseData,
    message: verifyPINResponseMessage,
    status: verifyPINResponseStatus,
    setStatus: setVerifyPINResponseStatus,
    executeCommand: verifyPINRequestExecuteCommand,
  } = useCommand<SubmitInsuranceDepositRequestModel>();

  const {
    loading: submitSchemeDepositResponseDataLoading,
    data: submitSchemeDepositResponseData,
    message: submitSchemeDepositResponseMessage,
    status: submitSchemeDepositResponseStatus,
    setStatus: setSubmitSchemeDepositResponseStatus,
    executeCommand: submitSchemeDepositExecuteCommand,
  } = useCommand<string | null>();

  const productName = localStorage.getItem('ProductName');

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
  }, []);
  useEffect(() => {
    if (myCardsResponseData !== null) {
      updateSchemeDepositState(
        'CardNo',
        myCardsResponseData?.[0].CardNo?.trim()
      );
      updateSchemeDepositState(
        'CardAccount',
        myCardsResponseData?.[0].CardsAccounts?.[0].AccountNumber.trim()
      );
    }

    const addFamilyRequestModel = new FamilyAndRelativesRequestModel(authUser);
    addFamilyRequestModel.IncludeSelf = true;
    getFamilyAndRelativesRequestCommand(
      process.env.REACT_APP_BASE_URL + '/info_V1/getFamilyAndRelatives',
      JSON.stringify(addFamilyRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    const getDurationsRequestModel = new GetDurationsRequestModel(authUser);
    getDurationsRequestModel.ProductCode = urlArrays[4];

    getDurationsRequestModel.RolePermissionId = '6, 1, 1210';

    getDurationsRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/Accounts_V1/getDurations',
      JSON.stringify(getDurationsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [myCardsResponseData]);

  const handleTenureChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = getDurationsResponseData?.find((obj: any) => {
      if (parseInt(event.target.value) === obj?.DurationId)
        return {
          label: obj?.DurationName!,
          value: obj?.DurationId!,
          DurationInMonths: obj?.DurationInMonths,
        };
    });
    updateSchemeDepositState('tenure', event.target.value);
    updateSchemeDepositState('DurationInMonths', selected?.DurationInMonths);
    updateSchemeDepositState('Interest', selected?.InterestRate);
  };
  useEffect(() => {
    const getDurationAmountsRequestModel = new GetDurationAmountsRequestModel(
      authUser
    );
    getDurationAmountsRequestModel.Duration =
      schemeDepositState.DurationInMonths;
    getDurationAmountsRequestModel.ProductCode = urlArrays[4];
    getDurationAmountsRequestModel.RolePermissionId = '6,1,1210';

    getDurationAmountsRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/Accounts_V1/getDurations',
      JSON.stringify(getDurationAmountsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [schemeDepositState.DurationInMonths]);

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

  const FamilyAndRelatives = (getFamilyAndRelativesResponseData || [])
    .map((obj, index) => {
      if (obj && obj.RequestStatus === 'Pending For Approval') {
        return null;
      }
      return {
        id: index,
        label: obj.FullName || '',
        value: obj.PersonId || '',
      };
    })
    .filter(Boolean);
  const PersonFamilyAndRelatives = (
    getPersonFamilyAndRelativesResponseData || []
  )
    .map((obj, index) => {
      if (obj && obj.RequestStatus === 'Pending For Approval') {
        return null;
      }
      return {
        id: index,
        label: obj.FullName || '',
        value: obj.PersonId || '',
      };
    })
    .filter(Boolean);

  const addAccountsHolderHandler = (accountNumber: string) => {
    const selected = getFamilyAndRelativesResponseData?.find((obj: any) => {
      return parseInt(accountNumber) === obj?.PersonId;
    });

    if (selected && schemeDepositState.AccountType !== '01') {
      setSelectedAccount((prevSelected = []) => {
        const isAccountHolderAdded = prevSelected.some(
          (item) => item.PersonId === selected.PersonId
        );

        if (!isAccountHolderAdded) {
          const updatedSelected =
            schemeDepositState.AccountType === '03'
              ? { ...selected, IsOrganization: true }
              : { ...selected, IsOrganization: false };

          return [...prevSelected, updatedSelected];
        } else {
          const updatedSelectedArray = prevSelected.map((item) =>
            item.PersonId === selected.PersonId
              ? { ...selected, IsOrganization: item.IsOrganization }
              : item
          );

          return updatedSelectedArray;
        }
      });

      return {
        PersonId: selected.PersonId,
        IsOrganization: selected.IsOrganization,
      };
    }

    return null;
  };

  const accountDateformat = (accountData: any) =>
    accountData
      .map((obj: any) => {
        console.log(obj);
        return {
          AccountHolderId: obj.PersonId || '',
          IsOrganization: obj.hasOwnProperty('IsOrganization')
            ? obj.IsOrganization
            : '',
          SavingsACNumber: '' || '',
          MembershipNumber: '' || '',
        };
      })
      .filter(Boolean);
  const accountoperatorformat = (accountData: any) =>
    accountData
      .map((obj: any) => {
        if (obj.Age >= 18) {
          return {
            AccountHolderId: obj.PersonId || '',
            AccountOperatorId: obj.PersonId || '',
          };
        } else {
          return {
            AccountHolderId: obj.PersonId || '',
            AccountOperatorId: !!authUser ? authUser.PersonId : 0,
          };
        }
      })
      .filter(Boolean);

  const removeAccountsHandler = (id: number) => {
    setSelectedAccount((prevSelected) => {
      if (prevSelected) {
        const updatedAccounts = prevSelected.filter(
          (account) => account.PersonId !== id
        );
        return updatedAccounts;
      } else {
        return prevSelected;
      }
    });
  };

  const updateOperatorNameHandler = (id: any) => {
    const selected = getFamilyAndRelativesResponseData?.find(
      (obj: FamilyAndRelativeViewModel) => {
        return parseInt(id) === obj?.PersonId;
      }
    );

    setIndividualOperator(selected);
  };

  const checkeligibleHandler = (PersonId: any) => {
    const getAccountOpeningEligibilityRequestModel =
      new GetAccountOpeningEligibilityRequestModel(authUser);
    getAccountOpeningEligibilityRequestModel.AccountHolderPersonId = PersonId;
    getAccountOpeningEligibilityRequestModel.AccountTypeCode = urlArrays[4];
    getAccountOpeningEligibilityRequestModel.RolePermissionId = '6,1,1210';
    AccountOpeningEligibilityExecuteCommand(
      process.env.REACT_APP_BASE_URL +
        '/Accounts_V1/getAccountOpeningEligibility',
      JSON.stringify(getAccountOpeningEligibilityRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  useEffect(() => {
    const addFamilyRequestModel = new BaseRequestModel(authUser);
    addFamilyRequestModel.PersonId = parseInt(
      schemeDepositState?.accountHolder
    );
    getPersonFamilyAndRelativesRequestCommand(
      process.env.REACT_APP_BASE_URL + '/info_V1/getFamilyAndRelatives',
      JSON.stringify(addFamilyRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
    checkeligibleHandler(authUser.PersonId);
  }, [schemeDepositState?.accountHolder]);

  const updatePersonId = (newPersonId: any) => {
    setNomineeByIndividualPercentage((prevNominee) => ({
      ...prevNominee,
      PersonId: parseInt(newPersonId),
    }));
  };

  const nomineeArray = [nomineeByIndividualPercentage];

  const verifySchemeDepositPinRequestHandler = () => {
    var encryptPassword = CryptoJS.MD5(schemeDepositState?.CardPIN!);
    const submitSchemeDepositRequestModel =
      new SubmitInsuranceDepositRequestModel(authUser);
    submitSchemeDepositRequestModel.DMSProductCode = urlArrays[4];
    submitSchemeDepositRequestModel.AccountNo =
      myCardsResponseData?.[0]?.CardsAccounts?.[0]?.AccountNumber!;
    submitSchemeDepositRequestModel.BranchCode = '00';
    submitSchemeDepositRequestModel.AccountFor = parseInt(
      schemeDepositState.AccountType
    );
    submitSchemeDepositRequestModel.ApplicationNo = '';
    submitSchemeDepositRequestModel.AccountName =
      schemeDepositState.accountHolderName;
    // submitSchemeDepositRequestModel.InterestRate = schemeDepositState.Interest;
    submitSchemeDepositRequestModel.Duration =
      schemeDepositState.DurationInMonths;
    submitSchemeDepositRequestModel.InstallmentAmount = parseInt(
      schemeDepositState.amount
    );
    submitSchemeDepositRequestModel.TxnAccountNumber =
      myCardsResponseData?.[0]?.CardsAccounts?.[0]?.AccountNumber!;
    submitSchemeDepositRequestModel.CardNo = myCardsResponseData?.[0]?.CardNo!;
    submitSchemeDepositRequestModel.NameOnCard =
      myCardsResponseData?.[0]?.Name!;
    submitSchemeDepositRequestModel.SecretKey = encryptPassword.toString();
    submitSchemeDepositRequestModel.AccountHolders =
      accountDateformat(selectAccount);
    submitSchemeDepositRequestModel.AccountOperators =
      accountoperatorformat(selectAccount);
    submitSchemeDepositRequestModel.Nominees =
      schemeDepositState.AccountType === '01'
        ? nomineeArray
        : schemeDepositState.JointNominee;
    submitSchemeDepositRequestModel.RolePermissionId = '1,2,3';
    submitSchemeDepositRequestModel.Introducers = [];

    verifyPINRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(submitSchemeDepositRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const otpDataRequestHandler = (otpData: string) => {
    if (verifyPINResponseData) {
      verifyPINResponseData.OTPValue = otpData;
    }
    console.log(verifyPINResponseData);
    submitSchemeDepositExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/Accounts_V1/createDepositAccount',
      JSON.stringify(verifyPINResponseData),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  return (
    <div>
      <LoaderDialogue
        isLoading={
          verifyPINResponseDataLoading ||
          myCardsResponseDataLoading ||
          cardLockResponseDataLoading ||
          getFamilyAndRelativesResponseDataLoading ||
          getPersonFamilyAndRelativesResponseDataLoading ||
          getDurationsResponseDataLoading ||
          getDurationAmountsResponseDataLoading ||
          accountOpeningEligibilityResponseDataLoading ||
          submitSchemeDepositResponseDataLoading
        }
      />
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          submitSchemeDepositResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setSubmitSchemeDepositResponseStatus(null);
        }}
      >
        {submitSchemeDepositResponseMessage}
      </FailedDialogue>

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          submitSchemeDepositResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="Retry"
        OkButtonText="Back"
        onCloseButtonClick={() => {
          setSubmitSchemeDepositResponseStatus(null);
        }}
        onOkButtonClick={() => {
          navigate('/accounts/open_an_account');
        }}
      >
        {submitSchemeDepositResponseMessage}
      </FailedDialogue>
      <SuccessDialogue
        isDialogueOpen={
          submitSchemeDepositResponseStatus === 'success' ? true : false
        }
        onCloseButtonClick={() => {
          setSubmitSchemeDepositResponseStatus(null);
          setVerifyPINResponseStatus(null);
          navigate('/accounts/my_accounts');
        }}
      >
        <p>{submitSchemeDepositResponseData}</p>
      </SuccessDialogue>
      {verifyPINResponseStatus === 'success' && (
        <OTPValidationView
          isOTPValidationViewOpen={
            verifyPINResponseStatus === 'success' ? true : false
          }
          closeOTPValidationView={() => {
            setVerifyPINResponseStatus(null);
          }}
          otpValidateRequestHandler={otpDataRequestHandler}
          resendOTPRequestHandler={verifySchemeDepositPinRequestHandler}
        />
      )}
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
      <MyModal
        size={Size.Small}
        show={
          accountOpeningEligibilityResponseData !== null &&
          !accountOpeningEligibilityResponseData?.[0]?.IsEligible
            ? true
            : false
          // !accountOpeningEligibilityResponseData?.[0]?.IsEligible ? true : false
        }
        onClose={() => {
          setAccountOpeningEligibilityResponseData(null);
        }}
      >
        <MyDialogueView
          dialogueHeader={
            <div className=" bg-background p-6">
              <div className="flex w-full flex-col items-center ">
                <i className="fa-solid fa-face-frown text-6xl text-primary"></i>
                <h3 className="mt-2  font-bold text-primary">{`Sorry! Mr/Ms ${schemeDepositState.accountHolderName} `}</h3>
                <h3 className="mt-2  font-bold text-primary">{`is not eligible for ${accountOpeningEligibilityResponseData?.[0]?.AccountTypeName}`}</h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex items-center justify-center gap-6 bg-background px-14 py-4">
              <MyButton
                disabled={false}
                type="button"
                label="ok"
                styleClass="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                name={''}
                onClick={() => {
                  setAccountOpeningEligibilityResponseData(null);
                }}
              />
            </div>
          }
          onCancel={() => {
            setAccountOpeningEligibilityResponseData(null);
          }}
        >
          <div className="mx:px-14 px-14 py-6 text-left text-onSurface ">
            <h3 className="text-lg font-bold text-error">Findings :-</h3>
            <ul className="list-disc text-lg font-semibold">
              <li className="mt-2 flex items-center gap-2 text-onSurface">
                {accountOpeningEligibilityResponseData?.[0]?.SavingsACNumber ===
                '' ? (
                  <i className="fa-solid fa-circle-xmark  text-xl text-error"></i>
                ) : (
                  <i className="fa-solid fa-circle-check text-xl text-success"></i>
                )}
                Savings account holder
              </li>
              <li className="mt-2 flex items-center gap-2 text-onSurface">
                {accountOpeningEligibilityResponseData?.[0]
                  ?.IsMultipleAccountAllowed ? (
                  <i className="fa-solid fa-circle-check text-xl text-success"></i>
                ) : (
                  <i className="fa-solid fa-circle-xmark  text-xl text-error"></i>
                )}
                {` Applicant can have multiple ${accountOpeningEligibilityResponseData?.[0]?.AccountTypeName}`}
              </li>
            </ul>
          </div>
        </MyDialogueView>
      </MyModal>
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
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="w-full "
                  >
                    <div className="rounded-md bg-surface p-7 shadow ">
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
                          <div className="py-8">
                            <div className="">
                              <div className="flex justify-center">
                                <div className="w-full md:w-1/2">
                                  <div className="grid grid-cols-1 gap-6">
                                    <MyDropdown
                                      label="Account Type"
                                      name="AccountType"
                                      id="AccountType"
                                      required={true}
                                      disabled={true}
                                      leftIcon={
                                        <i className="fa-regular fa-user"></i>
                                      }
                                      error={
                                        schemeDepositState?.Errors
                                          ?.accountHolder
                                      }
                                      value={schemeDepositState?.AccountType}
                                      dropDownData={AccountType?.map(
                                        (obj, index) => {
                                          return {
                                            id: index,
                                            label: obj?.label!,
                                            value: obj?.value!,
                                          };
                                        }
                                      )}
                                      onChange={(event) => {
                                        updateSchemeDepositState(
                                          'AccountType',
                                          event.target.value
                                        );
                                      }}
                                    />
                                    <div className="flex">
                                      <MyDropdown
                                        label="Select Account Holder"
                                        name="accountHolder"
                                        id="accountHolder"
                                        required={true}
                                        leftIcon={
                                          <i className="fa-regular fa-user"></i>
                                        }
                                        error={
                                          schemeDepositState?.Errors
                                            ?.accountHolder
                                        }
                                        value={schemeDepositState.accountHolder}
                                        dropDownData={FamilyAndRelatives?.map(
                                          (obj, index) => {
                                            return {
                                              id: index,
                                              label: obj?.label!,
                                              value: obj?.value!,
                                            };
                                          }
                                        )}
                                        // onChange={handleAccountHolderChange}
                                        onChange={(event) => {
                                          const selected =
                                            FamilyAndRelatives?.find((obj) => {
                                              if (
                                                parseInt(event.target.value) ===
                                                obj?.value
                                              )
                                                return {
                                                  value: obj?.value,
                                                  label: obj?.label,
                                                };
                                            });

                                          // updateSchemeDepositState(
                                          //   'accountHolder',
                                          //   event.target.value
                                          // );
                                          // updateSchemeDepositState(
                                          //   'accountHolderName',
                                          //   selected?.label
                                          // );
                                          checkeligibleHandler(
                                            event.target.value
                                          );
                                          if (
                                            schemeDepositState?.AccountType ===
                                            '01'
                                          ) {
                                            addAccountsHolderHandler(
                                              event.target.value
                                            );
                                          }
                                          updateOperatorNameHandler(
                                            selected?.value
                                          );
                                        }}
                                      />
                                      {schemeDepositState?.AccountType ===
                                      '01' ? (
                                        ''
                                      ) : (
                                        <button
                                          onClick={() => {
                                            addAccountsHolderHandler(
                                              schemeDepositState.accountHolder
                                            );
                                          }}
                                          className="ml-5 w-1/12 rounded border bg-primary font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                                        >
                                          <i className="fa-solid fa-plus"></i>
                                        </button>
                                      )}
                                    </div>
                                    <div>
                                      {schemeDepositState?.AccountType ===
                                      '01' ? (
                                        ''
                                      ) : (
                                        <div className="rounded border-2 p-3">
                                          <h2 className="p-4 text-center uppercase">
                                            Selected Accounts
                                          </h2>

                                          <div className="">
                                            {selectAccount?.map((item: any) => (
                                              <div className=" m-4 grid grid-cols-1 gap-4 rounded border p-4 lg:grid-cols-1 ">
                                                <div className="flex">
                                                  <div className="peer form-input mr-2 w-full rounded border">
                                                    {item?.FullName}
                                                  </div>

                                                  <button
                                                    className="ml-5 w-1/6 rounded border bg-primary font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                                                    onClick={() => {
                                                      removeAccountsHandler(
                                                        item.PersonId
                                                      );
                                                    }}
                                                  >
                                                    <i className="fa-solid fa-trash"></i>
                                                  </button>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                    <div>
                                      <div>
                                        <div className="rounded border-2 p-3">
                                          <h2 className="p-4 text-center uppercase">
                                            Accounts Operator
                                          </h2>

                                          <div className="">
                                            {schemeDepositState?.AccountType ===
                                            '01' ? (
                                              <div className=" m-4 grid grid-cols-1 gap-4 rounded border p-4 lg:grid-cols-1 ">
                                                <div className="flex">
                                                  <div className="peer form-input mr-2 w-full rounded border">
                                                    {OperatorName?.Age >= 18
                                                      ? OperatorName.FullName
                                                      : myCardsResponseData?.[0]
                                                          ?.Name!}
                                                  </div>
                                                </div>
                                              </div>
                                            ) : (
                                              <div>
                                                {selectAccount?.map(
                                                  (item: any) => (
                                                    <div className=" m-4 grid grid-cols-1 gap-4 rounded border p-4 lg:grid-cols-1 ">
                                                      <div className="flex">
                                                        <div className="peer form-input mr-2 w-full rounded border">
                                                          {item?.Age >= 18
                                                            ? item.FullName
                                                            : myCardsResponseData?.[0]
                                                                ?.Name!}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* <MyTextInput
                                      label="Account Number"
                                      name="accountNo"
                                      inputType="text"
                                      id="accountNo"
                                      disabled={true}
                                      required={false}
                                      value={selectedAccountHolder?.value}
                                      onChangeHandler={function (
                                        event: ChangeEvent<HTMLInputElement>
                                      ): void {
                                        throw new Error(
                                          'Function not implemented.'
                                        );
                                      }}
                                      leftIcon={
                                        <i className="fa-regular fa-hashtag"></i>
                                      }
                                    /> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* step 2 */}
                        {activeStep + 1 === 2 && (
                          <div className="py-10">
                            <div className="flex justify-center">
                              <div className="w-full md:w-1/2">
                                <div className="grid grid-cols-1 gap-6">
                                  <MyTextInput
                                    label="Account Name"
                                    name="accountHolderName"
                                    inputType="text"
                                    id="AccountName"
                                    value={
                                      schemeDepositState?.accountHolderName
                                    }
                                    disabled={false}
                                    required={false}
                                    onChangeHandler={(event) => {
                                      updateSchemeDepositState(
                                        event.target.name,
                                        event.target.value
                                      );
                                    }}
                                    leftIcon={
                                      <i className="fa-solid fa-person"></i>
                                    }
                                  />
                                  <MyDropdown
                                    label="Tenure"
                                    name="tenure"
                                    required={true}
                                    id="tenure"
                                    leftIcon={
                                      <i className="fa-regular fa-calendar"></i>
                                    }
                                    value={schemeDepositState?.tenure}
                                    error={schemeDepositState?.Errors?.tenure}
                                    dropDownData={getDurationsResponseData?.map(
                                      (obj: any, index: number) => {
                                        return {
                                          id: index,
                                          label:
                                            obj?.DurationName! +
                                            ' ' +
                                            '|' +
                                            ' ' +
                                            obj?.InterestRate +
                                            '%',
                                          value: obj?.DurationId!,
                                        };
                                      }
                                    )}
                                    onChange={handleTenureChange}
                                  />

                                  <MyTextInput
                                    label="Duration In Months"
                                    name="DurationInMonths"
                                    inputType="text"
                                    id="DurationInMonths"
                                    value={schemeDepositState?.DurationInMonths}
                                    disabled={true}
                                    required={false}
                                    onChangeHandler={function (): void {
                                      throw new Error(
                                        'Function not implemented.'
                                      );
                                    }}
                                    leftIcon={
                                      <i className="fa-regular fa-calendar"></i>
                                    }
                                  />
                                  <MyTextInput
                                    label="Amount"
                                    name="amount"
                                    inputType="text"
                                    id="amount"
                                    value={schemeDepositState?.amount}
                                    disabled={false}
                                    required={false}
                                    onChangeHandler={(event) => {
                                      updateSchemeDepositState(
                                        event.target.name,
                                        event.target.value
                                      );
                                    }}
                                    leftIcon={
                                      <i className="fa-regular fa-bangladeshi-taka-sign"></i>
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* step 3 */}
                        {activeStep + 1 === 3 && (
                          <div className="py-10">
                            <div className="flex justify-center">
                              <div className="w-full space-y-6  md:w-1/2">
                                <div className="grid-col-1 grid gap-4 ">
                                  <div>
                                    <MyDropdown
                                      label="Nominee"
                                      name="nominee"
                                      id="nominee"
                                      leftIcon={
                                        <i className="fa-regular fa-user"></i>
                                      }
                                      required={true}
                                      value={
                                        schemeDepositState?.selectedNominee
                                      }
                                      error={
                                        schemeDepositState?.Errors
                                          ?.selectedNomineeName
                                      }
                                      dropDownData={PersonFamilyAndRelatives?.map(
                                        (obj, index) => {
                                          return {
                                            id: index,
                                            label: obj?.label!,
                                            value: obj?.value!,
                                          };
                                        }
                                      )}
                                      onChange={(event) => {
                                        const selected =
                                          PersonFamilyAndRelatives?.find(
                                            (obj) => {
                                              if (
                                                parseInt(event.target.value) ===
                                                obj?.value
                                              )
                                                return {
                                                  value: obj?.value,
                                                  label: obj?.label,
                                                };
                                            }
                                          );
                                        updateSchemeDepositState(
                                          'selectedNominee',
                                          event.target.value
                                        );

                                        updateSchemeDepositState(
                                          'selectedNomineeName',
                                          selected?.label
                                        );
                                        updatePersonId(event.target.value);

                                        if (
                                          schemeDepositState.AccountType ===
                                          '01'
                                        ) {
                                          nomineeAddHandler(
                                            PersonFamilyAndRelatives
                                          );
                                        } else {
                                          return '';
                                        }
                                      }}
                                    />
                                  </div>
                                  <div className="flex">
                                    <MyTextInput
                                      label="Nominee Percentage"
                                      name="nomineePercentage"
                                      inputType="text"
                                      id="nomineePercentage"
                                      disabled={
                                        schemeDepositState.AccountType === '01'
                                          ? true
                                          : false
                                      }
                                      required={false}
                                      value={
                                        schemeDepositState.nomineePercentage
                                      }
                                      error={
                                        nomineePercentage === ''
                                          ? schemeDepositState?.Errors
                                              ?.nomineePercentage
                                          : nomineePercentage
                                      }
                                      onChangeHandler={(event) => {
                                        updateSchemeDepositState(
                                          event.target.name,
                                          event.target.value
                                        );
                                        setNomineePercentage('');
                                      }}
                                      leftIcon={
                                        <i className="fa-solid fa-percent"></i>
                                      }
                                    />
                                    {schemeDepositState.AccountType === '01' ? (
                                      ''
                                    ) : (
                                      <button
                                        className="ml-5 w-1/6 rounded border bg-primary font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                                        onClick={() => {
                                          let error = '';
                                          const {
                                            selectedNomineeName,
                                            nomineePercentage,
                                          } = schemeDepositState;

                                          // Calculate the total nomineePercentage
                                          const totalPercentage =
                                            schemeDepositState.JointNominee.reduce(
                                              (total: any, nominee: any) =>
                                                total +
                                                parseInt(
                                                  nominee.nomineePercentage,
                                                  10
                                                ),
                                              0
                                            );

                                          // Check if the total percentage exceeds 100
                                          if (
                                            totalPercentage +
                                              parseInt(nomineePercentage, 10) >
                                            100
                                          ) {
                                            setNomineePercentage(
                                              'Total nominee percentage cannot exceed 100%'
                                            );
                                          } else {
                                            // Validate and update errors
                                            const cardFields = {
                                              selectedNomineeName,
                                              nomineePercentage,
                                            };

                                            let fieldName: keyof typeof cardFields;

                                            for (fieldName in cardFields) {
                                              updateSchemeDepositState(
                                                fieldName,
                                                cardFields[fieldName]
                                              );
                                              error +=
                                                validateInsuranceDepositState(
                                                  fieldName,
                                                  schemeDepositState[fieldName]
                                                ) || '';
                                            }

                                            // Display error or proceed with adding nominee
                                            if (error.length === 0) {
                                              nomineeAddHandler(
                                                PersonFamilyAndRelatives
                                              );
                                            } else {
                                              // Display the error, you can handle this according to your UI
                                            }
                                          }
                                        }}
                                      >
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                    )}
                                  </div>
                                </div>
                                {schemeDepositState.AccountType === '01' ? (
                                  ''
                                ) : (
                                  <div className="rounded border-2 p-3">
                                    <h2 className="p-4 text-center uppercase">
                                      Appointed Nominee
                                    </h2>
                                    <span className="flex justify-center text-sm text-error">
                                      {schemeDepositState?.Errors?.JointNominee}
                                    </span>
                                    <div className="">
                                      {schemeDepositState?.JointNominee?.map(
                                        (item: any) => (
                                          <div className=" m-4 grid grid-cols-1 gap-4 rounded border p-4 lg:grid-cols-1 ">
                                            <div className="peer form-input mr-2 w-full rounded border">
                                              {item?.selectedNomineeName}(
                                              {item?.PersonId})
                                            </div>

                                            <div className="flex">
                                              <MyTextInput
                                                label="Nominee"
                                                name="nominee"
                                                inputType="text"
                                                id="nominee"
                                                disabled={true}
                                                required={false}
                                                value={item?.NomineePercentage}
                                                onChangeHandler={() => {}}
                                                leftIcon={
                                                  <i className="fa-solid fa-percent"></i>
                                                }
                                              />

                                              <button
                                                className="ml-5 w-1/6 rounded border bg-primary font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                                                onClick={() => {
                                                  removeNomineeHandler(item.id);
                                                }}
                                              >
                                                <i className="fa-solid fa-trash"></i>
                                              </button>
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        {/* step 4 */}
                        {activeStep + 1 === 4 && (
                          <div className="py-10">
                            <div className="flex justify-center">
                              <div className="w-full md:w-1/2">
                                <div className="grid grid-cols-1 gap-6">
                                  <ul className="mt-6 divide-y overflow-hidden rounded border text-justify">
                                    <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Account Name
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {productName}
                                      </div>
                                    </li>

                                    <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Tenure
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {schemeDepositState?.tenure} Years
                                      </div>
                                    </li>
                                    {/* <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Interest Rate
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {schemeDepositState?.Interest}%
                                      </div>
                                    </li> */}
                                    <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Deposit Amount
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {schemeDepositState?.amount} Tk
                                      </div>
                                    </li>
                                    <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Account Holder
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {schemeDepositState?.accountHolderName}
                                      </div>
                                    </li>
                                    {schemeDepositState?.AccountType ===
                                    '01' ? (
                                      <>
                                        <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                          <div className="w-full text-left md:w-1/2">
                                            Nominee Name
                                          </div>
                                          <div className="w-full text-right md:w-1/2">
                                            {
                                              schemeDepositState?.selectedNomineeName
                                            }
                                          </div>
                                        </li>
                                        <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                          <div className="w-full text-left md:w-1/2">
                                            Nominee Percentage
                                          </div>
                                          <div className="w-full text-right md:w-1/2">
                                            {
                                              schemeDepositState?.nomineePercentage
                                            }{' '}
                                            %
                                          </div>
                                        </li>
                                      </>
                                    ) : (
                                      ''
                                    )}
                                  </ul>
                                </div>
                                {schemeDepositState?.AccountType === '01' ? (
                                  ''
                                ) : (
                                  <div>
                                    <div className="rounded border-2 p-3">
                                      <h2 className="p-4 text-center uppercase">
                                        Appointed Nominee
                                      </h2>
                                      <div className="">
                                        {schemeDepositState?.JointNominee?.map(
                                          (item: any) => (
                                            <div className=" m-4 grid grid-cols-1 gap-4 md:grid-cols-2 ">
                                              <div className="peer form-input mr-2 w-full rounded border">
                                                {item?.label}({item?.value})
                                              </div>

                                              <div className="flex">
                                                <MyTextInput
                                                  label="Interest"
                                                  name="Interest"
                                                  inputType="text"
                                                  id="Interest"
                                                  disabled={true}
                                                  required={false}
                                                  value={
                                                    item?.nomineePercentage
                                                  }
                                                  onChangeHandler={function (): void {
                                                    throw new Error(
                                                      'Function not implemented.'
                                                    );
                                                  }}
                                                  leftIcon={
                                                    <i className="fa-solid fa-percent"></i>
                                                  }
                                                />
                                              </div>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        {activeStep + 1 === 5 && (
                          <div className="py-10">
                            <div className="flex justify-center">
                              <div className="w-full md:w-1/2">
                                <div className="grid grid-cols-1 gap-6">
                                  <CardAccountPinView
                                    showAccountInfo={false}
                                    titleAccounts="Transfer From"
                                    showCardInfo={true}
                                    myCards={myCardsResponseData}
                                    parentPageState={schemeDepositState}
                                    updateParentPageState={
                                      updateSchemeDepositState
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
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
                          styleClass="w-1/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                          name={''}
                        />

                        <MyButton
                          onClick={() => {
                            var error = '';

                            if (activeStep === 0) {
                              const { accountHolder } = schemeDepositState;

                              const cardFields = {
                                accountHolder,
                              };
                              let fieldName: keyof typeof cardFields;

                              for (fieldName in cardFields) {
                                updateSchemeDepositState(
                                  fieldName,
                                  cardFields[fieldName]
                                );
                                error =
                                  error +
                                  validateInsuranceDepositState(
                                    fieldName,
                                    schemeDepositState[fieldName]
                                  );
                              }
                              if (error.length === 0) {
                                if (
                                  accountOpeningEligibilityResponseData?.[0]
                                    ?.IsEligible
                                ) {
                                  if (
                                    schemeDepositState?.AccountType !== '01' &&
                                    selectAccount?.length === 0
                                  ) {
                                    return '';
                                  } else {
                                    handleNext();
                                  }
                                } else {
                                  return '';
                                }
                              }
                            }
                            if (activeStep === 1) {
                              const { tenure, amount } = schemeDepositState;
                              const cardFields = {
                                tenure,
                                amount,
                              };

                              let fieldName: keyof typeof cardFields;

                              for (fieldName in cardFields) {
                                updateSchemeDepositState(
                                  fieldName,
                                  cardFields[fieldName]
                                );
                                error =
                                  error +
                                  validateInsuranceDepositState(
                                    fieldName,
                                    schemeDepositState[fieldName]
                                  );
                              }
                              if (error.length === 0) {
                                handleNext();
                              }
                            }
                            if (activeStep === 2) {
                              const { selectedNomineeName, nomineePercentage } =
                                schemeDepositState;
                              const cardFields = {
                                selectedNomineeName,
                                nomineePercentage,
                              };

                              let fieldName: keyof typeof cardFields;

                              for (fieldName in cardFields) {
                                updateSchemeDepositState(
                                  fieldName,
                                  cardFields[fieldName]
                                );
                                error =
                                  error +
                                  validateInsuranceDepositState(
                                    fieldName,
                                    schemeDepositState[fieldName]
                                  );
                              }
                              if (error.length === 0) {
                                handleNext();
                                setNomineePercentage('');
                              }
                            }
                            if (activeStep === 3) {
                              handleNext();
                            }
                            if (activeStep === steps.length - 1) {
                              const { CardAccount, CardNo, CardPIN } =
                                schemeDepositState;
                              const cardFields = {
                                CardAccount,
                                CardNo,
                                CardPIN,
                              };

                              let fieldName: keyof typeof cardFields;
                              for (fieldName in cardFields) {
                                updateSchemeDepositState(
                                  fieldName,
                                  cardFields[fieldName]
                                );
                                error =
                                  error +
                                  validateInsuranceDepositState(
                                    fieldName,
                                    schemeDepositState[fieldName]
                                  );
                              }
                              if (error.length === 0) {
                                if (cardPinRemainingTry === 0) {
                                  cardLockRequestHandler();
                                } else {
                                  verifySchemeDepositPinRequestHandler();
                                }
                              }
                            }
                          }}
                          type="button"
                          label={
                            activeStep === steps.length - 1 ? 'Verify' : 'Next'
                          }
                          styleClass="w-1/4 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                          name={''}
                          disabled={false}
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
    </div>
  );
}

export default InsuranceDeposit;
