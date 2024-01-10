import { isEmpty } from 'global_shared/utils/validations';

export const validateChangePasswordState = (
  fieldName: string,
  fieldValue: string
) => {
  let caps, small, num, specialSymbol;
  switch (fieldName) {
    case 'password':
      if (isEmpty(fieldValue)) {
        return 'Please enter old password.';
      } else {
        return '';
      }
    case 'newpassword':
      if (isEmpty(fieldValue)) {
        return 'Please enter new password.';
      }
      if (fieldValue.length < 4) {
        return 'Password should contain minimum 4 characters, with one UPPERCASE, lowercase, number and special character: @$! % * ? &';
      } else {
        caps = (fieldValue.match(/[A-Z]/g) || []).length;
        small = (fieldValue.match(/[a-z]/g) || []).length;
        num = (fieldValue.match(/[0-9]/g) || []).length;
        specialSymbol = (fieldValue.match(/\W/g) || []).length;
        if (caps < 1) {
          return 'Must add one UPPERCASE letter';
        } else if (small < 1) {
          return 'Must add one lowercase letter';
        } else if (num < 1) {
          return 'Must add one number';
        } else if (specialSymbol < 1) {
          return 'Must add one special symbol: @$! % * ? & #';
        }
      }
      return '';
    default:
      return '';
  }
};
