import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  04 July 2023
 *========================================================================**/
export class RemoveBeneficiaryRequestModel extends BaseRequestModel {
  AccountNo: string | null;
  AccountHolderName: string | null;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountNo = '';
    this.AccountHolderName = '';
  }
}
