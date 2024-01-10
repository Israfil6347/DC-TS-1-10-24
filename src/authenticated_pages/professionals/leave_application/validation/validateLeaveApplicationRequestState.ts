import { LeaveBalanceModel } from "authenticated_pages/professionals/shared/model/data/LeaveBalanceModel";
import { isFutureDate, isPastDate } from "global_shared/utils/dateUtils";
import { isEmpty, isNumeric } from "global_shared/utils/validations";
import moment from "moment";

export const validateLeaveApplicationRequestState = (
  fieldName: string,
  fieldValue: any,
  leavePolicy: LeaveBalanceModel
) => {
  switch (fieldName) {
    case "LeaveTypeCode":
      if (isEmpty(fieldValue)) {
        return "Please select leave type.";
      }
      return "";
    case "FallbackEmployeeCode":
      if (leavePolicy.IsFallbackRequired) {
        if (isEmpty(fieldValue)) {
          return "Please enter fallback employee ID.";
        } else {
          if (!isNumeric(fieldValue)) {
            return "Invalid employee ID";
          } else {
            return "";
          }
        }
      }
      return "";
    case "FromDate":
      if (isEmpty(fieldValue)) {
        return "From date is required";
      }

      if (!leavePolicy.EnableFutureDateApplication) {
        if (isFutureDate(fieldValue)) {
          return "You can not select future date";
        }
      }

      if (!leavePolicy.EnablePastDateApplication) {
        if (isPastDate(fieldValue)) {
          return "You can not select past date";
        }
        if (
          moment(fieldValue).isSameOrBefore(
            moment().add(leavePolicy.ApplyBeforeDays - 1, "days")
          )
        ) {
          return `Your can't apply ${leavePolicy.LeaveType} before ${moment()
            .add(leavePolicy.ApplyBeforeDays, "days")
            .format("DD MMM, YYYY")}`;
        }
      }
      return "";
    case "RejoiningDate":
      if (leavePolicy.IsRejoinDateRequired) {
        if (isEmpty(fieldValue)) {
          return "Rejoining date is required";
        }
        return "";
      }
      return "";
    case "ToTime":
      if (leavePolicy.WithTime) {
        if (isEmpty(fieldValue)) {
          return "To time is required";
        } else {
          return "";
        }
      }
      return "";
    case "FromTime":
      if (leavePolicy.WithTime) {
        if (isEmpty(fieldValue)) {
          return "From time is required";
        } else {
          return "";
        }
      }
      return "";
    case "Remarks":
      if (isEmpty(fieldValue)) {
        return "Please enter your reason for taking leave";
      }
      return "";
    default:
      return "";
  }
};
