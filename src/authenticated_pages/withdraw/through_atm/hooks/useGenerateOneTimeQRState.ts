import { useState } from 'react';
import { validateGenerateOneTimeQRState } from '../validation/validateGenerateOneTimeQRState';

export interface GenerateOneTimeQRState {
  Amount: string;
  Errors: {
    Amount: string;
  };
}

function useGenerateOneTimeQRState() {
  const [generateOneTimeQRState, setGenerateOneTimeQRState] =
    useState<GenerateOneTimeQRState>({
      Amount: '',
      Errors: {
        Amount: '',
      },
    });
  const updateGenerateOneTimeQRState = (fieldName: string, fieldValue: any) => {
    setGenerateOneTimeQRState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateGenerateOneTimeQRState(fieldName, fieldValue),
        },
      };
    });
  };
  return { generateOneTimeQRState, updateGenerateOneTimeQRState };
}

export default useGenerateOneTimeQRState;
