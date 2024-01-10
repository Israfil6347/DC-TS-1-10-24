import { isEmpty, isValidMobileNumber } from 'global_shared/utils/validations';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  03 July 2023
 *========================================================================**/
export const validatePhoneVerificationState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'MobileNumber':
      if (isEmpty(fieldValue)) {
        return 'Enter Valid Mobile Number';
      }
      if (!isValidMobileNumber(fieldValue)) {
        return 'Appropriate format required("Ex :+880-1000000000")';
      }
      return '';
    default:
      return '';
  }
};
