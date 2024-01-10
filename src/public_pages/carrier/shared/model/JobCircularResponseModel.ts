import { Paging } from "global_shared/model/data/Paging";
import { JobCircularModel } from "./JobCircularModel";

export class JobCircularResponseModel {
  JobCirculars: JobCircularModel[] = [];
  Paging: Paging = { totalRecords: 0, LastPage: 0, startRec: 0 };
}
