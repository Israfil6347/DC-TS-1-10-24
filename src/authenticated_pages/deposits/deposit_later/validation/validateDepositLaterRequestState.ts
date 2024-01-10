import { isPastDate } from 'global_shared/utils/dateUtils';
import { isEmpty } from 'global_shared/utils/validations';

export const validateDepositLaterRequestState = (
  fieldName: string,
  fieldValue: any,
  scheduleForNextMonth: boolean = false
) => {
  if (scheduleForNextMonth) {
    switch (fieldName) {
      case 'RepeatMonths':
        if (isEmpty(fieldValue)) {
          return 'Please select repeated month';
        }
        return '';
      case 'DepositLaterDate':
        if (isEmpty(fieldValue)) {
          return 'Please select monthly deposit day';
        }
        return '';
      case 'DepositDate':
        if (isEmpty(fieldValue)) {
          return 'Please select current months deposit date';
        }
        if (isPastDate(fieldValue)) {
          return 'You can not select past date';
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
      case 'SearchAccount':
        if (isEmpty(fieldValue)) {
          return 'Please enter account number';
        }
        return '';
      default:
        return '';
    }
  } else {
    switch (fieldName) {
      case 'DepositDate':
        if (isEmpty(fieldValue)) {
          return 'Please select current months deposit date';
        }
        if (isPastDate(fieldValue)) {
          return 'You can not select past date';
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
      case 'SearchAccount':
        if (isEmpty(fieldValue)) {
          return 'Please enter account number';
        }
        return '';
      default:
        return '';
    }
  }
};
