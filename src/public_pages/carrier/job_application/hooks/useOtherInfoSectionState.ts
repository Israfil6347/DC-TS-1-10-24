import { useState } from 'react';
import { IOtherInfoSectionState } from '../model/data/IOtherInfoSectionState';
import { validateOtherInfoSectionState } from '../validation/validateOtherInfoSectionState';

function useOtherInfoSectionState() {
  const [otherInfoSectionState, setOtherInfoSectionState] =
    useState<IOtherInfoSectionState>({
      OtherSkills: '',
      Interests: '',
      VolunteeredOrganizations: '',
      WillingToJoinAnyDepartmentOrServiceCenter: false,
      WillingToTransferAnyDepartmentOrServiceCenter: false,
      WillingToTravelAnyWhere: false,
      MemberOfDhakaCredit: false,
      DhakaCreditRelativeEmployeeName: '',
      DhakaCreditRelativeEmployeePosition: '',
      DhakaCreditRelativeEmployeeRelationshipId: 0,
      DhakaCreditRelativeEmployeeRelationshipName: '',
      DhakaCreditRelativeEmployeeContactNo: '',
      PreviouslyCalledForPosition: '',
      PreviouslyCalledForApplicationDate: '',
      AnyObjectionForMakingInquiriesOfYou: false,
      HaveAnyPhysicalOrMentalDisabilities: false,
      DisabilityDetails: '',
      EverConvictedCrime: false,
      CrimeDetails: '',
      Errors: {
        OtherSkills: '',
        Interests: '',
        VolunteeredOrganizations: '',
        WillingToJoinAnyDepartmentOrServiceCenter: '',
        WillingToTransferAnyDepartmentOrServiceCenter: '',
        WillingToTravelAnyWhere: '',
        MemberOfDhakaCredit: '',
        DhakaCreditRelativeEmployeeName: '',
        DhakaCreditRelativeEmployeePosition: '',
        DhakaCreditRelativeEmployeeRelationshipId: '',
        DhakaCreditRelativeEmployeeContactNo: '',
        PreviouslyCalledForPosition: '',
        PreviouslyCalledForApplicationDate: '',
        AnyObjectionForMakingInquiriesOfYou: '',
        HaveAnyPhysicalOrMentalDisabilities: '',
        DisabilityDetails: '',
        EverConvictedCrime: '',
        CrimeDetails: '',
      },
    });

  // Begin Update Models
  const updateOtherInfoSectionState = (fieldName: string, fieldValue: any) => {
    setOtherInfoSectionState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateOtherInfoSectionState(fieldName, fieldValue),
        },
      };
    });
  };
  // End Update Models

  return {
    otherInfoSectionState,
    updateOtherInfoSectionState,
    setOtherInfoSectionState,
  };
}

export default useOtherInfoSectionState;
