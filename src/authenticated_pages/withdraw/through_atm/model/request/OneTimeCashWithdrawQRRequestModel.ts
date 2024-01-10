import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { ICardVerifiable } from 'global_shared/model/request/ICardVerifiable';
import { IOTPVerifiable } from 'global_shared/model/request/IOTPVerifiable';

export class OneTimeCashWithdrawQRRequestModel
  extends BaseRequestModel
  implements ICardVerifiable, IOTPVerifiable
{
  CardNo: string;
  NameOnCard: string;
  SecretKey: string;
  AccountNo: string;
  OTPRegId: string;
  OTPValue: string;
  Amount: number;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.CardNo = '';
    this.NameOnCard = '';
    this.SecretKey = '';
    this.AccountNo = '';
    this.OTPRegId = '';
    this.OTPValue = '';
    this.Amount = 0;
  }
}
