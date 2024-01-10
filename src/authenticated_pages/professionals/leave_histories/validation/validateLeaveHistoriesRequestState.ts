import { isEmpty } from "global_shared/utils/validations";

export const validateLeaveHistoriesRequestState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case "ToDate":
      if (isEmpty(fieldValue)) {
        return "Please enter  your Commend";
      }
      return "";
    case "FromDate":
      if (isEmpty(fieldValue)) {
        return "Please enter  your Commend";
      }
      return "";
    default:
      return "";
  }
};
