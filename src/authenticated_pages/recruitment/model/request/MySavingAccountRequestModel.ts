import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class MySavingAccountRequestModel extends BaseRequestModel {
  AccountModuleCode = "16";
  ApplicationName = "MFS";
  ContentName = "RealTime Deposit Notes";
  constructor(authUser: IAuthUserModel) {
    super(authUser);
  }
}
