import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { ICardVerifiable } from 'global_shared/model/request/ICardVerifiable';
import { IOTPVerifiable } from 'global_shared/model/request/IOTPVerifiable';

export class TransferRequestModel
  extends BaseRequestModel
  implements ICardVerifiable, IOTPVerifiable
{
  AccHolder: string;
  AccountNo: string;
  AccTransfer: string;
  AccType: string;
  Amount: number;
  CardNo: string;
  NameOnCard: string;
  SecretKey: string;
  TransferToAcc: string;
  OTPRegId: string;
  OTPValue: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccHolder = '';
    this.AccountNo = '';
    this.AccTransfer = '';
    this.AccType = '';
    this.Amount = 0;
    this.CardNo = '';
    this.NameOnCard = '';
    this.SecretKey = '';
    this.TransferToAcc = '';
    this.OTPRegId = '';
    this.OTPValue = '';
  }
}
