import { AuthUserModel } from 'authentication/login/model/data/AuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class UpdateWoooRequestModel extends BaseRequestModel {
    FromDate: string;
    ToDate: string;
    RejoiningDate: string;
    Reason: string;
    WoooTypeCode: string;
    isHourly: boolean;
    EmployeeWoooId: number;

    constructor(authUser: AuthUserModel) {
        super(authUser);

        this.FromDate = ''
        this.ToDate = ''
        this.RejoiningDate = ''
        this.Reason = ''
        this.FromDate = ''
        this.WoooTypeCode = ''
        this.isHourly = true
        this.EmployeeWoooId = 0
    }
}
