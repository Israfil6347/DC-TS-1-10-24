import { useState } from 'react';
import uuid from 'react-uuid';
import { IEducationalSectionState } from '../model/data/IEducationalSectionState';
import { validateEducationalSectionState } from '../validation/validateEducationalSectionState';

function useEducationalSectionState() {
  const [educationalSectionState, setEducationalSectionState] = useState<
    IEducationalSectionState[]
  >([]);

  // Begin Update Models
  const updateEducationalSectionState = (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => {
    educationalSectionState[index] = {
      ...educationalSectionState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...educationalSectionState[index].Errors,
        [fieldName]: validateEducationalSectionState(fieldName, fieldValue),
      },
    };
    setEducationalSectionState([...educationalSectionState]);
  };
  // End Update Models

  // Begin Remove Models
  const removeEducationalSectionState = (id: string) => {
    const newEducation = educationalSectionState.filter((item) => {
      return item.EducationUUId !== id;
    });
    setEducationalSectionState(newEducation);
  };
  // End Remove Models

  // Begin Add Models
  const addEducationalSectionState = () => {
    setEducationalSectionState((Education) => {
      return [
        ...Education,
        {
          EducationId: 0,
          EducationUUId: uuid(),
          EducationLevelId: 0,
          EducationLevelName: '',
          EducationalDegreeId: 0,
          DegreeName: '',
          InstituteName: '',
          Major: '',
          EductionBoard: '',
          Result: '',
          ResultOutOf: '',
          PassingYear: '',
          EducationalDegreeName: '',
          Errors: {
            EducationId: 0,
            EducationUUId: '',
            EducationLevelId: '',
            EducationalDegreeId: '',
            InstituteName: '',
            Major: '',
            EductionBoard: '',
            Result: '',
            ResultOutOf: '',
            PassingYear: '',
            EducationalDegreeName: '',
          },
        },
      ];
    });
  };
  // End Add Models

  return {
    educationalSectionState,
    updateEducationalSectionState,
    removeEducationalSectionState,
    addEducationalSectionState,
    setEducationalSectionState,
  };
}

export default useEducationalSectionState;
