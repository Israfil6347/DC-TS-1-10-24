import { DepositRequestState } from 'authenticated_pages/deposits/shared/hooks/useDepositRequestState';
import { useState } from 'react';
import { validateDepositThroughBankRequestState } from '../validation/validateDepositThroughBankRequestState';

function useDepositThroughBankRequestState() {
  const initialDepositThroughBankRequestState: DepositRequestState = {
    SearchAccount: '',
    CardNo: '',
    CardAccount: '',
    CardPIN: '',
    DepositDate: new Date(),
    DepositLaterDate: '',
    RepeatMonths: 0,
    BankName: '',
    BankAccountNumber: '',
    BankRoutingNumber: '',
    TransactionNumber: '',
    TransactionReceipt: '',
    SentAmount: 0,
    Errors: {
      SearchAccount: '',
      CardNo: '',
      CardAccount: '',
      CardPIN: '',
      DepositDate: '',
      DepositLaterDate: '',
      RepeatMonths: '',
      BankName: '',
      BankAccountNumber: '',
      BankRoutingNumber: '',
      TransactionNumber: '',
      TransactionReceipt: '',
      SentAmount: '',
    },
  };

  const [depositThroughBankRequestState, setDepositThroughBankRequestState] =
    useState<DepositRequestState>(initialDepositThroughBankRequestState);

  const updateDepositThroughBankRequestState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setDepositThroughBankRequestState((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
      Errors: {
        ...prevState.Errors,
        [fieldName]: validateDepositThroughBankRequestState(
          fieldName,
          fieldValue
        ),
      },
    }));
  };

  const clearDepositThroughBankRequestState = () => {
    setDepositThroughBankRequestState(initialDepositThroughBankRequestState);
  };

  return {
    depositThroughBankRequestState,
    updateDepositThroughBankRequestState,
    clearDepositThroughBankRequestState,
  };
}

export default useDepositThroughBankRequestState;
