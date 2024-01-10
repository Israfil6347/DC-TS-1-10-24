import { useState } from 'react';
import { validatePhoneVerificationState } from '../validation/validatePhoneVerificationState';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  03 July 2023
 *========================================================================**/
function usePhoneVerificationState() {
  const [phoneVerificationInputState, setPhoneVerificationInputState] =
    useState({
      MobileNumber: '',
      errors: {
        MobileNumber: '',
      },
    });

  const updatePhoneVerificationState = (fieldName: string, fieldValue: any) => {
    setPhoneVerificationInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: validatePhoneVerificationState(fieldName, fieldValue),
        },
      };
    });
  };
  return { phoneVerificationInputState, updatePhoneVerificationState };
}

export default usePhoneVerificationState;
