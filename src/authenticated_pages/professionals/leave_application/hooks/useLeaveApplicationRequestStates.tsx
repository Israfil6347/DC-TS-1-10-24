import { useState } from "react";
import { validateLeaveApplicationRequestState } from "../validation/validateLeaveApplicationRequestState";
import { LeaveBalanceModel } from "authenticated_pages/professionals/shared/model/data/LeaveBalanceModel";

export interface LeaveApplicationRequestState {
  LeaveApplicationId: 0;
  LeaveTypeCode: "";
  FallbackEmployeeCode: "";
  FallbackPersonName: "";
  FromDate: "";
  FromTime: "";
  ToDate: "";
  ToTime: "";
  RejoiningDate: "";
  Remarks: "";
  LeaveStageRemarks: "";
  CurrentStage: "";
  ApplicationDate: "";
  Errors: {
    LeaveApplicationId: "";
    LeaveTypeCode: "";
    FallbackEmployeeCode: "";
    FallbackPersonName: "";
    FromDate: "";
    FromTime: "";
    ToDate: "";
    ToTime: "";
    RejoiningDate: "";
    Remarks: "";
    LeaveStageRemarks: "";
    CurrentStage: "";
    ApplicationDate: "";
  };
}

function useLeaveApplicationRequestStates() {
  const [leaveApplicationRequestStates, setLeaveApplicationRequestStates] =
    useState<LeaveApplicationRequestState>({
      LeaveApplicationId: 0,
      LeaveTypeCode: "",
      FallbackEmployeeCode: "",
      FallbackPersonName: "",
      FromDate: "",
      FromTime: "",
      ToDate: "",
      ToTime: "",
      RejoiningDate: "",
      Remarks: "",
      LeaveStageRemarks: "",
      CurrentStage: "",
      ApplicationDate: "",
      Errors: {
        LeaveApplicationId: "",
        LeaveTypeCode: "",
        FallbackEmployeeCode: "",
        FallbackPersonName: "",
        FromDate: "",
        FromTime: "",
        ToDate: "",
        ToTime: "",
        RejoiningDate: "",
        Remarks: "",
        LeaveStageRemarks: "",
        CurrentStage: "",
        ApplicationDate: "",
      },
    });

  const updateLeaveApplicationRequestState = (
    fieldName: string,
    fieldValue: any,
    leavePolicy: LeaveBalanceModel
  ) => {
    setLeaveApplicationRequestStates((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState?.Errors,
          [fieldName]: validateLeaveApplicationRequestState(
            fieldName,
            fieldValue,
            leavePolicy
          ),
        },
      };
    });
  };

  return {
    leaveApplicationRequestStates,
    updateLeaveApplicationRequestState,
    setLeaveApplicationRequestStates,
  };
}

export default useLeaveApplicationRequestStates;
