import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class EmployeeLeaveRequestModel extends BaseRequestModel {
  LeaveTypeCode: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.LeaveTypeCode = "";
  }
}
