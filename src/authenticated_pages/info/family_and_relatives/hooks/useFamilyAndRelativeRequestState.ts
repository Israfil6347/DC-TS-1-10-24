import { useState } from 'react';
import { validateFamilyAndRelativeRequestState } from '../validation/validateFamilyAndRelativeRequestState';

export interface FamilyAndRelativeRequestState {
  RelationTypeCode: '';
  relativeSearch: '';
  RelationshipSupportingImage: '';
  Errors: {
    RelationTypeCode: '';
    RelationshipSupportingImage: '';
    relativeSearch: '';
  };
}

function useFamilyAndRelativeRequestState() {
  const [familyAndRelativeRequestState, setFamilyAndRelativeRequestState] =
    useState<FamilyAndRelativeRequestState>({
      RelationTypeCode: '',
      relativeSearch: '',
      RelationshipSupportingImage: '',
      Errors: {
        RelationTypeCode: '',
        RelationshipSupportingImage: '',
        relativeSearch: '',
      },
    });

  const updateFamilyAndRelativeRequestState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setFamilyAndRelativeRequestState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateFamilyAndRelativeRequestState(
            fieldName,
            fieldValue
          ),
        },
      };
    });
  };

  return {
    familyAndRelativeRequestState,
    updateFamilyAndRelativeRequestState,
    setFamilyAndRelativeRequestState,
  };
}

export default useFamilyAndRelativeRequestState;
