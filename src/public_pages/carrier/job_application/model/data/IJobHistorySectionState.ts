export interface IJobHistorySectionState {
  JobHistoryId: number;
  JobHistoryUUId: string;
  OrganizationName: string;
  OrganizationAddress: string;
  Position: string;
  DurationFrom: string;
  DurationTo: string;
  Responsibilities: string;
  ReasonForLeaving: string;
  NoOfEmployeeSupervisedByYou: string;
  Salary: string;
  Errors: {
    JobHistoryId: string;
    JobHistoryUUId: string;
    OrganizationName: string;
    OrganizationAddress: string;
    Position: string;
    DurationFrom: string;
    DurationTo: string;
    Responsibilities: string;
    ReasonForLeaving: string;
    NoOfEmployeeSupervisedByYou: string;
    Salary: string;
  };
}
