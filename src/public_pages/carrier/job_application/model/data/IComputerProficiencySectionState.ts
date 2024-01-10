export interface IComputerProficiencySectionState {
  ComputerProficiencyId: number;
  ComputerProficiencyUUId: string;
  ComputerApplicationId: number;
  ExpertiseLevel: string;
  ComputerApplicationName: string;
  Errors: {
    ComputerProficiencyId: string;
    ComputerProficiencyUUId: string;
    ComputerApplicationId: string;
    ExpertiseLevel: string;
    ComputerApplicationName: string;
  };
}
