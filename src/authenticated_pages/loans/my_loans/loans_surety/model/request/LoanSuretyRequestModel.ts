import { IAuthUserModel } from "authentication/login/model/data/IAuthUserModel";
import { BaseRequestModel } from "global_shared/model/request/BaseRequestModel";

export class LoanSuretyRequestModel extends BaseRequestModel {
  LoanId: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.LoanId = "";
  }
}
