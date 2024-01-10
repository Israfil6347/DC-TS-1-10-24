import { LeaveApplicationRequestState } from "authenticated_pages/professionals/leave_application/hooks/useLeaveApplicationRequestStates";
import { useState } from "react";
import { validateFallbackApprovalRequestState } from "../validation/validateFallbackApprovalRequestState";

function useFallbackApprovalRequestStates() {
  const [fallbackApprovalRequestStates, setFallbackApprovalRequestStates] =
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

  const updateFallbackApprovalRequestStates = (
    fieldName: string,
    fieldValue: any
  ) => {
    setFallbackApprovalRequestStates((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState?.Errors,
          [fieldName]: validateFallbackApprovalRequestState(
            fieldName,
            fieldValue
          ),
        },
      };
    });
  };

  return {
    fallbackApprovalRequestStates,
    updateFallbackApprovalRequestStates,
    setFallbackApprovalRequestStates,
  };
}

export default useFallbackApprovalRequestStates;
