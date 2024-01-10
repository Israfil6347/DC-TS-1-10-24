import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class GetDurationsRequestModel extends BaseRequestModel {
  ProductCode: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.ProductCode = '';
  }
}
