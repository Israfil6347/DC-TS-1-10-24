import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class GetPolicyRequestModel extends BaseRequestModel {
  AccountModuleCode: string;
  ApplicationName: string;
  ContentName: string;
  Application: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountModuleCode = '';
    this.ApplicationName = '';
    this.ContentName = '';
    this.Application = '';
  }
}
