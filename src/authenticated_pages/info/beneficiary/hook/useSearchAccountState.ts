import { useState } from 'react';
import { validateSearchAccountState } from '../validation/validateSearchAccountState';

export interface SearchAccountState {
  AccountNumber: string;
  Errors: {
    AccountNumber: string;
  };
}

const initialSearchAccountState: SearchAccountState = {
  AccountNumber: '',
  Errors: {
    AccountNumber: '',
  },
};

function useSearchAccountState() {
  const [searchAccountState, setSearchAccountState] =
    useState<SearchAccountState>(initialSearchAccountState);

  const updateSearchTextRequestState = (fieldName: string, fieldValue: any) => {
    setSearchAccountState((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
      Errors: {
        ...prevState.Errors,
        [fieldName]: validateSearchAccountState(fieldName, fieldValue),
      },
    }));
  };

  const clearSearchAccountState = () => {
    setSearchAccountState(initialSearchAccountState);
  };

  return {
    updateSearchTextRequestState,
    searchAccountState,
    clearSearchAccountState,
  };
}

export default useSearchAccountState;
