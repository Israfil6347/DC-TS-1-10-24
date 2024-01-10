import { LeaveApplicationRequestState } from 'authenticated_pages/professionals/leave_application/hooks/useLeaveApplicationRequestStates';
import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { LeaveApplicationRequestModel } from '../model/request/LeaveApplicationRequestModel';

export const assignLeaveDetailsModelValues = (
  leaveApplicationStates: LeaveApplicationRequestState,
  authUser: IAuthUserModel
) => {
  const leaveApplicationRequestModel = new LeaveApplicationRequestModel(
    authUser
  );

  leaveApplicationRequestModel.LeaveApplicationId =
    leaveApplicationStates.LeaveApplicationId;
  leaveApplicationRequestModel.LeaveTypeCode =
    leaveApplicationStates.LeaveTypeCode;
  leaveApplicationRequestModel.FromDate = leaveApplicationStates.FromDate;
  leaveApplicationRequestModel.ToDate = leaveApplicationStates.ToDate;
  leaveApplicationRequestModel.RejoiningDate =
    leaveApplicationStates.RejoiningDate;
  leaveApplicationRequestModel.FallbackEmployeeCode =
    leaveApplicationStates.FallbackEmployeeCode;
  leaveApplicationRequestModel.Remarks = leaveApplicationStates.Remarks;
  leaveApplicationRequestModel.LeaveStageRemarks =
    leaveApplicationStates.LeaveStageRemarks;

  return JSON.stringify(leaveApplicationRequestModel);
};
