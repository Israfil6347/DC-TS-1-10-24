import { isEmpty, isNumberBetween } from 'global_shared/utils/validations';

export const validateGenerateOneTimeQRState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'Amount':
      if (isEmpty(fieldValue)) {
        return 'Enter an amount';
      }

      if (parseFloat(fieldValue) % 500 !== 0) {
        return 'Amount must be multiplied by ' + 500 + '/-';
      }

      if (parseFloat(fieldValue) >= 500) {
        if (!isNumberBetween(parseFloat(fieldValue), 500, 20000)) {
          return 'Minimum withdraw amount is  20000 ';
        }
      }
      return '';

    default:
      return '';
  }
};
