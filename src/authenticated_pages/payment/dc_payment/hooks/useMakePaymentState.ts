import { useState } from 'react';
import { validateMakePaymentState } from '../validation/validateMakePaymentState';

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

function useMakePaymentState() {
  const [makePaymentState, setMakePaymentState] = useState({
    ServiceName: '',
    Amount: '',
    Reference: '',
    CardNo: '',
    CardAccount: '',
    CardPIN: '',
    Errors: {
      ServiceName: '',
      Amount: '',
      Reference: '',
      CardPIN: '',
      CardNo: '',
      CardAccount: '',
    },
  });

  const updateMakePaymentState = (fieldName: string, fieldValue: any) => {
    setMakePaymentState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateMakePaymentState(fieldName, fieldValue),
        },
      };
    });
  };

  return {
    makePaymentState,
    updateMakePaymentState,
  };
}

export default useMakePaymentState;
