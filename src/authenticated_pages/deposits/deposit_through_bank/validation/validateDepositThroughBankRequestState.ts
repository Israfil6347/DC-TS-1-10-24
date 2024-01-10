const { isEmpty } = require('global_shared/utils/validations');

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  07 July 2023
 *========================================================================**/
export const validateDepositThroughBankRequestState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'SentAmount':
      if (isEmpty(fieldValue)) {
        return 'Please enter valid amount';
      } else if (parseInt(fieldValue) <= 0) {
        return 'Please enter valid amount';
      }
      return '';
    case 'TransactionReceipt':
      if (isEmpty(fieldValue)) {
        return 'Please enter transaction receipt';
      }
      return '';
    case 'TransactionNumber':
      if (isEmpty(fieldValue)) {
        return 'Please enter transaction number';
      }
      return '';
    case 'BankName':
      if (isEmpty(fieldValue)) {
        return 'Please select a bank';
      }
      return '';
    // case 'DepositDate':
    //   if (isEmpty(fieldValue)) {
    //     return 'Please enter a date';
    //   }
    //   return '';
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
    case 'SearchAccount':
      if (isEmpty(fieldValue)) {
        return 'Please enter account number';
      }
      return '';
    default:
      return '';
  }
};
