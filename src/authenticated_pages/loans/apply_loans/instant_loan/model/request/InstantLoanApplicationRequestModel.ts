import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class InstantLoanApplicationRequestModel extends BaseRequestModel {
  ModuleCode: string;
  NameOnCard: string;
  SecretKey: string;
  CardNo: string;
  AccountNo: string;
  AppliedAmount: number;
  Amount: number;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.ModuleCode = '';
    this.NameOnCard = '';
    this.SecretKey = '';
    this.CardNo = '';
    this.AccountNo = '';
    this.AppliedAmount = 0;
    this.Amount = 0;
  }
}
