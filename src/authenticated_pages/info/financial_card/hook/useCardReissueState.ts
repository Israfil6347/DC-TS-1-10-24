import { useState } from 'react';
import { validateCardReissueState } from '../validation/validateCardReissueState';

function useCardReissueState() {
  const [cardReissueState, setCardReissueState] = useState({
    CardHolderName: '',
    CardNumber: '',
    IsVirtual: false,
    Errors: {
      CardHolderName: '',
      CardNumber: '',
      IsVirtual: '',
    },
  });

  const updateCardReissueState = (fieldName: string, fieldValue: any) => {
    setCardReissueState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateCardReissueState(fieldName, fieldValue),
        },
      };
    });
  };
  return { cardReissueState, updateCardReissueState };
}

export default useCardReissueState;
