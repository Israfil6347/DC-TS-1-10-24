import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class GetCollectionLedgersRequestModel extends BaseRequestModel {
  SearchText: string;
  AccountTypeCode: string;
  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.SearchText = '';
    this.AccountTypeCode = '';
  }
}
