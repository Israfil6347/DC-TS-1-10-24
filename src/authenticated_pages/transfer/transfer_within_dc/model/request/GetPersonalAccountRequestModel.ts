import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class GetPersonalAccountRequestModel extends BaseRequestModel {
  AccountModuleCode: string;
  ApplicationName: string;
  ContentName: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountModuleCode = "16";
    this.ApplicationName = "MFS";
    this.ContentName = "RealTime Deposit Notes";
  }
}
