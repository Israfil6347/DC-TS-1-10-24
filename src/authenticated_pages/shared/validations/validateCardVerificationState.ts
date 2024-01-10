import { isEmpty } from 'global_shared/utils/validations';

export const validateCardVerificationState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'CardPIN':
      if (isEmpty(String(fieldValue))) {
        return 'Please enter enter card PIN';
      } else if (fieldValue.length !== 4) {
        return 'Card PIN must be 4 digits long';
      }
      return '';
    case 'CardNo':
      if (isEmpty(fieldValue)) {
        return 'Please select a card';
      }
      return '';
    case 'CardAccount':
      if (isEmpty(fieldValue)) {
        return 'Please select card account';
      }
      return '';
    default:
      return '';
  }
};
