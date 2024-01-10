import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class ChangePasswordRequestModel extends BaseRequestModel {
  Password: string;
  NewPassword: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);

    this.Password = '';
    this.NewPassword = '';
  }
}
