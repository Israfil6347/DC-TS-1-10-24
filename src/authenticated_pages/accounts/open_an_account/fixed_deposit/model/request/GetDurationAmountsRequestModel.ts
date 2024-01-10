import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class GetDurationAmountsRequestModel extends BaseRequestModel {
  Duration: number;
  ProductCode: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.Duration = 0;
    this.ProductCode = '';
  }
}
