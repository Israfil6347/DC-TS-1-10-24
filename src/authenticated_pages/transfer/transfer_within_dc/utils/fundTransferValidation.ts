import {
  isAccountStartsWithTOrL,
  isEmpty,
} from 'global_shared/utils/validations';

export const fundTransferValidation = (fieldName: string, fieldValue: any) => {
  switch (fieldName) {
    case 'Amount':
      if (isEmpty(fieldValue)) {
        return 'Please enter valid amount';
      } else if (parseInt(fieldValue) <= 0) {
        return 'Please enter valid amount';
      } else if (parseInt(fieldValue) > 50000) {
        return 'Cannot transfer more than 50,000 Tk at a time';
      }
      return '';
    case 'TransferToAcc':
      if (isEmpty(fieldValue)) {
        return 'Please enter account number';
      }
      // if (fieldValue === ownAccNumber) {
      //   return "You can't transfer to your own account.";
      // }
      if (!isAccountStartsWithTOrL(fieldValue)) {
        return 'Account number must start with "T-" or "L-"';
      }
      return '';

    // case "CardPIN":
    //   if (isEmpty(fieldValue)) {
    //     return "Please enter PIN";
    //   }
    //   if (!isEmpty(fieldValue)) {
    //     if (fieldValue.length !== 4) {
    //       return `PIN must be four digit`;
    //     }
    //   }
    //   return "";
    // case "CardAccount":
    //   if (isEmpty(fieldValue)) {
    //     return "Please select card account";
    //   }
    //   return "";
    // case "CardNo":
    //   if (isEmpty(fieldValue)) {
    //     return "Please select a card";
    //   }
    //   return "";
    case 'RecipientName':
      if (isEmpty(fieldValue)) {
        return 'Please select recipient name';
      }
      return '';
    default:
      return '';
  }
};
