import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class SearchAccountHolderRequestModel extends BaseRequestModel {
  AccountNo: string;
  SearchText: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountNo = '';
    this.SearchText = '';
  }
}
