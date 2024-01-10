import { useState } from 'react';
import { validateLoginViewInputState } from '../validation/validateLoginViewInputState';

export interface LoginViewInputState {
  userName: string;
  userPass: string;
  errors: any;
  [key: string]: string;
}

function useLoginViewInputState() {
  const [loginViewInputState, setLoginViewInputState] = useState({
    userName: '',
    userPass: '',
    errors: {
      userName: '',
      userPass: '',
    },
  });

  const updateLoginViewInputState = (fieldName: string, fieldValue: any) => {
    setLoginViewInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: validateLoginViewInputState(fieldName, fieldValue),
        },
      };
    });
  };
  const resetLoginViewInputState = () => {
    setLoginViewInputState({
      userName: '',
      userPass: '',
      errors: {
        userName: '',
        userPass: '',
      },
    });
  };
  return {
    loginViewInputState,
    updateLoginViewInputState,
    resetLoginViewInputState,
  };
}

export default useLoginViewInputState;
