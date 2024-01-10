const { isEmpty } = require("global_shared/utils/validations");

export const validateDepositNowRequestState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case "CardAccount":
      if (isEmpty(fieldValue)) {
        return "Please select card account";
      }
      return "";
    case "CardNo":
      if (isEmpty(fieldValue)) {
        return "Please select a card";
      }
      return "";
    case "CardPIN":
      if (isEmpty(fieldValue)) {
        return "Please enter PIN";
      }
      if (!isEmpty(fieldValue)) {
        if (fieldValue.length !== 4) {
          return `PIN must be four digit`;
        }
      }
      return "";
    case "SearchAccount":
      if (isEmpty(fieldValue)) {
        return "Please enter account number";
      }
      return "";
    default:
      return "";
  }
};
