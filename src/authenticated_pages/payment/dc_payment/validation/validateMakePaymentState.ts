import { isEmpty, isNegativeNumber } from 'global_shared/utils/validations';

export const validateMakePaymentState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'ServiceName':
      if (isEmpty(fieldValue)) {
        return 'Please enter service name';
      }
      return '';
    case 'Amount':
      if (isEmpty(fieldValue)) {
        return 'Please enter valid amount';
      }
      if (isNegativeNumber(fieldValue)) {
        return 'Please enter valid amount';
      }
      return '';
    case 'CardAccount':
      if (isEmpty(fieldValue)) {
        return 'Please select card account';
      }
      return '';
    case 'CardNo':
      if (isEmpty(fieldValue)) {
        return 'Please select a card';
      }
      return '';
    case 'CardPIN':
      if (isEmpty(fieldValue)) {
        return 'Please enter PIN';
      }
      if (!isEmpty(fieldValue)) {
        if (fieldValue.length !== 4) {
          return `PIN must be four digit`;
        }
      }
      return '';
    // case 'Reference':
    //   if (isEmpty(fieldValue)) {
    //     return 'Please enter reference';
    //   }
    //   return '';
    default:
      return '';
  }
};
