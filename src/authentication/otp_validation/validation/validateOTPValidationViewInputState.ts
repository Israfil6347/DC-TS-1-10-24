import { isEmpty } from 'global_shared/utils/validations';

export const validateOTPValidationViewInputState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'OTPValue':
      if (isEmpty(fieldValue)) {
        return 'Please Enter OTP ';
      } else if (fieldValue.length === 6) {
        return '';
      }
      return `OTP must be six digits long`;
    default:
      return '';
  }
};
