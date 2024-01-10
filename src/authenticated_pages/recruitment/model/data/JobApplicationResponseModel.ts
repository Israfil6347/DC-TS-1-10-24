import { Paging } from "global_shared/model/data/Paging";
import { JobApplicationModel } from "./JobApplicationModel";

export class JobApplicationResponseModel {
  JobApplications: JobApplicationModel[] = [];
  Paging: Paging = { totalRecords: 0, LastPage: 0, startRec: 0 };
}
