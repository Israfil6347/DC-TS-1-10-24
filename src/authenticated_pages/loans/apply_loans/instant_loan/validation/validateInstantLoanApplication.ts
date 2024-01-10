import { isEmpty } from 'global_shared/utils/validations';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  06 July 2023
 *========================================================================**/

export const validateInstantLoanApplication = (
  fieldName: string,
  fieldValue: any,
  loanAmount: number
) => {
  switch (fieldName) {
    case 'AppliedAmount':
      if (isEmpty(fieldValue)) {
        return 'Please enter amount.';
      } else if (parseInt(fieldValue) <= 0) {
        return 'Please enter valid amount';
      } else if (parseFloat(fieldValue) <= 10000) {
        if (parseFloat(fieldValue) % 5000 !== 0) {
          return 'Amount must be multiplied by   500  /-';
        } else if (parseFloat(fieldValue) <= loanAmount) {
          return '';
        }
      } else if (parseFloat(fieldValue) >= 10000) {
        if (parseFloat(fieldValue) % 1000 !== 0) {
          return 'Amount must be multiplied by ' + 1000 + '/-';
        } else if (parseFloat(fieldValue) <= loanAmount) {
          return '';
        }
      }
      return 'Amount must be less then ' + loanAmount + '/-';
    default:
      return '';
  }
};
