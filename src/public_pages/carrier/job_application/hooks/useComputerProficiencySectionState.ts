import { useState } from 'react';
import uuid from 'react-uuid';
import { IComputerProficiencySectionState } from '../model/data/IComputerProficiencySectionState';
import { validateComputerProficiencySectionState } from '../validation/validateComputerProficiencySectionState';

function useComputerProficiencySectionState() {
  const [computerProficiencySectionState, setComputerProficiencySectionState] =
    useState<IComputerProficiencySectionState[]>([]);

  // Begin Update Models
  const updateComputerProficiencySectionState = (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => {
    computerProficiencySectionState[index] = {
      ...computerProficiencySectionState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...computerProficiencySectionState[index].Errors,
        [fieldName]: validateComputerProficiencySectionState(
          fieldName,
          fieldValue
        ),
      },
    };
    setComputerProficiencySectionState([...computerProficiencySectionState]);
  };
  // End Update Models

  // Begin Remove Models
  const removeComputerProficiencySectionState = (id: string) => {
    const newComputerProficiency = computerProficiencySectionState.filter(
      (item) => {
        return item.ComputerProficiencyUUId !== id;
      }
    );
    setComputerProficiencySectionState(newComputerProficiency);
  };
  // End Remove Models

  // Begin Add Models
  const addComputerProficiencySectionState = () => {
    setComputerProficiencySectionState((ComputerProficiency) => {
      return [
        ...ComputerProficiency,
        {
          ComputerProficiencyId: 0,
          ComputerProficiencyUUId: uuid(),
          ComputerApplicationId: 0,
          ExpertiseLevel: '',
          ComputerApplicationName: '',
          Errors: {
            ComputerProficiencyId: '',
            ComputerProficiencyUUId: '',
            ComputerApplicationId: '',
            ExpertiseLevel: '',
            ComputerApplicationName: '',
          },
        },
      ];
    });
  };
  // End Add Models

  return {
    computerProficiencySectionState,
    updateComputerProficiencySectionState,
    removeComputerProficiencySectionState,
    addComputerProficiencySectionState,
    setComputerProficiencySectionState,
  };
}

export default useComputerProficiencySectionState;
