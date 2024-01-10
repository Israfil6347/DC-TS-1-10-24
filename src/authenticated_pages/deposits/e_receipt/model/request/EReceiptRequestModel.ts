import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class EReceiptRequestModel extends BaseRequestModel {
  fromDate: string;
  toDate: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.fromDate = "";
    this.toDate = "";
  }
}
