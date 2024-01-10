import {
  isEmpty,
  isLessThenMinimumLength,
  isPasswordStrong,
  isValidEmail,
} from 'global_shared/utils/validations';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  03 July 2023
 *========================================================================**/
export const changePasswordValidation = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'userName':
      if (isEmpty(fieldValue)) {
        return 'Email is required';
      }
      if (!isValidEmail(fieldValue)) {
        return 'Email is not valid';
      }
      return '';
    case 'newPass':
      if (isEmpty(fieldValue)) {
        return 'Please enter New Password.';
      }
      if (isLessThenMinimumLength(fieldValue, 6)) {
        return 'Password should be at least 6 characters.';
      }
      if (!isPasswordStrong(fieldValue)) {
        return 'Please include at least one uppercase letter, one special character, and one number in your password.';
      }
      return '';
    default:
      return '';
  }
};
