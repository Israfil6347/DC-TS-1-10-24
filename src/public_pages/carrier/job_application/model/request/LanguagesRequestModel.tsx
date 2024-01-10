import uuid from 'react-uuid';

export class LanguagesRequestModel {
  LanguageProficiencyId = uuid();
  LanguageName = '';
  ReadingProficiency = '';
  WritingProficiency = '';
  SpeakingProficiency = '';
}
