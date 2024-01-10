export interface IMenu {
  MenuId: number;
  ParentMenuId: number;
  MenuName: string;
  Icon: string;
  Sort: number;
  MfsIcon: string;
  RolePermissionIds: string;
}

export interface IAuthUserModel {
  UserId: number;
  UserName: string;
  UserPicture: string;
  Email: string;
  Address: string;
  RegMobile: string;
  RoleId: string;
  RoleName: string;
  WebPortalMenuList: IMenu[];
  PersonId: number;
  EmployeeCode: string;
  RolePermissionIds: string;
}
