export interface IReferenceSectionState {
  ReferenceId: number;
  ReferenceUUId: string;
  ReferenceType: string;
  ReferenceName: string;
  Position: string;
  OrganizationName: string;
  MailingAddress: string;
  MobileNo: string;
  Email: string;
  Errors: {
    ReferenceId: string;
    ReferenceUUId: string;
    ReferenceType: string;
    ReferenceName: string;
    Position: string;
    OrganizationName: string;
    MailingAddress: string;
    MobileNo: string;
    Email: string;
  };
}
