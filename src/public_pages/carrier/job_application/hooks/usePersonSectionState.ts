import { useState } from 'react';
import { IPersonSectionState } from '../model/data/IPersonSectionState';
import { validatePersonSectionState } from '../validation/validatePersonSectionState';

function usePersonSectionState() {
  const [personSectionState, setPersonSectionState] =
    useState<IPersonSectionState>({
      ApplicantId: 0,
      ApplicantPhoto: '',
      ApplicantFullName: '',
      FatherName: '',
      MotherName: '',
      Gender: '',
      NationalityId: 0,
      NationalityName: '',
      DateOfBirth: '',
      ReligionId: 0,
      ReligionName: '',
      NationalIdNumber: '',
      ETinNumber: '',
      PassportNumber: '',
      BloodGroup: '',
      ApplicantEmergencyContactNumber: '',
      ApplicantEmergencyContactName: '',
      ApplicantEmergencyContactRelationId: 0,
      ApplicantEmergencyContactRelationName: '',
      MaritalStatus: '',
      SpouseName: '',
      PresentAddress1: '',
      PresentAddress2: '',
      PresentDivisionId: 0,
      PresentDivisionName: '',
      PresentAddress3: 0,
      SubDistrictName: '',
      PresentAddress4: 0,
      PresentDistrictName: '',
      PresentAddress5: 0,
      PresentVillageName: '',
      PermanentAddress1: '',
      PermanentAddress2: '',
      PermanentDivisionId: 0,
      PermanentDivisionName: '',
      PermanentAddress3: 0,
      PermanentPoliceStation: '',
      PermanentAddress4: 0,
      PermanentDistrictName: 0,
      PermanentAddress5: 0,
      PermanentVillage: '',
      ApplicantPersonalEmail: '',
      ApplicantOfficialEmail: '',
      ApplicantCellNumber: '',
      ApplicantWorkNumber: '',
      ApplicantHomeNumber: '',
      ApplicantGender: '',
      ApplicantMaritalStatus: '',
      Errors: {
        ApplicantId: '',
        ApplicantPhoto: '',
        ApplicantFullName: '',
        FatherName: '',
        MotherName: '',
        Gender: '',
        NationalityId: '',
        DateOfBirth: '',
        ReligionId: '',
        NationalIdNumber: '',
        ETinNumber: '',
        PassportNumber: '',
        BloodGroup: '',
        ApplicantEmergencyContactNumber: '',
        ApplicantEmergencyContactName: '',
        ApplicantEmergencyContactRelationId: '',
        MaritalStatus: '',
        SpouseName: '',
        PresentAddress1: '',
        PresentAddress2: '',
        PresentDivision: '',
        PresentAddress3: '',
        PresentAddress4: '',
        PresentAddress5: '',
        PermanentAddress1: '',
        PermanentAddress2: '',
        PermanentDivision: '',
        PermanentAddress3: '',
        PermanentAddress4: '',
        PermanentAddress5: '',
        ApplicantPersonalEmail: '',
        ApplicantOfficialEmail: '',
        ApplicantCellNumber: '',
        ApplicantWorkNumber: '',
        ApplicantHomeNumber: '',
        ApplicantGender: '',
        ReligionName: '',
        NationalityName: '',
        ApplicantMaritalStatus: '',
        ApplicantEmergencyContactRelationName: '',
      },
    });

  // Begin Update Models
  const updatePersonSectionState = (fieldName: string, fieldValue: any) => {
    if (typeof fieldValue === 'object') {
      setPersonSectionState((prevState) => {
        return {
          ...prevState,
          [fieldName]: fieldValue,
          Errors: {
            ...prevState.Errors,

            [fieldName]: validatePersonSectionState(
              fieldName,
              fieldValue[fieldName]
            ),
          },
        };
      });
    } else {
      setPersonSectionState((prevState) => {
        return {
          ...prevState,
          [fieldName]: fieldValue,
          Errors: {
            ...prevState.Errors,

            [fieldName]: validatePersonSectionState(fieldName, fieldValue),
          },
        };
      });
    }
  };
  // End Update Models

  return {
    personSectionState,
    updatePersonSectionState,
    validatePersonSectionState,
    setPersonSectionState,
  };
}

export default usePersonSectionState;
