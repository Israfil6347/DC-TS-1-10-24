import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class LeaveApplicationRequestModel extends BaseRequestModel {
  LeaveApplicationId: number;
  LeaveTypeCode: string;
  FromDate: string;
  ToDate: string;
  RejoiningDate: string;
  FallbackEmployeeCode: string;
  Remarks: string;
  LeaveStageRemarks: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.LeaveApplicationId = 0;
    this.LeaveTypeCode = "";
    this.FromDate = "";
    this.ToDate = "";
    this.RejoiningDate = "";
    this.FallbackEmployeeCode = "";
    this.Remarks = "";
    this.LeaveStageRemarks = "";
  }
}
