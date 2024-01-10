import { useState } from 'react';
import { validateCardVerificationState } from '../validations/validateCardVerificationState';

export interface CardVerificationState {
  CardPIN: '';
  CardNo: '';
  CardAccount: '';
  Errors: {
    CardPIN: '';
    CardNo: '';
    CardAccount: '';
  };
}

export function useCardVerificationState() {
  const [cardVerificationState, setCardVerificationState] =
    useState<CardVerificationState>({
      CardPIN: '',
      CardNo: '',
      CardAccount: '',
      Errors: {
        CardPIN: '',
        CardNo: '',
        CardAccount: '',
      },
    });

  const updateCardVerificationState = (fieldName: string, fieldValue: any) => {
    setCardVerificationState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateCardVerificationState(fieldName, fieldValue),
        },
      };
    });
  };

  return {
    cardVerificationState,
    updateCardVerificationState,
  };
}
