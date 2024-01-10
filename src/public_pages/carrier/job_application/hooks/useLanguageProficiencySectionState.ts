import { useState } from 'react';
import uuid from 'react-uuid';
import { ILanguageProficiencySectionState } from '../model/data/ILanguageProficiencySectionState';
import { validateLanguageProficiencySectionState } from '../validation/validateLanguageProficiencySectionState';

function useLanguageProficiencySectionState() {
  const [languageProficiencySectionState, setLanguageProficiencySectionState] =
    useState<ILanguageProficiencySectionState[]>([]);

  // Begin Update Models
  const updateLanguageProficiencySectionState = (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => {
    languageProficiencySectionState[index] = {
      ...languageProficiencySectionState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...languageProficiencySectionState[index].Errors,
        [fieldName]: validateLanguageProficiencySectionState(
          fieldName,
          fieldValue
        ),
      },
    };
    setLanguageProficiencySectionState([...languageProficiencySectionState]);
  };
  // End Update Models

  // Begin Remove Models
  const removeLanguageProficiencySectionState = (id: string) => {
    const newLanguageProficiency = languageProficiencySectionState.filter(
      (item) => {
        return item.LanguageProficiencyUUId !== id;
      }
    );
    setLanguageProficiencySectionState(newLanguageProficiency);
  };
  // End Remove Models

  // Begin Add Models
  const addLanguageProficiencySectionState = () => {
    setLanguageProficiencySectionState((LanguageProficiency) => {
      return [
        ...LanguageProficiency,
        {
          LanguageProficiencyId: 0,
          LanguageProficiencyUUId: uuid(),
          LanguageName: '',
          ReadingProficiency: '',
          WritingProficiency: '',
          SpeakingProficiency: '',
          Errors: {
            LanguageProficiencyId: '',
            LanguageProficiencyUUId: '',
            LanguageName: '',
            ReadingProficiency: '',
            WritingProficiency: '',
            SpeakingProficiency: '',
          },
        },
      ];
    });
  };
  // End Add Models

  return {
    languageProficiencySectionState,
    updateLanguageProficiencySectionState,
    removeLanguageProficiencySectionState,
    addLanguageProficiencySectionState,
    setLanguageProficiencySectionState,
  };
}

export default useLanguageProficiencySectionState;
