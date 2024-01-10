import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class GetAccountOpeningEligibilityRequestModel extends BaseRequestModel {
  AccountHolderPersonId: number;
  AccountTypeCode: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountHolderPersonId = 0;
    this.AccountTypeCode = '';
  }
}
