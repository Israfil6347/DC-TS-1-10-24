import InstallmentCalculationDialog from 'authenticated_pages/loans/apply_loans/dialogues/InstallmentCalculationDialog';
import { LoanAccountReadModel } from 'authenticated_pages/loans/shared/model/data/LoanAccountReadModel';
import MyModal from 'global_shared/components/MyModal';
import MyTextInput from 'global_shared/components/MyTextInput';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { isEmpty } from 'global_shared/utils/validations';
import { useContext, useEffect, useState } from 'react';

interface RepaymentConfirmationDialogueProps {
  isPaymentCalculatorOpen: boolean;
  closeDialogue: () => void;
  loanDetailsData: LoanAccountReadModel[];
}

const RepaymentConfirmationDialogue: React.FC<
  RepaymentConfirmationDialogueProps
> = ({ isPaymentCalculatorOpen, closeDialogue, loanDetailsData }) => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const [isOpenInstallment, setIsOpenInstallment] = useState(false);

  const [OtherInputs, setOtherInputs] = useState({
    Errors: {
      installmentAmount: '',
    },
    installmentAmount: loanDetailsData?.[0].LoanRefundAmount,
  });

  const updateOtherInputs = (fieldName: string, fieldValue: any) => {
    setOtherInputs((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: installmentValidation(fieldName, fieldValue),
        },
      };
    });
  };

  const installmentValidation = (fieldName: string, fieldValue: any) => {
    switch (fieldName) {
      case 'installmentAmount':
        if (isEmpty(fieldValue)) {
          return 'Please enter valid amount';
        }
        return '';
      default:
        return '';
    }
  };

  const {
    loading: loanPaymentCalculationResponseDataLoading,
    data: loanPaymentCalculationResponseData,
    message: loanPaymentCalculationResponseMessage,
    status: loanPaymentCalculationResponseStatus,
    setStatus: setLoanPaymentCalculationResponseStatus,
    executeCommand: loanPaymentCalculationRequestCommand,
  } = useCommand();

  const baseRequestObj = new BaseRequestModel(authUser);
  const calculationObj = {
    ...baseRequestObj,
    Days: loanDetailsData?.[0].Days,
    InterestRate: loanDetailsData?.[0].InterestRate,
    IssuedAmount: loanDetailsData?.[0].IssuedAmount,
    IssuedDate: loanDetailsData?.[0].IssuedDate,
    LastPaidDate: loanDetailsData?.[0].LastPaidDate,
    LoanBalance: loanDetailsData?.[0].LoanBalance,
    LoanRefund: isOpenInstallment
      ? OtherInputs?.installmentAmount
      : loanDetailsData?.[0].LoanRefundAmount,
    ModuleCode: loanDetailsData?.[0].ModuleCode,
  };

  const installmentSubmitHandler = () => {
    loanPaymentCalculationRequestCommand(
      process.env.REACT_APP_BASE_URL + '/loans_V1/calculateLoanPayment',
      JSON.stringify(calculationObj),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  return (
    <>
      <LoaderDialogue isLoading={loanPaymentCalculationResponseDataLoading} />

      <MyModal
        size={Size.Small}
        show={isPaymentCalculatorOpen}
        onClose={() => closeDialogue()}
      >
        <MyDialogueView
          onCancel={() => {
            closeDialogue();
            setIsOpenInstallment(false);
          }}
          dialogueHeader={
            <div className="header flex flex-col items-center justify-center border-b bg-background p-4 text-2xl font-bold text-onSurface">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-20 w-20 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-center text-lg font-semibold">
                Do you want to pay regular installment?
              </p>
            </div>
          }
          dialogueFooter={
            <div className="sticky bottom-0 flex items-center justify-center gap-4 bg-background p-4">
              <button
                className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                onClick={() => {
                  if (OtherInputs?.installmentAmount === 0) {
                    updateOtherInputs('installmentAmount', '');
                  }

                  if (OtherInputs?.Errors?.installmentAmount.length === 0) {
                    installmentSubmitHandler();
                  }
                }}
              >
                Submit
              </button>
              <button
                className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                // @click="regularInstallment=false "
                onClick={() => {
                  setIsOpenInstallment(false);
                  updateOtherInputs(
                    'installmentAmount',
                    '' + loanDetailsData?.[0].LoanRefundAmount
                  );
                  closeDialogue();
                  setIsOpenInstallment(false);
                }}
              >
                Cancel
              </button>
            </div>
          }
        >
          <div className="content p-4">
            <div className="flex items-center justify-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  defaultChecked
                  type="radio"
                  className="h-4 w-4 border-primaryVariant text-primary"
                  name="yes-no"
                  value="yes"
                  onClick={() => {
                    setIsOpenInstallment(false);
                  }}
                />
                <span className="ml-2 font-bold uppercase">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="h-4 w-4 border-primaryVariant text-primary"
                  name="yes-no"
                  value="no"
                  onClick={() => {
                    setIsOpenInstallment(true);
                  }}
                />
                <span className="ml-2 font-bold uppercase">No</span>
              </label>
            </div>
            {isOpenInstallment ? (
              <div>
                <div className="mt-2 ml-5 mr-5">
                  <MyTextInput
                    disabled={false}
                    inputType="number"
                    label="Enter installment amount"
                    name="installmentAmount"
                    value={'' + OtherInputs?.installmentAmount}
                    required={true}
                    error={OtherInputs?.Errors?.installmentAmount}
                    onChangeHandler={(event) => {
                      updateOtherInputs(event.target.name, event.target.value);
                    }}
                    leftIcon={<i className="fa-solid fa-list-ol"></i>}
                  />
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </MyDialogueView>
      </MyModal>

      <InstallmentCalculationDialog
        isLoanPaymentCalculationDialogueOpen={
          loanPaymentCalculationResponseStatus === 'success' ? true : false
        }
        result={loanPaymentCalculationResponseData}
        interestFor={loanDetailsData?.[0].Days}
        refundAmount={
          isOpenInstallment
            ? OtherInputs?.installmentAmount!
            : loanDetailsData?.[0].LoanRefundAmount!
        }
        closeDialogue={() => {
          updateOtherInputs(
            'installmentAmount',
            '' + loanDetailsData?.[0].LoanRefundAmount
          );
          setLoanPaymentCalculationResponseStatus(null);
          closeDialogue();
        }}
      />
    </>
  );
};

export default RepaymentConfirmationDialogue;
