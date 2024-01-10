import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class WoooHistoryRequestModel extends BaseRequestModel {
    FromDate: string;
    ToDate: string;
    EmployeeWoooId: number;
    IsSupervisorTreeWise: boolean;
    constructor(authUser: IAuthUserModel) {
        super(authUser);

        this.FromDate = ''
        this.ToDate = ''
        this.EmployeeWoooId = -1
        this.IsSupervisorTreeWise = false;
    }
}
