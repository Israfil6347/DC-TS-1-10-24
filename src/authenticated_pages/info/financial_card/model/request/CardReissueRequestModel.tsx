import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class CardReissueRequestModel extends BaseRequestModel {
  NameOnCard: string | null;
  CardNumber: string | null;
  CardTypeCode: string | null;
  IsVirtual: boolean;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.NameOnCard = '';
    this.CardNumber = '';
    this.CardTypeCode = '';
    this.IsVirtual = false;
  }
}
