import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class GetRelationshipTypesRequestModel extends BaseRequestModel {
  RelationTypeCode: string | undefined | null;
  Gender: string | undefined | null;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.RelationTypeCode = '';
    this.Gender = '';
  }
}
