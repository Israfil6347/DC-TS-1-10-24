import uuid from 'react-uuid';

export class TrainingRequestModel {
  TrainingId = uuid();
  TrainingTitle = '';
  TrainingDetails = '';
  InstituteName = '';
  DurationFrom = '';
  DurationTo = '';
  ValidityDate = '';
}
