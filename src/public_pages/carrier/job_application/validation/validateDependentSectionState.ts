import {
  isEmpty,
  isLessThenMinimumLength,
  isNumberBetween,
  isNumeric,
} from 'global_shared/utils/validations';

export const validateDependentSectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'DependentName':
      if (isEmpty(fieldValue)) {
        return 'Dependent name is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Dependent name should be at least 3 characters.';
      }
      return '';
    case 'DependentAge':
      if (!isNumeric(fieldValue)) {
        return 'Dependent age is must be number.';
      }
      if (!isNumberBetween(fieldValue, 1, 100)) {
        return 'Dependent age must be 1-100.';
      }

      return '';
    case 'ApplicantHomeNumber':
      if (!isEmpty(fieldValue)) {
        if (!isNumeric(fieldValue)) {
          return 'Invalid age.';
        }
        if (!isNumberBetween(fieldValue, 1, 100)) {
          return 'Invalid age.';
        }
      }
      return '';
    case 'DependentRelationshipId':
      if (isEmpty(fieldValue)) {
        return 'Please select dependent relationship.';
      }
      return '';

    default:
      return '';
  }
};
