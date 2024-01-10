import { isEmpty } from 'global_shared/utils/validations';

export const validateProductLoanSelectedAccountState = (
  fieldName: string,
  fieldValue: any,
  eligibleAmount: number
) => {
  switch (fieldName) {
    case 'PartialApplyLoan':
      if (isEmpty(String(fieldValue))) {
        return 'Please enter valid amount';
      } else if (fieldValue <= 0) {
        return 'Please enter valid amount';
      } else if (fieldValue % 1000 !== 0) {
        return 'Amount must be multiplied by  1000 /-';
      } else if (fieldValue > 100000) {
        return 'Maximum loan amount is 1,00,000 ৳.';
      } else if (fieldValue > eligibleAmount) {
        return 'Loan amount exceeds eligible amount';
      } else if (parseInt(fieldValue) <= 0) {
        return 'Please enter valid amount';
      }
      return '';
    case 'NumberOfInstallment':
      if (fieldValue <= 0) {
        return 'Please select installment period.';
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
    default:
      return '';
  }
};
