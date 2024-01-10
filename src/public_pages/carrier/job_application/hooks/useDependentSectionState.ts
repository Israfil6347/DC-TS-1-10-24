import { useState } from 'react';
import uuid from 'react-uuid';
import { validateDependentSectionState } from '../validation/validateDependentSectionState';
import { IDependentSectionState } from '../model/data/IDependentSectionState';

function useDependentSectionState() {
  const [dependentSectionState, setDependentSectionState] = useState<
    IDependentSectionState[]
  >([]);

  // Begin Update Models
  const updateDependentSectionState = (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => {
    dependentSectionState[index] = {
      ...dependentSectionState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...dependentSectionState[index].Errors,
        [fieldName]: validateDependentSectionState(fieldName, fieldValue),
      },
    };
    setDependentSectionState([...dependentSectionState]);
  };
  // End Update Models

  // Begin Remove Models
  const removeDependentSectionState = (id: string) => {
    const newDependent = dependentSectionState.filter((item) => {
      return item.DependentUUId !== id;
    });
    setDependentSectionState(newDependent);
  };
  // End Remove Models

  // Begin Add Models
  const addDependentSectionState = () => {
    setDependentSectionState((Dependent) => {
      return [
        ...Dependent,
        {
          DependentId: 0,
          DependentUUId: uuid(),
          DependentName: '',
          DependentAge: '',
          DependentRelationshipId: 0,
          DependentRelationshipNumber: '',
          DependentRelationName: '',
          Errors: {
            DependentId: 0,
            DependentUUId: '',
            DependentName: '',
            DependentAge: '',
            DependentRelationshipId: '',
            DependentRelationName: '',
          },
        },
      ];
    });
  };
  // End Add Models

  return {
    dependentSectionState,
    updateDependentSectionState,
    removeDependentSectionState,
    addDependentSectionState,
    setDependentSectionState,
  };
}

export default useDependentSectionState;
