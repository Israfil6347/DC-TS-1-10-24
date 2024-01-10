export interface IDependentSectionState {
  DependentId: number;
  DependentUUId: string;
  DependentName: string;
  DependentAge: string;
  DependentRelationshipId: number;
  DependentRelationshipNumber: string;
  DependentRelationName: string;
  Errors: {
    DependentUUId: string;
    DependentId: number;
    DependentName: string;
    DependentAge: string;
    DependentRelationshipId: string;
    DependentRelationName: string;
  };
}
