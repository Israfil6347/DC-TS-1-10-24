import { useState } from 'react';
import { validateInstantLoanApplication } from '../validation/validateInstantLoanApplication';

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

interface InstantLoanApplicationState {
  AppliedAmount: string;
  Errors: {
    AppliedAmount: '';
  };
}

const useInstantLoanApplicationState = () => {
  const [instantLoanApplicationState, setInstantLoanApplicationState] =
    useState<InstantLoanApplicationState>({
      AppliedAmount: '',
      Errors: {
        AppliedAmount: '',
      },
    });

  const updateInstantLoanApplicationState = (
    fieldName: string,
    fieldValue: any,
    loanAmount: number
  ) => {
    setInstantLoanApplicationState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateInstantLoanApplication(
            fieldName,
            fieldValue,
            loanAmount
          ),
        },
      };
    });
  };

  return {
    updateInstantLoanApplicationState,
    setInstantLoanApplicationState,
    instantLoanApplicationState,
  };
};

export default useInstantLoanApplicationState;
