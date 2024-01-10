import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class FallbackApprovalRequestModel extends BaseRequestModel {
  LeaveApplicationId: number;
  Remarks: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.LeaveApplicationId = 0;
    this.Remarks = "";
  }
}
