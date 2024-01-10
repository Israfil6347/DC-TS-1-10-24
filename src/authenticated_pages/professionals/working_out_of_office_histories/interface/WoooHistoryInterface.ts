export interface IWoooDetails {
    EmployeeName: string;
    ApplicationDate: string;
    WoooType: string;
    FromDate: string;
    ToDate: string;
    RejoiningDate: string;
    Status: string;
    IsEditable: boolean;
}

export interface IWoooHistoryDetails {
    ApplicationDate: string;
    AppliedBy: number;
    BirthDistrictId: number;
    BranchName: string;
    ByMMS: boolean;
    ByUserId: number;
    ConfirmationDate: string;
    ContractPeriod: number;
    DateOfBirth: string;
    DepartmentName: string;
    DesignationName: string;
    EmployeeCode: string;
    EmployeeId: number;
    EmployeeName: string;
    EmployeeWoooId: number;
    FromDate: string;
    IsEditable: boolean;
    IsHourly: boolean;
    IsNotDetails: number;
    IsProbational: boolean;
    IsPunchRequired: boolean;
    IsSupervisorTreeWise: boolean;
    JoiningDate: string;
    OccupationId: number;
    OrganizationName: string;
    PersonId: number;
    PostingDate: string;
    Reason: string;
    Reference1: number;
    Reference2: number;
    RegisteredStatus: boolean;
    RejectedBy: number;
    RejoiningDate: string;
    ResignDate: string;
    RetiredDate: string;
    Status: string;
    SupervisorName: string;
    TerminationDate: string;
    ToDate: string;
    TotalDays: number;
    TotalHour: number;
    WoooType: string;
    WoooTypeCode: string;
    WoooTypeId: number;
    totalRecords: number;
}

export interface ISelectedWooo {
    WoooTypeCode: string;
    FromDate: string;
    ToDate: string;
    RejoiningDate: string;
    FromTime: string;
    ToTime: string;
    IsHourly: boolean;
    Reason: string;
    Status: string;
    EmployeeWoooId: number
}