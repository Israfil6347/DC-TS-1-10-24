import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class AccountInfoRequestModel extends BaseRequestModel {
  IsOnlineApplicable: boolean;
  ProductType: number;
  ProductCode: string;
  RolePermissionId: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.IsOnlineApplicable = false;
    this.ProductType = 0;
    this.ProductCode = '';
    this.RolePermissionId = '';
  }
}
