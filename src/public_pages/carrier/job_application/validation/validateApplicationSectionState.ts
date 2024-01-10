import { getWordsCount } from 'global_shared/utils/textUtils';
import { isEmpty, isNumeric } from 'global_shared/utils/validations';

export const validateApplicationSectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'EmploymentStatus':
      if (isEmpty(fieldValue)) {
        return 'Please select your employment status.';
      }
      return '';
    case 'NoticePeriod':
      if (isEmpty(fieldValue)) {
        return 'Please enter your notice period.';
      }
      return '';
    case 'ExpectedSalary':
      if (!isEmpty(fieldValue)) {
        if (!isNumeric(fieldValue)) {
          return 'Invalid salary.';
        }
      }
      return '';
    case 'CoverLetter':
      if (!isEmpty(fieldValue)) {
        if (getWordsCount(fieldValue) > 100) {
          return `Maximum length exceeded.`;
        }
      }
      return '';
    case 'DeclareIfInformationAreCorrect':
      if (!fieldValue) {
        return 'You must be declare that the above-mentioned information correct.';
      }
      return '';
    default:
      return '';
  }
};
