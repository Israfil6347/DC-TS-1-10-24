import { LeaveApplicationRequestState } from "authenticated_pages/professionals/leave_application/hooks/useLeaveApplicationRequestStates";
import { useState } from "react";
import { validateLeaveUpdateRequest } from "../utils/validateLeaveUpdateRequest";
import { LeaveBalanceModel } from "authenticated_pages/professionals/shared/model/data/LeaveBalanceModel";

function useLeaveApplicationUpdateRequestStates() {
  const [
    leaveApplicationUpdateRequestState,
    setLeaveApplicationUpdateRequestState,
  ] = useState<LeaveApplicationRequestState>({
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

  const updateLeaveApplicationUpdateRequestState = (
    fieldName: string,
    fieldValue: any,
    leavePolicy: LeaveBalanceModel
  ) => {
    setLeaveApplicationUpdateRequestState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateLeaveUpdateRequest(
            fieldName,
            fieldValue,
            leavePolicy
          ),
        },
      };
    });
  };

  return {
    leaveApplicationUpdateRequestState,
    updateLeaveApplicationUpdateRequestState,
    setLeaveApplicationUpdateRequestState,
  };
}

export default useLeaveApplicationUpdateRequestStates;
