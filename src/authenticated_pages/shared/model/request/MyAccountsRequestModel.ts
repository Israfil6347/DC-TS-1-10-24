import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class MyAccountsRequestModel extends BaseRequestModel {
  AccountModuleCode: string;
  ContentName: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountModuleCode = '16';
    this.ContentName = 'RealTime Deposit Notes';
  }
}
