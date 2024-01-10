import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class GetBKashServiceChargeRequestModel extends BaseRequestModel {
  TotalAmount: number;
  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.TotalAmount = 0;
  }
}
