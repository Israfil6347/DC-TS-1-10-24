import { useState } from 'react';
import { validateOTPValidationViewInputState } from '../validation/validateOTPValidationViewInputState';

function useOTPValidationViewInputState() {
  const [otpValidationViewInputState, setOTPValidationInputState] = useState({
    OTPValue: '',
    errors: {
      OTPValue: '',
    },
  });

  const updateOTPValidationViewInputState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setOTPValidationInputState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: validateOTPValidationViewInputState(
            fieldName,
            fieldValue
          ),
        },
      };
    });
  };

  return { otpValidationViewInputState, updateOTPValidationViewInputState };
}

export default useOTPValidationViewInputState;
