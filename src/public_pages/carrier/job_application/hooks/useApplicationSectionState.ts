import { useState } from 'react';
import { IApplicationSectionState } from '../model/data/IApplicationSectionState';
import { validateApplicationSectionState } from '../validation/validateApplicationSectionState';

function useApplicationSectionState() {
  const [applicationSectionState, setApplicationSectionState] =
    useState<IApplicationSectionState>({
      JobCircularId: '',
      EmploymentStatus: '',
      NoticePeriod: '',
      ExpectedSalary: '',
      AttachedResume: '',
      CoverLetter: '',
      JobApplicationStatusId: 1,
      Remarks: '',
      DeclaredInformationAreCorrect: false,
      Errors: {
        JobCircularId: '',
        EmploymentStatus: '',
        NoticePeriod: '',
        ExpectedSalary: '',
        AttachedResume: '',
        CoverLetter: '',
        JobApplicationStatusId: '',
        Remarks: '',
        DeclaredInformationAreCorrect: '',
      },
    });

  const updateApplicationSectionState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setApplicationSectionState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateApplicationSectionState(fieldName, fieldValue),
        },
      };
    });
  };

  return {
    applicationSectionState,
    updateApplicationSectionState,
    setApplicationSectionState,
  };
}

export default useApplicationSectionState;
