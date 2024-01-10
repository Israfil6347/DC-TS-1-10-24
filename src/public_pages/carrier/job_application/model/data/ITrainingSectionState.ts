export interface ITrainingSectionState {
  TrainingId: 0;
  TrainingUUId: string;
  TrainingTitle: string;
  TrainingDetails: string;
  InstituteName: string;
  DurationFrom: string;
  DurationTo: string;
  ValidityDate: string;
  Errors: {
    TrainingId: string;
    TrainingUUId: string;
    TrainingTitle: string;
    TrainingDetails: string;
    InstituteName: string;
    DurationFrom: string;
    DurationTo: string;
    ValidityDate: string;
  };
}
