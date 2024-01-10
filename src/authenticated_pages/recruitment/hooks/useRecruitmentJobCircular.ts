import { useState } from 'react';
import { RecruitmentJobCircularValidation } from '../utils/RecruitmentJobCircularValidation';

function useRecruitmentJobCircular() {
  const [recruitmentJobCircularState, setRecruitmentJobCircularState] =
    useState({
      JobPosition: '',
      OrganizationName: '',
      TotalNumberOfVacancy: '',
      JobContext: '',
      JobResponsibility: '',
      EmploymentStatus: '',
      EducationalRequirements: '',
      ExperienceRequirements: '',
      AdditionalRequirements: '',
      Religion: '',
      Age: '',
      Gender: '',
      JobLocation: '',
      Salary: '',
      CompensationAndOtherBenefits: '',
      ApplicationDeadline: '',
      ContactInfo: '',
      JobCircularStatus: '',
      errors: {
        JobPosition: '',
        OrganizationName: '',
        TotalNumberOfVacancy: '',
        JobContext: '',
        JobResponsibility: '',
        EmploymentStatus: '',
        EducationalRequirements: '',
        ExperienceRequirements: '',
        AdditionalRequirements: '',
        Religion: '',
        Age: '',
        Gender: '',
        JobLocation: '',
        Salary: '',
        CompensationAndOtherBenefits: '',
        ApplicationDeadline: '',
        ContactInfo: '',
      },
    });

  const updateRecruitmentJobCircularsRequestHandler = (
    fieldName: string,
    fieldValue: any
  ) => {
    setRecruitmentJobCircularState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        errors: {
          ...prevState.errors,
          [fieldName]: RecruitmentJobCircularValidation(fieldName, fieldValue),
        },
      };
    });
  };

  return {
    recruitmentJobCircularState,
    updateRecruitmentJobCircularsRequestHandler,
    setRecruitmentJobCircularState,
  };
}

export default useRecruitmentJobCircular;
