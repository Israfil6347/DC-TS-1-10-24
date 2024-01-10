import { isEmpty } from "global_shared/utils/validations";

export const validateEReceiptRequestState = (
  fieldName: string,
  fieldValue: string
) => {
  switch (fieldName) {
    case "FromDate":
      if (isEmpty(fieldValue)) {
        return "Please select from date";
      }
      return "";
    case "ToDate":
      if (isEmpty(fieldValue)) {
        return "Please select to date";
      }
      return "";
    default:
      return "";
  }
};
