import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class SuretyGivenRequestModel extends BaseRequestModel {
  StartDate: string;
  EndDate: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.StartDate = '';
    this.EndDate = '';
  }
}
