import { DepositRequestState } from 'authenticated_pages/deposits/shared/hooks/useDepositRequestState';
import { useState } from 'react';
import { validateDepositLaterRequestState } from '../validation/validateDepositLaterRequestState';
import moment from 'moment';

function useDepositLaterRequestState() {
  const initialDepositLaterRequestState: DepositRequestState = {
    SearchAccount: '',
    CardNo: '',
    CardAccount: '',
    CardPIN: '',
    DepositDate: moment(new Date(new Date().getTime() + 86400000)).format(),
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

  const [depositLaterRequestState, setDepositLaterRequestState] =
    useState<DepositRequestState>(initialDepositLaterRequestState);

  const updateDepositLaterRequestState = (
    fieldName: string,
    fieldValue: any,
    scheduleFromNextMonth: boolean = false
  ) => {
    setDepositLaterRequestState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateDepositLaterRequestState(
            fieldName,
            fieldValue,
            scheduleFromNextMonth
          ),
        },
      };
    });
  };

  const clearDepositLaterRequestState = () => {
    setDepositLaterRequestState(initialDepositLaterRequestState);
  };

  return {
    depositLaterRequestState,
    updateDepositLaterRequestState,
    clearDepositLaterRequestState,
  };
}

export default useDepositLaterRequestState;
