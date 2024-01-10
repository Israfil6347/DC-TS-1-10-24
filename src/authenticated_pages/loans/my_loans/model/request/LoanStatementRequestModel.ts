import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class LoanStatementRequestModel extends BaseRequestModel {
  loanNo: string;
  StartDate: string;
  EndDate: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.loanNo = '';
    this.StartDate = '';
    this.EndDate = '';
  }
}
