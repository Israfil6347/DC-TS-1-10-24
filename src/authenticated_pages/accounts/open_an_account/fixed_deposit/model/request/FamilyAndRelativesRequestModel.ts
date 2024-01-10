import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class FamilyAndRelativesRequestModel extends BaseRequestModel {
  IncludeSelf: boolean;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.IncludeSelf = false;
  }
}
