import { isPastDate } from 'global_shared/utils/dateUtils';
import {
  isEmpty,
  isLessThenMinimumLength,
} from 'global_shared/utils/validations';

export const validateTrainingSectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'TrainingTitle':
      if (isEmpty(fieldValue)) {
        return 'Training title is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Training title should be at least 3 characters.';
      }
      return '';
    case 'InstituteName':
      if (isEmpty(fieldValue)) {
        return 'Institute name is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Institute name should be at least 3 characters.';
      }
      return '';
    case 'DurationFrom':
      if (isEmpty(fieldValue)) {
        return 'Please select from date.';
      }
      // if (isPastDate(fieldValue)) {
      //   return 'avoid selecting future date';
      // }
      return '';
    // case 'DurationTo':
    //   if (isEmpty(fieldValue)) {
    //     return 'Please select to date.';
    //   }
    //   if (isPastDate(fieldValue)) {
    //     return 'avoid selecting future date';
    //   }
    //   return '';

    // case 'ValidityDate':
    //   if (compareDates(fieldValue)) {
    //     return 'avoid selecting future date';
    //   }
    //   return '';
    default:
      return '';
  }
};
