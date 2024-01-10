import { getWordsCount } from 'global_shared/utils/textUtils';
import {
  isEmpty,
  isLessThenMinimumLength,
  isValidMobileNumber,
} from 'global_shared/utils/validations';

export const RecruitmentJobCircularValidation = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'jobLocation':
      if (isEmpty(fieldValue)) {
        return 'Job location cant be empty.';
      }
      return '';

    case 'educationalRequirement':
      if (isEmpty(fieldValue)) {
        return 'Job location cant be empty.';
      }
      return '';

    case 'experienceRequirements':
      if (isEmpty(fieldValue)) {
        return 'Job location cant be empty.';
      }
      return '';

    case 'additionalRequirements':
      if (isEmpty(fieldValue)) {
        return 'Job location cant be empty.';
      }
      return '';

    case 'jobPosition':
      if (isEmpty(fieldValue)) {
        return 'Job position name is required.';
      }
      return '';
    case 'organizationName':
      if (isEmpty(fieldValue)) {
        return 'organization name is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Name should be at least 3 characters.';
      }
      return '';
    case 'gender':
      if (isEmpty(fieldValue)) {
        return 'Please select gender.';
      }
      return '';
    case 'applicationDeadline':
      if (isEmpty(fieldValue)) {
        return 'Please select application Deadline.';
      }
      return '';
    case 'religion':
      if (isEmpty(fieldValue)) {
        return 'Please select religion.';
      }
      return '';
    case 'compensationAndOtherBenefits':
      if (!isEmpty(fieldValue)) {
        if (getWordsCount(fieldValue) > 100) {
          return `Maximum length exceeded.`;
        }
      }
      return '';
    case 'jobContext':
      if (!isEmpty(fieldValue)) {
        if (getWordsCount(fieldValue) > 100) {
          return `Maximum length exceeded.`;
        }
      }
      return '';
    case 'jobResponsibility':
      if (!isEmpty(fieldValue)) {
        if (getWordsCount(fieldValue) > 100) {
          return `Maximum length exceeded.`;
        }
      }
      return '';

    case 'salary':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 4)) {
          return 'Position be at least 4 characters.';
        }
      }
      return '';

    case 'totalNumberOfVacancy':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 1)) {
          return 'Should be 1 Vacancy.';
        }
      }
      return '';

    case 'age':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 1)) {
          return 'cant left empty.';
        }
      }
      return '';

    case 'contactInfo':
      if (!isEmpty(fieldValue)) {
        if (!isValidMobileNumber(fieldValue)) {
          return 'Appropriate format required("Ex :+880-1000000000").';
        }
      }
      return '';

    default:
      return '';
  }
};
