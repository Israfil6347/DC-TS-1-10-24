import {
  isEmpty,
  isGreaterThenMaximumLength,
  isLessThenMinimumLength,
  isNumeric,
} from 'global_shared/utils/validations';

export const validateEducationalSectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'EducationalDegreeId':
      if (isEmpty(fieldValue)) {
        return 'Please select name of degree.';
      }
      return '';
    case 'PassingYear':
      if (isLessThenMinimumLength(fieldValue, 4)) {
        return 'PassingYear should be at least 4 Number.';
      }
      if (isGreaterThenMaximumLength(fieldValue, 4)) {
        return 'PassingYear should be at max 4 Number.';
      }
      if (!isNumeric(fieldValue)) {
        return 'invalid input.';
      }
      return '';
    case 'InstituteName':
      if (isEmpty(fieldValue)) {
        return 'Institute name  is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Institute name should be at least 3 characters.';
      }
      return '';

    default:
      return '';
  }
};
