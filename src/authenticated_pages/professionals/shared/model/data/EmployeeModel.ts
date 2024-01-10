import { NomineeModel } from "authenticated_pages/info/shared/model/data/NomineeModel";
import { PersonModel } from "authenticated_pages/info/shared/model/data/PersonModel";

export class EmployeeModel extends PersonModel {
  EmployeeId: number = 0;
  EmployeeMobile: string = "";
  EmployeeEmail: string = "";
  RfidCardNo: string = "";
  SupervisorName: string = "";
  EmployeeType: string = "";
  EmployeeCategoryName: string = "";
  DepartmentName: string = "";
  DesignationName: string = "";
  BranchName: string = "";
  JoiningDate: string = "";
  ResignDate: string = "";
  PostingDate: string = "";
  RetiredDate: string = "";
  TerminationDate: string = "";
  ConfirmationDate: string = "";
  ContractPeriod: number = 0;
  EmployeeStatus: string = "";
  EmployeeCode: string = "";
  Nominees: NomineeModel[] = [];
}
