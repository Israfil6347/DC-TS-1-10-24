import {
  isEmpty,
  isLessThenMinimumLength,
  isValidEmail,
} from 'global_shared/utils/validations';

export const validateLoginViewInputState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'userName':
      if (isEmpty(fieldValue)) {
        return 'User name or email is required';
      }
      if (!isValidEmail(fieldValue)) {
        return 'Appropriate format required';
      }
      return '';
    case 'userPass':
      if (isEmpty(fieldValue)) {
        return 'Password is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Password should be at least 6 characters.';
      }
      return '';
    default:
      return '';
  }
};
