import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class CardIssueRequestModel extends BaseRequestModel {
  cardTypeCode: string;
  WithCard: boolean;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.cardTypeCode = '';
    this.WithCard = false;
  }
}
