import {
  isEmpty,
  isLessThenMinimumLength,
  isValidEmail,
  isValidMobileNumber,
} from 'global_shared/utils/validations';

export const validateReferenceSectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'ReferenceName':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Reference name should be at least 3 characters.';
        }
      }
      return '';
    case 'Position':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Position name should be at least 3 characters.';
        }
      }
      return '';
    case 'OrganizationName':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Organization name should be at least 3 characters.';
        }
      }
      return '';
    case 'MailingAddress':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Mailing address should be at least 3 characters.';
        }
      }
      return '';
    case 'MobileNo':
      if (!isEmpty(fieldValue)) {
        if (!isValidMobileNumber(fieldValue)) {
          return 'Appropriate format required("Ex :+880-1000000000").';
        }
      }
      return '';
    case 'Email':
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
