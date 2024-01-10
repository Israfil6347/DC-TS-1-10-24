import { useState } from 'react';
import { changePasswordValidation } from '../validation/ValidateChangePasswordState';

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
function useUserPasswordResendRegisterState() {
  const [userPasswordResetViewInputState, setUserPasswordResetViewInputState] =
    useState({
      newPass: '',
      conPass: '',
      userName: '',
      error: {
        newPass: '',
        conPass: '',
        userName: '',
      },
    });

  const updateUserPasswordInputState = (fieldName: string, fieldValue: any) => {
    setUserPasswordResetViewInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        error: {
          ...prevState.error,
          [fieldName]: changePasswordValidation(fieldName, fieldValue),
        },
      };
    });
  };
  return { userPasswordResetViewInputState, updateUserPasswordInputState };
}

export default useUserPasswordResendRegisterState;
