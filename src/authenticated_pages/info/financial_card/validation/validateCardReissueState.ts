import { isEmpty, isNumeric } from 'global_shared/utils/validations';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  05 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  05 July 2023
 *========================================================================**/
export const validateCardReissueState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'CardHolderName':
      if (isEmpty(fieldValue)) {
        return 'Please enter  Card Holder Name.';
      } else {
        if (isNumeric(fieldValue)) {
          return 'You enter valid Card Holder Name';
        } else {
          return '';
        }
      }
    case 'CardNumber':
      if (isEmpty(fieldValue)) {
        return 'Please enter  Card Holder Number.';
      } else {
        if (!isNumeric(fieldValue)) {
          return 'Please enter valid Card Number';
        } else {
          return '';
        }
      }
    default:
      return '';
  }
};
