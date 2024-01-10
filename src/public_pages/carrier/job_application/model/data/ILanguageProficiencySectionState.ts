export interface ILanguageProficiencySectionState {
  LanguageProficiencyId: number;
  LanguageProficiencyUUId: string;
  LanguageName: string;
  ReadingProficiency: string;
  WritingProficiency: string;
  SpeakingProficiency: string;
  Errors: {
    LanguageProficiencyId: string;
    LanguageProficiencyUUId: string;
    LanguageName: string;
    ReadingProficiency: string;
    WritingProficiency: string;
    SpeakingProficiency: string;
  };
}
