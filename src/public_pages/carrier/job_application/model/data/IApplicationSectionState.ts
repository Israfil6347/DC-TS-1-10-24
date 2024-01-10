export interface IApplicationSectionState {
  JobCircularId: string;
  EmploymentStatus: string;
  NoticePeriod: string;
  ExpectedSalary: string;
  AttachedResume: string;
  CoverLetter: string;
  JobApplicationStatusId: number;
  Remarks: string;
  DeclaredInformationAreCorrect: boolean;
  Errors: {
    JobCircularId: string;
    EmploymentStatus: string;
    NoticePeriod: string;
    ExpectedSalary: string;
    AttachedResume: string;
    CoverLetter: string;
    JobApplicationStatusId: string;
    Remarks: string;
    DeclaredInformationAreCorrect: string;
  };
}
