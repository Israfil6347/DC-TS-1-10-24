import { useState } from 'react';
import { validateWoooApplicationRequestState } from '../validation/validateWoooApplicationRequestState';

export interface WoooApplicationRequestState {
  WoooTypeCode: '';
  FromDate: '';
  ToDate: '';
  FromTime: '';
  ToTime: '';
  RejoiningDate: '';
  Reason: '';
  IsHourly: true;
  Errors: {
    WoooTypeCode: '';
    RejoiningDate: '';
    FromTime: '';
    ToTime: '';
    Reason: '';
    FromDate: '';
    ToDate: '';
    IsHourly: '';
  };
}

const useWoooApplicationRequestStates = () => {
  const [woooApplicationRequestStates, setWoooApplicationRequestStates] =
    useState<WoooApplicationRequestState>({
      WoooTypeCode: '',
      FromDate: '',
      ToDate: '',
      FromTime: '',
      ToTime: '',
      RejoiningDate: '',
      Reason: '',
      IsHourly: true,
      Errors: {
        WoooTypeCode: '',
        RejoiningDate: '',
        FromTime: '',
        ToTime: '',
        Reason: '',
        FromDate: '',
        ToDate: '',
        IsHourly: '',
      },
    });

  const updateWoooApplicationRequestState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setWoooApplicationRequestStates((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState?.Errors,
          [fieldName]: validateWoooApplicationRequestState(
            fieldName,
            fieldValue
          ),
        },
      };
    });
  };

  return {
    woooApplicationRequestStates,
    updateWoooApplicationRequestState,
    setWoooApplicationRequestStates,
  };
};

export default useWoooApplicationRequestStates;
