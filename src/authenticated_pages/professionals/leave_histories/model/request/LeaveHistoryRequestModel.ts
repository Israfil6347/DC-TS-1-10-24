import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class LeaveHistoryRequestModel extends BaseRequestModel {
  ToDate: string;
  FromDate: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.ToDate = "";
    this.FromDate = "";
  }
}
