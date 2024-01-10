import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class VoucherDetailsRequestModel extends BaseRequestModel {
  VoucherId: number;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.VoucherId = 0;
  }
}
