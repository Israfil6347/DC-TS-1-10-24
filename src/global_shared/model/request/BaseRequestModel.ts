import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';

export class BaseRequestModel {
  UserName: string;
  UID: number;
  ByUserId: number;
  PersonId: number;
  EmployeeCode: string;
  MobileNumber: string;
  MobileNo: string;
  RequestFrom: string = 'Web';
  RolePermissionId: string | null = '';

  constructor(authUser: IAuthUserModel) {
    this.ByUserId = authUser ? authUser.UserId : 0;
    this.UID = authUser ? authUser.UserId : 0;
    this.PersonId = !!authUser ? authUser.PersonId : 0;
    this.EmployeeCode = !!authUser ? authUser.EmployeeCode : '';
    this.MobileNumber = !!authUser ? authUser.RegMobile : '';
    this.MobileNo = !!authUser ? authUser.RegMobile : '';
    this.UserName = !!authUser ? authUser.Email : '';
    this.RolePermissionId = localStorage.getItem('rolePermissionIds');
  }
}
