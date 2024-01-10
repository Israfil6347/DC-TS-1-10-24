import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import logoIcon from 'assets/images/logo/logocccul.png';
import CardPage from 'authenticated_pages/info/financial_card/CardPage';
import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import CardAccountPinView from 'authenticated_pages/shared/components/CardAccountPinView';
import { useCardVerificationState } from 'authenticated_pages/shared/hooks/useCardVerificationState';
import { stepStyle } from 'authenticated_pages/shared/style/stepperStyle';
import { validateCardVerificationState } from 'authenticated_pages/shared/validations/validateCardVerificationState';
import OTPValidationView from 'authentication/otp_validation/OTPValidationView';
import CryptoJS from 'crypto-js';
import MyButton from 'global_shared/components/MyButton';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyModal from 'global_shared/components/MyModal';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { Size } from 'global_shared/enum/Size';
import useCardPinRemainingTry from 'global_shared/hooks/useCardPinRemainingTry';
import useCommand from 'global_shared/hooks/useCommand';
import { CardHandler } from 'global_shared/model/data/CardHandler';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import * as React from 'react';
import { ChangeEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApplyProductLoanRequestModel } from '../../model/request/ApplyProductLoanRequestModel';
import { GetEligibleCollateralRequestModel } from '../../model/request/GetEligibleCollateralRequestModel';
import { AgainstLoanInterestModel } from '../../model/response/AgainstLoanInterestModel';
import { CollateralAccountResponseModel } from '../../model/response/CollateralAccountResponseModel';
import useProductLoanApplicationState from './hooks/useProductLoanApplicationState';
import useProductLoanSelectedAccountState, {
  ProductLoanSelectedAccountState,
} from './hooks/useProductLoanSelectedAccountState';
import { validateProductLoanApplicationState } from './validation/validateProductLoanApplicationState';
import { validateProductLoanSelectedAccountState } from './validation/validateProductLoanSelectedAccountState';
import MyImageInput from 'global_shared/components/MyImageInput';
import { error } from 'console';
const steps = [
  'COLLATERAL DETAILS  ',
  'APPLICATION DETAILS',
  'ACCOUNT HOLDER VERIFICATION',
];

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

