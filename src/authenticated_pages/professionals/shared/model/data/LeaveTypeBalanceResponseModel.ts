import { LeaveBalanceModel } from "./LeaveBalanceModel";
import { LeaveTypeModel } from "./LeaveTypeModel";

export class LeaveTypeBalanceResponseModel {
  LeaveInfo: LeaveBalanceModel | null = null;
  LeaveSummary: LeaveTypeModel[] = [];
}
