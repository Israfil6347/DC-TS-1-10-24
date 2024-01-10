import { isNegativeNumber } from "global_shared/utils/validations";
import { LeaveBalanceModel } from "../model/data/LeaveBalanceModel";

export const validateTotalLeaveDays = (
  totalLeaveDays: number,
  leavePolicy: LeaveBalanceModel
) => {
  if (isNegativeNumber(totalLeaveDays)) {
    return "Selected date are invalid";
  }

  if (leavePolicy?.WithTime) {
    if (totalLeaveDays > leavePolicy?.MaximumHourLeave) {
      return `You can't take ${leavePolicy?.LeaveType} more then ${leavePolicy?.MaximumHourLeave} minutes.`;
    }
  } else {
    if (totalLeaveDays > leavePolicy?.MaxLeaveAtATime) {
      return `You can't apply more then ${leavePolicy?.MaxLeaveAtATime} leave at a time.`;
    }
  }
  return "";
};
