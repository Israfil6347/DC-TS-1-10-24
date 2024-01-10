import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class AttendanceRequestModel extends BaseRequestModel {
  FromDate: string;
  ToDate: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.FromDate = "";
    this.ToDate = "";
  }
}
