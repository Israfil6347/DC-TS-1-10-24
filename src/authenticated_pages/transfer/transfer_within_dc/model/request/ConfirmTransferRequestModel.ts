import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class ConfirmTransferRequestModel extends BaseRequestModel {
  AccNo: string;
  AccType: string;
  CardNo: string;
  NameOnCard: string;
  Amount: number;
  TransferToAcc: string;
  RecipientName: string;
  SecretKey: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccNo = "";
    this.AccType = "";
    this.CardNo = "";
    this.NameOnCard = "";
    this.Amount = 0;
    this.TransferToAcc = "";
    this.RecipientName = "";
    this.SecretKey = "";
  }
}
