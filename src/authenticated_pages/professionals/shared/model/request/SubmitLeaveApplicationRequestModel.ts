import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class SubmitLeaveApplicationRequestModel extends BaseRequestModel {
  CurrentStage: string;
  ApplicationDate: string;
  FromDate: string;
  ToDate: string;
  RejoiningDate: string;
  FallbackEmployeeCode: string;
  FallbackPersonName: string;
  Remarks: string;
  LeaveStageRemarks: string;
  FromTime: string;
  LeaveApplicationId: number;
  LeaveTypeCode: string;
  ToTime: string;
  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.CurrentStage = '';
    this.ApplicationDate = '';
    this.FromDate = '';
    this.ToDate = '';
    this.FromTime = '';
    this.RejoiningDate = '';
    this.FallbackEmployeeCode = '';
    this.FallbackPersonName = '';
    this.Remarks = '';
    this.LeaveStageRemarks = '';
    this.LeaveApplicationId = 0;
    this.LeaveTypeCode = '';
    this.ToTime = '';
  }
}
