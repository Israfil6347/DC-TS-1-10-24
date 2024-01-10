import { isFutureDate, isPastDate } from 'global_shared/utils/dateUtils';
import {
  isEmpty,
  isLessThenMinimumLength,
} from 'global_shared/utils/validations';

export const validateJobHistorySectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'OrganizationName':
      if (isEmpty(fieldValue)) {
        return 'Organization name is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Organization name should be at least 3 characters.';
      }
      return '';

    case 'OrganizationAddress':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 4)) {
          return 'Organization address should be at least 4 characters.';
        }
      }
      return '';
    case 'Position':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Position be at least 3 characters.';
        }
      }
      return '';
    case 'Salary':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 4)) {
          return 'Position be at least 4 characters.';
        }
      }
      return '';
    case 'DurationFrom':
      if (isEmpty(fieldValue)) {
        return 'Please select from date.';
      }
      // if (isFutureDate(fieldValue)) {
      //   return 'avoid selecting future date';
      // }
      return '';
    case 'DurationTo':
      if (!isEmpty(fieldValue)) {
        // if (isPastDate(fieldValue)) {
        //   return 'avoid selecting future date';
        // }
        return '';
      }

      return '';
    case 'ReasonForLeaving':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Reason for leaving  at least 3 characters.';
        }
      }
      return '';
    case 'NoOfEmployeeSupervisedByYou':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 1)) {
          return 'No Of employee supervised by you at least 1 number.';
        }
      }
      return '';
    case 'Responsibilities':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 20)) {
          return 'Write shorty about your Responsibilities.';
        }
      }
      return '';
    default:
      return '';
  }
};
