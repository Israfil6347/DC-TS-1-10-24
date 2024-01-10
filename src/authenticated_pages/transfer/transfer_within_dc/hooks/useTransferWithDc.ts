import { useState } from 'react';
import { fundTransferValidation } from '../utils/fundTransferValidation';

function useTransferWithDc() {
  const [fundTransferRequestState, setFundTransferRequestState] = useState({
    Amount: '',
    TransferToAcc: '',
    RecipientName: '',

    Errors: {
      Amount: '',
      SecretKey: '',
      TransferToAcc: '',
      RecipientName: '',
    },
  });

  const updateFundTransferRequestState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setFundTransferRequestState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: fundTransferValidation(fieldName, fieldValue),
        },
      };
    });
  };

  const setSameAccountError = (fieldName: string, fieldValue: any) => {
    setFundTransferRequestState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          TransferToAcc: "You can't transfer to your own account.",
        },
      };
    });
  };

  return {
    setSameAccountError,
    updateFundTransferRequestState,
    fundTransferRequestState,
    setFundTransferRequestState,
  };
}

export default useTransferWithDc;
