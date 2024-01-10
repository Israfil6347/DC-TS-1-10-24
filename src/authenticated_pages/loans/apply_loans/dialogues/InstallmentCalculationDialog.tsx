import MyModal from 'global_shared/components/MyModal';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { Size } from 'global_shared/enum/Size';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import { ChangeEvent } from 'react';

interface InstallmentCalculationDialogProps {
  isLoanPaymentCalculationDialogueOpen: boolean;
  closeDialogue: () => void;
  result: any;
  interestFor: any;
  refundAmount: number;
}

const InstallmentCalculationDialog: React.FC<
  InstallmentCalculationDialogProps
> = ({
  isLoanPaymentCalculationDialogueOpen,
  closeDialogue,
  result,
  interestFor,
  refundAmount,
}) => {
  return (
    <>
      <MyModal
        size={Size.Small}
        show={isLoanPaymentCalculationDialogueOpen}
        onClose={() => closeDialogue()}
      >
        <MyDialogueView
          onCancel={() => closeDialogue()}
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
                Calculation Result
              </p>
            </div>
          }
          dialogueFooter={
            <div className="sticky bottom-0 flex items-center justify-center gap-4 bg-background p-6 md:px-14 md:py-8">
              <button
                className="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                onClick={() => {
                  closeDialogue();
                }}
              >
                Ok
              </button>
            </div>
          }
        >
          <div className="grid grid-cols-1 space-y-2 p-6 md:px-14">
            <div className="">
              <MyTextInput
                label="Installment Amount"
                name="Remarks"
                value={'' + formatToTkSymbolMoney(refundAmount)}
                inputType="text"
                disabled={true}
                required={false}
                onChangeHandler={(event) => {}}
                leftIcon={<i className="fa-solid fa-bangladeshi-taka-sign"></i>}
              />
            </div>
            {interestFor > 1 ? (
              <div className="">
                <MyTextInput
                  label="Interest For"
                  name="InterestFor"
                  value={interestFor + ' Days'}
                  inputType="text"
                  disabled={true}
                  required={false}
                  onChangeHandler={function (
                    event: ChangeEvent<HTMLInputElement>
                  ): void {
                    throw new Error('Function not implemented.');
                  }}
                  leftIcon={<i className="fa-solid fa-calendar-days"></i>}
                />
              </div>
            ) : (
              ''
            )}

            <div className="">
              <MyTextInput
                label="Interest Amount"
                name="InterestAmount"
                value={'' + formatToTkSymbolMoney(result?.[0]?.InterestAmount)}
                inputType="text"
                disabled={true}
                required={false}
                onChangeHandler={function (
                  event: ChangeEvent<HTMLInputElement>
                ): void {
                  throw new Error('Function not implemented.');
                }}
                leftIcon={<i className="fa-solid fa-percent"></i>}
              />
            </div>
            {result?.[0]?.LoanLpsAmount > 1 ? (
              <div className="">
                <MyTextInput
                  label="Loan Protection Scheme"
                  name="Remarks"
                  inputType="text"
                  value={'' + formatToTkSymbolMoney(result?.[0]?.LoanLpsAmount)}
                  disabled={true}
                  required={false}
                  onChangeHandler={(event) => {}}
                  leftIcon={<i className="fa-solid fa-user-shield"></i>}
                />
              </div>
            ) : (
              ''
            )}

            {result?.[0]?.LoanLpsRenewFeeAmount > 1 ? (
              <div className="">
                <MyTextInput
                  label="LPSRF"
                  name="Remarks"
                  value={
                    '' +
                    formatToTkSymbolMoney(result?.[0]?.LoanLpsRenewFeeAmount)
                  }
                  inputType="text"
                  disabled={true}
                  required={false}
                  onChangeHandler={(event) => {}}
                  leftIcon={<i className="fa-solid fa-user-shield"></i>}
                />
              </div>
            ) : (
              ''
            )}
            {result?.[0]?.LoanFine ? (
              <div className="">
                <MyTextInput
                  label="Loan Fine"
                  name="Remarks"
                  inputType="text"
                  value={'' + formatToTkSymbolMoney(result?.[0]?.LoanFine)}
                  disabled={true}
                  required={false}
                  onChangeHandler={function (
                    event: ChangeEvent<HTMLInputElement>
                  ): void {
                    throw new Error('Function not implemented.');
                  }}
                  leftIcon={<i className="fa-solid fa-skull-crossbones"></i>}
                />
              </div>
            ) : (
              ''
            )}
            {result?.[0]?.ShareFine ? (
              <div className="">
                <MyTextInput
                  label="Share Fine"
                  name="Remarks"
                  inputType="text"
                  disabled={true}
                  value={'' + formatToTkSymbolMoney(result?.[0]?.ShareFine)}
                  required={false}
                  onChangeHandler={(event) => {}}
                  leftIcon={<i className="fa-solid fa-skull-crossbones"></i>}
                />
              </div>
            ) : (
              ''
            )}
          </div>
        </MyDialogueView>
      </MyModal>
    </>
  );
};

export default InstallmentCalculationDialog;
