import { IAuthUserModel, IMenu } from './IAuthUserModel';

export class AuthUserModel implements IAuthUserModel {
  UserId: number = 0;
  UserName: string = '';
  UserPicture: string = '';
  Email: string = '';
  Address: string = '';
  RegMobile: string = '';
  RoleId: string = '';
  RoleName: string = '';
  WebPortalMenuList: IMenu[] = [];
  PersonId: number = 0;
  EmployeeCode: string = '';
  RolePermissionIds: string = '';
}