interface MyProductLoanDetailsProps {
  loanDetails: any;
  loanDetailsModel: any;
  closeLoanDetails: () => void;
  eligibleCollateralACCListResponseData: CollateralAccountResponseModel | null;
}
const MyProductLoanDetails: React.FC<MyProductLoanDetailsProps> = ({
  loanDetails,
  loanDetailsModel,
  closeLoanDetails,
  eligibleCollateralACCListResponseData,
}) => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const navigate = useNavigate();

  const [activeStep, setActiveStep] = React.useState(0);

  const { productLoanApplicationState, updateProductLoanApplicationState } =
    useProductLoanApplicationState();

  console.log(productLoanApplicationState);

  const {
    productLoanSelectedAccountsState,
    setProductLoanSelectedAccountsState,
    updateProductLoanSelectedAccountsState,
  } = useProductLoanSelectedAccountState();

  const { cardVerificationState, updateCardVerificationState } =
    useCardVerificationState();

  const { cardPinRemainingTry, updateCardPinRemainingTry } =
    useCardPinRemainingTry();

  // const {
  //   data: eligibleCollateralACCListResponseData,
  //   loading: eligibleCollateralACCListResponseDataLoading,
  //   executeCommand: eligibleCollateralACCListResponseDataExecuteCommand,
  // } = useCommand<CollateralAccountResponseModel | null>();

  const {
    data: againstLoanInterestResponseData,
    setData: setAgainstLoanInterestResponseData,
    message: AgainstLoanInterestResponseMessage,
    loading: gainstLoanInterestResponseDataLoading,
    executeCommand: againstLoanInterestRequestExecutedCommand,
  } = useCommand<AgainstLoanInterestModel[] | null>();

  console.log(AgainstLoanInterestResponseMessage);

  const {
    loading: personalCardInfoResponseDataLoading,
    data: personalCardInfoResponseData,
    executeCommand: personalCardInfoRequestExecuteCommand,
  } = useCommand<CardModel[] | null>();

  const {
    data: verifyPINResponseData,
    loading: verifyPINResponseDataLoading,
    message: verifyPinResponseMessage,
    status: verifyPINResponseStatus,
    setStatus: setVerifyPINResponseStatus,
    executeCommand: verifyPINRequestExecuteCommand,
  } = useCommand<any>();

  const {
    data: submitLoanApplicationAgainstDepositProductResponseData,
    loading: submitLoanApplicationAgainstDepositProductSResponseDataLoading,
    executeCommand:
      submitLoanApplicationAgainstDepositProductRequestExecuteCommand,
    message: submitLoanApplicationAgainstDepositProductResponseMessage,
    status: submitLoanApplicationAgainstDepositProductResponseStatus,
    setStatus: setLoanApplicationAgainstDepositProductResponseStatus,
  } = useCommand<string | null>();

  const {
    data: cardLockResponseData,
    loading: cardLockResponseDAtaLoading,
    status: cardLockResponseStatus,
    setStatus: setCardLockResponseStatus,
    executeCommand: cardLockRequestExecuteCommand,
  } = useCommand<string | null>();

  var card: CardHandler = new CardHandler([]);
  if (personalCardInfoResponseData !== null) {
    card = new CardHandler(personalCardInfoResponseData);
  }

  useEffect(() => {
    if (personalCardInfoResponseData !== null) {
      updateCardVerificationState(
        'CardNo',
        personalCardInfoResponseData?.[0].CardNo?.trim()
      );
      updateCardVerificationState(
        'CardAccount',
        personalCardInfoResponseData?.[0].CardsAccounts?.[0].AccountNumber.trim()
      );
    }
  }, [personalCardInfoResponseData]);

  useEffect(() => {
    if (eligibleCollateralACCListResponseData != null) {
      var modifiedObj: ProductLoanSelectedAccountState[] = [];
      eligibleCollateralACCListResponseData?.CollateralAccounts.forEach(
        (element: any) => {
          modifiedObj.push({
            AccountId: element.AccountId,
            AccountType: element.AccountType,
            AccountNumber: element.AccountNumber,
            TotalBalance: element.TotalBalance,
            LoanableBalance: element.LoanableBalance,
            PartialApplyLoan: element.PartialApplyLoan,
            IsEligible: element.IsEligible,
            WithdrawableBalance: element.WithdrawableBalance,
            isSelected: element.isSelected,
            Errors: {
              AccountId: '',
              AccountType: '',
              AccountNumber: '',
              TotalBalance: '',
              LoanableBalance: '',
              PartialApplyLoan: '',
              IsEligible: '',
              WithdrawableBalance: '',
              isSelected: '',
            },
          });
        }
      );

      setProductLoanSelectedAccountsState(modifiedObj);
    }

    var baseRequestObj = new BaseRequestModel(authUser);

    personalCardInfoRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V2/myCards',
      JSON.stringify(baseRequestObj),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    // const baseRequestEligibleCollateral = new GetEligibleCollateralRequestModel(
    //   authUser
    // );

    // baseRequestEligibleCollateral.ProductCode =
    //   loanDetailsModel?.LoanProductCode;

    // eligibleCollateralACCListResponseDataExecuteCommand(
    //   process.env.REACT_APP_BASE_URL +
    //     '/loans_v1/getEligibleCollateralAccounts',
    //   JSON.stringify(baseRequestEligibleCollateral),
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       token: localStorage.getItem('token'),
    //     },
    //   }
    // );
  }, [loanDetails, cardLockResponseData]);

  const getLoanInterestHandler = () => {
    var isCheckedAccounts = true;
    var accounts = '';
    productLoanSelectedAccountsState.forEach((obj) => {
      if (obj?.isSelected) {
        isCheckedAccounts = false;
        accounts = accounts + obj.AccountId + ', ';
      }
    });

    if (isCheckedAccounts) {
      setAgainstLoanInterestResponseData(null);
    }
    var obj = {
      LoanApplication: {
        AccountIds: accounts,
        LoanProductCode: loanDetailsModel?.LoanProductCode,
        SuretyAccountIds: accounts,
      },
      ByUserId: !!authUser ? authUser.UserId : '',
      MobileNumber: !!authUser ? authUser.RegMobile : '',
      RolePermissionId: !!authUser ? authUser.RoleId : '',
      UID: !!authUser ? authUser.UserId : '',
      UserName: !!authUser ? authUser.Email : '',
      RequestFrom: 'Web',
    };

    console.log(obj);

    againstLoanInterestRequestExecutedCommand(
      process.env.REACT_APP_BASE_URL + '/loans_v1/getInterestOnAgainstLoan',
      JSON.stringify(obj),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const getCollateral = () => {
    var accounts: ProductLoanSelectedAccountState[] = [];

    productLoanSelectedAccountsState.forEach((obj) => {
      if (obj.isSelected) {
        accounts.push(obj);
      }
    });

    return accounts;
  };

  const getTotalApplyLoan = () => {
    var amount: number = 0;

    productLoanSelectedAccountsState.forEach((obj) => {
      if (obj.isSelected) {
        amount = amount + obj?.PartialApplyLoan;
      }
    });

    return isNaN(amount) ? 0 : amount;
  };

  const cardLockHandler = () => {
    if (cardPinRemainingTry !== 0) {
      updateCardPinRemainingTry(1);
    } else {
      var cardLockObj = {
        NameOnCard: card?.getHandledCard()[0]?.NameOnCard,
        CardNo: card?.getHandledCard()[0]?.CardNo,
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

  const productLoanHandler = () => {
    var encryptPassword = CryptoJS.MD5(cardVerificationState?.CardPIN);

    const baseRequestApplyProductLoan = new ApplyProductLoanRequestModel(
      authUser
    );
    baseRequestApplyProductLoan.CollateralAccounts = getCollateral();
    baseRequestApplyProductLoan.LoanProductCode =
      loanDetailsModel?.LoanProductCode;
    baseRequestApplyProductLoan.AccountNo =
      card?.getHandledCard()?.[0]?.AccountNumber!;
    baseRequestApplyProductLoan.NameOnCard =
      card?.getHandledCard()?.[0]?.NameOnCard!;
    baseRequestApplyProductLoan.MaximumLoanAmount =
      eligibleCollateralACCListResponseData?.MaximumLoanAmount!;
    baseRequestApplyProductLoan.InterestRate =
      againstLoanInterestResponseData?.[0]?.InterestRate!;
    baseRequestApplyProductLoan.Certificate =
      productLoanApplicationState.Certificate;
    baseRequestApplyProductLoan.NumberOfInstallment =
      productLoanApplicationState?.NumberOfInstallment;
    baseRequestApplyProductLoan.TotalApplyLoan = getTotalApplyLoan();
    baseRequestApplyProductLoan.SecretKey = encryptPassword.toString();
    baseRequestApplyProductLoan.CardNo = card?.getHandledCard()[0]?.CardNo!;

    verifyPINRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/cards_V1/verifyCardPIN',
      JSON.stringify(baseRequestApplyProductLoan),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const otpDataHandler = (otpData: string) => {
    verifyPINResponseData.OTPValue = otpData;

    submitLoanApplicationAgainstDepositProductRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL +
        '/loans_v1/submitLoanAgainstDepositProduct',
      JSON.stringify(verifyPINResponseData),
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

  const hasSelectedAccounts = productLoanSelectedAccountsState?.filter(
    (item) => {
      if (item.isSelected) {
        return true;
      } else {
        return false;
      }
    }
  );

  if (card?.getHandledCard().length === 0) {
    return <CardPage />;
  } else {
    return (
      <>
        <LoaderDialogue
          isLoading={
            verifyPINResponseDataLoading ||
            personalCardInfoResponseDataLoading ||
            submitLoanApplicationAgainstDepositProductSResponseDataLoading ||
            cardLockResponseDAtaLoading ||
            gainstLoanInterestResponseDataLoading
          }
        />

        {/* Begin product loan application dialogue */}
        <MyModal
          show={loanDetails}
          size={Size.Small}
          onClose={() => {
            closeLoanDetails();
            // setAgainstLoanInterestResponseData(null);
          }}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="flex w-full flex-col items-center bg-background p-6 ">
                <img src={logoIcon} alt="" />
                <h3 className="font-bold text-primary">
                  Deposit Loan Application Form
                </h3>
              </div>
            }
            dialogueFooter={
              <div className="flex w-full items-center justify-center gap-4 bg-background p-6 ">
                <MyButton
                  onClick={() => {
                    handleBack();
                  }}
                  type="button"
                  disabled={activeStep === 0 ? true : false}
                  label="Back"
                  styleClass="w-2/5 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />

                {activeStep === steps.length - 1 ? (
                  <MyButton
                    onClick={() => {
                      var error = '';
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

                      if (
                        error.length === 0 &&
                        hasSelectedAccounts.length > 0
                      ) {
                        const { AgreementAccept } = productLoanApplicationState;
                        const cardFields = {
                          AgreementAccept,
                        };
                        let fieldName: keyof typeof cardFields;

                        for (fieldName in cardFields) {
                          updateProductLoanApplicationState(
                            fieldName,
                            productLoanApplicationState[fieldName]
                          );
                          error =
                            error +
                            validateProductLoanApplicationState(
                              fieldName,
                              productLoanApplicationState[fieldName]
                            );
                        }
                        if (
                          error.length === 0 &&
                          hasSelectedAccounts.length > 0
                        ) {
                          productLoanHandler();
                        }
                      }
                    }}
                    type="button"
                    disabled={
                      productLoanApplicationState.AgreementAccept ? false : true
                    }
                    label="Apply"
                    styleClass="w-2/5 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                    name={''}
                  />
                ) : (
                  <MyButton
                    disabled={getTotalApplyLoan() > 100000 ? true : false}
                    // disabled={
                    //   !productLoanApplicationState.AgreementAccept ? true : false
                    // }
                    onClick={() => {
                      var error = '';
                      if (activeStep + 1 === 1) {
                        productLoanSelectedAccountsState.forEach(
                          (element, index) => {
                            if (element?.isSelected) {
                              let fieldName: keyof typeof element;
                              for (fieldName in element) {
                                updateProductLoanSelectedAccountsState(
                                  fieldName,
                                  element[fieldName],
                                  element.LoanableBalance,
                                  index
                                );
                                error =
                                  error +
                                  validateProductLoanSelectedAccountState(
                                    fieldName,
                                    element[fieldName],
                                    element.LoanableBalance
                                  );
                              }
                            }
                          }
                        );
                        if (
                          error.length === 0 &&
                          hasSelectedAccounts.length > 0
                        ) {
                          handleNext();
                        }
                      }
                      if (activeStep + 1 === 2) {
                        const { NumberOfInstallment } =
                          productLoanApplicationState;
                        const cardFields = {
                          NumberOfInstallment,
                        };
                        let fieldName: keyof typeof cardFields;
                        for (fieldName in cardFields) {
                          updateProductLoanApplicationState(
                            fieldName,
                            productLoanApplicationState[fieldName]
                          );
                          error =
                            error +
                            validateProductLoanApplicationState(
                              fieldName,
                              productLoanApplicationState[fieldName]
                            );
                        }

                        if (
                          error.length === 0 &&
                          hasSelectedAccounts.length > 0
                        ) {
                          handleNext();
                        }
                      }
                      if (activeStep + 1 === 3) {
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

                        if (
                          error.length === 0 &&
                          hasSelectedAccounts.length > 0
                        ) {
                          const { AgreementAccept } =
                            productLoanApplicationState;
                          const cardFields = {
                            AgreementAccept,
                          };
                          let fieldName: keyof typeof cardFields;

                          for (fieldName in cardFields) {
                            updateProductLoanApplicationState(
                              fieldName,
                              productLoanApplicationState[fieldName]
                            );
                            error =
                              error +
                              validateProductLoanApplicationState(
                                fieldName,
                                productLoanApplicationState[fieldName]
                              );
                          }
                          if (
                            error.length === 0 &&
                            hasSelectedAccounts.length > 0
                          ) {
                            productLoanHandler();
                          }
                        }
                      }
                    }}
                    type="button"
                    label="Next"
                    styleClass="w-2/5 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                    name={''}
                  />
                )}
              </div>
            }
            onCancel={() => {
              closeLoanDetails();
              setAgainstLoanInterestResponseData(null);
            }}
          >
            <div className="py-5">
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
              <div
                className="my-3 grid grid-cols-1 gap-4 overflow-hidden overflow-y-scroll px-8"
                style={{ maxHeight: window.innerHeight - 360 }}
              >
                {activeStep + 1 === 1 && (
                  <div className="w-full">
                    <div
                      className={`content overflow-hidden border ${
                        hasSelectedAccounts.length === 0 && 'border-error'
                      } bg-surface p-2 text-onSurface`}
                    >
                      <ul
                        className="overflow-y-scroll"
                        style={{
                          maxHeight: window.innerHeight - 600,
                          minHeight: window.innerHeight - 720,
                        }}
                      >
                        {productLoanSelectedAccountsState?.map((obj, index) => (
                          <li
                            key={index}
                            className={`w-full items-center rounded-md border border-gray-300 bg-slate-100 p-2  transition-colors duration-300`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="">
                                <div className="font-normal">
                                  Account Type:
                                  <span className="pl-1 font-bold">
                                    {obj?.AccountType}
                                  </span>
                                </div>

                                <div className="font-normal">
                                  Account No:
                                  <span className="pl-1 font-bold">
                                    {obj?.AccountNumber}
                                  </span>
                                </div>

                                <div className="font-normal">
                                  Loanable Balance:
                                  <span className="pl-1 font-bold ">
                                    {formatToTkSymbolMoney(
                                      obj?.LoanableBalance
                                    )}
                                  </span>
                                </div>
                              </div>
                              <div className="">
                                <MyCheckBox
                                  disabled={false}
                                  onChangeHandler={(event) => {
                                    updateProductLoanSelectedAccountsState(
                                      'isSelected',
                                      event.target.checked,
                                      obj.LoanableBalance,
                                      index
                                    );

                                    updateProductLoanSelectedAccountsState(
                                      'PartialApplyLoan',
                                      obj?.PartialApplyLoan,
                                      obj.LoanableBalance,
                                      index
                                    );

                                    getLoanInterestHandler();
                                  }}
                                  label={''}
                                  name="isSelectedAccount"
                                  value={
                                    productLoanSelectedAccountsState[index]
                                      ?.isSelected
                                  }
                                  error={undefined}
                                />
                              </div>
                            </div>
                            <div className="mt-4">
                              <MyTextInput
                                label="Apply Loan Amount"
                                name="PartialApplyLoan"
                                inputType="number"
                                disabled={
                                  productLoanSelectedAccountsState[index]
                                    ?.isSelected
                                    ? false
                                    : true
                                }
                                required={false}
                                value={
                                  productLoanSelectedAccountsState != null
                                    ? productLoanSelectedAccountsState?.[index]
                                        ?.PartialApplyLoan
                                    : obj?.PartialApplyLoan
                                }
                                error={
                                  productLoanSelectedAccountsState?.[index]
                                    ?.Errors?.PartialApplyLoan
                                }
                                onChangeHandler={(event) => {
                                  updateProductLoanSelectedAccountsState(
                                    event.target.name,
                                    parseInt(event.target.value),
                                    productLoanSelectedAccountsState[index]
                                      .LoanableBalance,
                                    index
                                  );
                                }}
                                leftIcon={
                                  <i className="fa-solid fa-sack-dollar"></i>
                                }
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-error">
                        {getTotalApplyLoan() > 100000 &&
                          'Maximum loan amount is 1,00,000 ৳.'}
                      </p>
                      <p className="">
                        Total apply loan amount:
                        {formatToTkSymbolMoney(getTotalApplyLoan())}
                      </p>
                    </div>
                  </div>
                )}
                {activeStep + 1 === 2 && (
                  <div className="mt-4 grid grid-cols-1 gap-3 md:pr-1 lg:grid-cols-1">
                    <div className="">
                      <MyTextInput
                        label="Maximum Loan Amount"
                        name="SecretKey"
                        inputType="number"
                        disabled={true}
                        required={false}
                        value={String(
                          againstLoanInterestResponseData?.[0]?.MaxLoanAmount
                        )}
                        onChangeHandler={function (
                          event: ChangeEvent<HTMLInputElement>
                        ): void {
                          throw new Error('Function not implemented.');
                        }}
                        leftIcon={<i className="fa-solid fa-sack-dollar"></i>}
                      />
                    </div>

                    <div className="">
                      <MyTextInput
                        label="Interest Rate"
                        name="SecretKey"
                        inputType="number"
                        disabled={true}
                        required={false}
                        value={String(
                          againstLoanInterestResponseData?.[0]?.InterestRate
                        )}
                        onChangeHandler={function (
                          event: ChangeEvent<HTMLInputElement>
                        ): void {
                          throw new Error('Function not implemented.');
                        }}
                        leftIcon={<i className="fa-solid fa-percent"></i>}
                      />
                    </div>
                    <MyDropdown
                      label="Installment No."
                      name="NumberOfInstallment"
                      required={true}
                      value={productLoanApplicationState?.NumberOfInstallment}
                      error={
                        productLoanApplicationState?.Errors?.NumberOfInstallment
                      }
                      dropDownData={againstLoanInterestResponseData?.[0]?.MinimumInstallment.split(
                        ','
                      )?.map((obj, index) => {
                        return {
                          id: index,
                          value: obj,
                          label: obj,
                        };
                      })}
                      onChange={(event) => {
                        updateProductLoanApplicationState(
                          event.target.name,
                          event.target.value
                        );
                      }}
                      leftIcon={<i className="fa-solid fa-list-ol"></i>}
                    />
                    <div className="">
                      <MyTextInput
                        label="Apply Loan Amount"
                        name=""
                        disabled={true}
                        required={false}
                        value={String(getTotalApplyLoan())}
                        onChangeHandler={function (
                          event: ChangeEvent<HTMLInputElement>
                        ): void {
                          throw new Error('Function not implemented.');
                        }}
                        leftIcon={<i className="fa-solid fa-sack-dollar"></i>}
                        inputType="text"
                      />
                    </div>
                    {againstLoanInterestResponseData?.[0]
                      ?.IsCertificateRequired ? (
                      <div className="">
                        <MyImageInput
                          disabled={false}
                          label="Certificate"
                          name="Certificate"
                          id="Certificate"
                          value={productLoanApplicationState.Certificate}
                          required={true}
                          error={productLoanApplicationState.Errors.Certificate}
                          heightClass="h-32"
                          onChangeHandler={(fieldName, fieldValue) => {
                            updateProductLoanApplicationState(
                              fieldName,
                              fieldValue
                            );
                          }}
                        />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
                {activeStep + 1 === 3 && (
                  <div>
                    <CardAccountPinView
                      titleCard=""
                      titleAccounts="Account Details"
                      showAccountInfo={false}
                      showCardInfo={true}
                      styleClasses="p-0"
                      myCards={personalCardInfoResponseData}
                      parentPageState={cardVerificationState}
                      updateParentPageState={updateCardVerificationState}
                    />
                    <label htmlFor="" className={` my-4  flex`}>
                      <MyCheckBox
                        disabled={false}
                        label=""
                        name="AgreementAccept"
                        value={productLoanApplicationState?.AgreementAccept}
                        error=""
                        onChangeHandler={() => {
                          updateProductLoanApplicationState(
                            'AgreementAccept',
                            !productLoanApplicationState?.AgreementAccept
                          );
                        }}
                      />
                      <div
                        className={`text-justify ${
                          productLoanApplicationState?.AgreementAccept === false
                            ? 'text-error'
                            : ''
                        }`}
                      >
                        এই মর্মে অঙ্গীকার করছি যে, আমি স্বেচ্ছায় সজ্ঞানে জেনে ও
                        বুঝে, এই এমএমএস কিংবা ওয়েব পোর্টালের মাধ্যমে নীতিমালা
                        অনুসারে আমার স্থায়ী আমানত/সঞ্চয়ী আমানতের বিপরীতে ঋণ
                        গ্রহণ করলাম। এই এমএমএস কিংবা ওয়েব পোর্টালের মাধ্যমে আমার
                        হিসাবের বিপরীতে গ্রহনকৃত ঋণে উদ্বুদ্ধ সকল সমস্যা মেনে
                        নিতে বাধ্য থাকব। এছাড়া ঋণ খেলাপী হলে, প্রতিষ্টানের
                        নীতিমালা অনুসারে ঋণ পরিশোধ বা সমন্বয় করতেও বাধ্য থাকব।
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </MyDialogueView>
        </MyModal>
        {/* End product loan application dialogue */}

        {verifyPinResponseMessage?.includes('Invalid Card PIN') && (
          <FailedDialogue
            dialogueSize={Size.Small}
            isDialogueOpen={verifyPINResponseStatus === 'failed' ? true : false}
            cancelButtonText="ok"
            onCloseButtonClick={() => {
              setVerifyPINResponseStatus(null);
              cardLockHandler();
            }}
          >
            {verifyPinResponseMessage +
              '. ' +
              'Remaining Tries ' +
              ' ' +
              cardPinRemainingTry}
          </FailedDialogue>
        )}

        <SuccessDialogue
          isDialogueOpen={cardLockResponseStatus === 'success' ? true : false}
          onCloseButtonClick={() => {
            setCardLockResponseStatus(null);
          }}
        >
          {cardLockResponseData}
        </SuccessDialogue>

        <SuccessDialogue
          isDialogueOpen={
            submitLoanApplicationAgainstDepositProductResponseStatus ===
            'success'
              ? true
              : false
          }
          onCloseButtonClick={() => {
            setLoanApplicationAgainstDepositProductResponseStatus(null);
            navigate('/');
          }}
        >
          {submitLoanApplicationAgainstDepositProductResponseData}
        </SuccessDialogue>

        <FailedDialogue
          dialogueSize={Size.Small}
          isDialogueOpen={
            submitLoanApplicationAgainstDepositProductResponseStatus ===
            'failed'
              ? true
              : false
          }
          OkButtonText="back"
          onOkButtonClick={() => {
            setLoanApplicationAgainstDepositProductResponseStatus(null);
            navigate('/loans/apply_for_loan');
          }}
          cancelButtonText="Retry"
          onCloseButtonClick={() => {
            setLoanApplicationAgainstDepositProductResponseStatus(null);
          }}
        >
          {submitLoanApplicationAgainstDepositProductResponseMessage}
        </FailedDialogue>

        {verifyPINResponseStatus === 'success' && (
          <OTPValidationView
            isOTPValidationViewOpen={
              verifyPINResponseStatus === 'success' ? true : false
            }
            closeOTPValidationView={() => {
              setVerifyPINResponseStatus(null);
            }}
            otpValidateRequestHandler={otpDataHandler}
            resendOTPRequestHandler={productLoanHandler}
          />
        )}
      </>
    );
  }
};

export default MyProductLoanDetails;
