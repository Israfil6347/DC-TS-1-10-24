import { isEmpty } from 'global_shared/utils/validations';

export const validateSearchAccountState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'AccountNumber':
      if (isEmpty(fieldValue)) {
        return 'Please enter account number';
      }
      return '';
    default:
      return '';
  }
};
