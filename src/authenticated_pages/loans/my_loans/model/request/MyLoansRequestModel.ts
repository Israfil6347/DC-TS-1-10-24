import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class MyLoansRequestModel extends BaseRequestModel {
  loanNo: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.loanNo = "";
  }
}
