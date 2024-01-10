export interface IEducationalSectionState {
  EducationId: number;
  EducationUUId: string;
  EducationLevelId: number;
  EducationLevelName: string;
  EducationalDegreeId: number;
  DegreeName: string;
  InstituteName: string;
  Major: string;
  EductionBoard: string;
  Result: string;
  ResultOutOf: string;
  PassingYear: string;
  EducationalDegreeName: string;
  Errors: {
    EducationId: number;
    EducationUUId: string;
    EducationLevelId: string;
    EducationalDegreeId: string;
    InstituteName: string;
    Major: string;
    EductionBoard: string;
    Result: string;
    ResultOutOf: string;
    PassingYear: string;
    EducationalDegreeName: string;
  };
}
