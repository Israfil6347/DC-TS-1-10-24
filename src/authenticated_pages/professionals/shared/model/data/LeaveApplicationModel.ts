import { Paging } from 'global_shared/model/data/Paging';

export class LeaveApplicationModel {
  LeaveApplicationId: number = 0;
  LeaveType: string = '';
  ApplicationDate: string = '';
  FullName: string = '';
  FromDate: string = '';
  ToDate: string = '';
  RejoiningDate: string = '';
  TotalLeaveDays: number = 0;
  Remarks: string = '';
  SupervisorName: string = '';
  FallbackEmployeeCode: string = '';
  FallbackPersonName: string = '';
  CurrentStage: string = '';
  EmployeeName: string = '';
  DesignationName: string = '';
  DepartmentName: string = '';
  Paging: Paging = { totalRecords: 0, LastPage: 0, startRec: 0 };
}
