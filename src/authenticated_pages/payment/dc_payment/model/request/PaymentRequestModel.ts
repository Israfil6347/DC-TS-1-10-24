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
 * @updatedOn      :  07 July 2023
 *========================================================================**/

export class PaymentRequestModel extends BaseRequestModel {
  AccHolder: string;
  AccNo: string;
  AccTransfer: string;
  AccType: string;
  AccountNo: string;
  AccountNumber: string;
  Amount: number;
  CardNo: string;
  SecretKey: string;
  NameOnCard: string;
  Remarks: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccHolder = '';
    this.AccNo = '';
    this.AccTransfer = '';
    this.AccType = '';
    this.AccountNo = '';
    this.AccountNumber = '';
    this.Amount = 0;
    this.CardNo = '';
    this.SecretKey = '';
    this.NameOnCard = '';
    this.Remarks = '';
  }
}
