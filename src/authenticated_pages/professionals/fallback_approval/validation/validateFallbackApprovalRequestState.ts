import { isEmpty } from "global_shared/utils/validations";

export const validateFallbackApprovalRequestState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case "LeaveStageRemarks":
      if (isEmpty(fieldValue)) {
        return "Please enter fallback acceptance remarks";
      }
      return "";

    default:
      return "";
  }
};
