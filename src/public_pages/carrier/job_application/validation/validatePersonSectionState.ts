import { isFutureDate } from 'global_shared/utils/dateUtils';
import {
  isEmpty,
  isLessThenMinimumLength,
  isNegativeNumber,
  isType,
  isValidEmail,
  isValidMobileNumber,
} from 'global_shared/utils/validations';

export const validatePersonSectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'ApplicantPhoto':
      if (isEmpty(fieldValue)) {
        return 'Must attach applicant photo.';
      }
      return '';
    case 'ApplicantFullName':
      if (isEmpty(fieldValue)) {
        return 'Applicant name is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Name should be at least 3 characters.';
      }
      return '';
    case 'FatherName':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return "Father's name should be at least 3 characters.";
        }
      }
      return '';
    case 'MotherName':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return "Mother's name should be at least 3 characters.";
        }
      }
      return '';
    case 'Gender':
      if (isEmpty(fieldValue)) {
        return 'Please select gender.';
      }
      return '';
    case 'NationalIdNumber':
      if (isNegativeNumber(fieldValue)) {
        return 'You can not enter negative value';
      }
      if (isType(fieldValue)) {
        return 'Appropriate NID format required';
      }
      return '';
    // case 'ETinNumber':
    //   if (isNegativeNumber(fieldValue)) {
    //     return 'You can not enter negative value';
    //   }
    //   return '';
    case 'DateOfBirth':
      if (isEmpty(fieldValue)) {
        return 'Please select date of birth.';
      }
      if (isFutureDate(fieldValue)) {
        return 'avoid selecting future date';
      }
      return '';
    case 'NationalityId':
      if (isEmpty(fieldValue)) {
        return 'Please select nationality.';
      }
      return '';
    case 'ReligionId':
      if (isEmpty(fieldValue)) {
        return 'Please select religion.';
      }
      return '';
    case 'SpouseName':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Spouse name should be at least 3 characters.';
        }
      }
      return '';
    case 'ApplicantEmergencyContactNumber':
      if (!isEmpty(fieldValue)) {
        if (!isValidMobileNumber(fieldValue)) {
          return 'Appropriate format required("Ex :+880-1000000000")';
        }
      }
      return '';
    case 'ApplicantEmergencyContactName':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Name should be at least 3 characters.';
        }
      }
      return '';
    case 'PresentAddress1':
      if (isEmpty(fieldValue)) {
        return 'House/Road/Street is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'House/Road/Street should be at least 3 characters.';
      }
      return '';
    case 'PresentAddress2':
      if (isEmpty(fieldValue)) {
        return 'Post Office is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Post Office should be at least 3 characters.';
      }
      return '';
    case 'PresentAddress3':
      if (isEmpty(fieldValue)) {
        return 'Please select police station.';
      }
      return '';
    case 'PresentAddress4':
      if (isEmpty(fieldValue)) {
        return 'Please select district.';
      }
      return '';
    case 'PresentAddress5':
      if (isEmpty(fieldValue)) {
        return 'Please select village.';
      }
      return '';

    case 'ApplicantCellNumber':
      if (isEmpty(fieldValue)) {
        return 'Cellphone is required.';
      }
      if (!isValidMobileNumber(fieldValue)) {
        return 'Appropriate format required("Ex :+880-1000000000").';
      }
      return '';
    case 'ApplicantWorkNumber':
      if (!isEmpty(fieldValue)) {
        if (!isValidMobileNumber(fieldValue)) {
          return 'Appropriate format required("Ex :+880-1000000000").';
        }
      }
      return '';
    case 'ApplicantHomeNumber':
      if (!isEmpty(fieldValue)) {
        if (!isValidMobileNumber(fieldValue)) {
          return 'Appropriate format required("Ex :+880-1000000000").';
        }
      }
      return '';
    case 'ApplicantPersonalEmail':
      if (isEmpty(fieldValue)) {
        // if (!isValidEmail(fieldValue)) {
        return 'Please enter personal email.';
      } else if (!isValidEmail(fieldValue)) {
        return 'Invalid email.';
      }
      return '';
    case 'ApplicantOfficialEmail':
      if (!isEmpty(fieldValue)) {
        if (!isValidEmail(fieldValue)) {
          return 'Invalid email.';
        }
      }
      return '';
    default:
      return '';
  }
};
