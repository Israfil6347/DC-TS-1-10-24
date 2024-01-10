import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class WoooRequestModel extends BaseRequestModel {
    FromDate: string;
    ToDate: string;
    RejoiningDate: string;
    Reason: string;
    WoooTypeCode: string;
    isHourly: boolean;

    constructor(authUser: IAuthUserModel) {
        super(authUser);

        this.FromDate = ''
        this.ToDate = ''
        this.RejoiningDate = ''
        this.Reason = ''
        this.WoooTypeCode = ''
        this.isHourly = true;
    }
}
