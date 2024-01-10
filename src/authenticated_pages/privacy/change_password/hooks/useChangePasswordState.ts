import { useState } from 'react';
import { validateChangePasswordState } from '../validation/validateChangePasswordState';

export interface IChangePasswordStates {
  password: string;
  newpassword: string;
  confirmpassword: string;
  error: {
    password: string;
    newpassword: string;
    confirmpassword: string;
  };
}

function useChangePasswordState() {
  const [changePasswordStates, setChangePasswordStates] =
    useState<IChangePasswordStates>({
      password: '',
      newpassword: '',
      confirmpassword: '',
      error: {
        password: '',
        newpassword: '',
        confirmpassword: '',
      },
    });

  const updateChangePasswordState = (
    fieldName: keyof IChangePasswordStates,
    fieldValue: string
  ) => {
    setChangePasswordStates((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        error: {
          ...prevState.error,
          [fieldName]: validateChangePasswordState(fieldName, fieldValue),
        },
      };
    });
  };

  return {
    updateChangePasswordState,
    changePasswordStates,
  };
}

export default useChangePasswordState;
