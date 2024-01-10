import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class IsBloodDonateRequestModel extends BaseRequestModel {
  IsBloodDonor: boolean;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.IsBloodDonor = false;
  }
}
