import uuid from 'react-uuid';

export class JobHistoryRequestModel {
  JobHistoryId = uuid();
  OrganizationName = '';
  OrganizationAddress = '';
  Position = '';
  DurationFrom = '';
  DurationTo = '';
  Responsibilities = '';
  ReasonForLeaving = '';
  NoOfEmployeeSupervisedByYou = '';
  Salary = '';
}
