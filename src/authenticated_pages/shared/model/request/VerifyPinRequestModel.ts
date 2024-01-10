import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class VerifyPinRequestModel extends BaseRequestModel {
  CardNo: string;
  Amount: number;
  SecretKey: string;
  AccountNo: string;
  NameOnCard: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.CardNo = '';
    this.Amount = 0;
    this.SecretKey = '';
    this.AccountNo = '';
    this.NameOnCard = '';
  }
}
