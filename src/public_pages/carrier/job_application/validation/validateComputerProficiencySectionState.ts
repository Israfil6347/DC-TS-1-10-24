import { isEmpty } from 'global_shared/utils/validations';

export const validateComputerProficiencySectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'ComputerApplicationId':
      if (isEmpty(fieldValue)) {
        return 'Please select computer application.';
      }
      return '';
    case 'ExpertiseLevel':
      if (isEmpty(fieldValue)) {
        return 'Please select computer proficiency.';
      }
      return '';

    default:
      return '';
  }
};
