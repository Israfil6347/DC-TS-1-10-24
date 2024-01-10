import { MenuModel } from './MenuModel';

export class LoginResponseModel {
  userid: number = 0;
  UserName: string = '';
  UserPicture: string = '';
  loginemail: string = '';
  Address: string = '';
  RegMobile: string = '';
  RoleId: string = '';
  RoleName: string = '';
  WebPortalMenuList: MenuModel[] = [];
  personid: number = 0;
  EmployeeCode: string = '';
}
