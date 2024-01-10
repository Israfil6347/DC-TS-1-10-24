import { isPastDate } from 'global_shared/utils/dateUtils';
import {
  isEmpty,
  isLessThenMinimumLength,
  isValidMobileNumber,
} from 'global_shared/utils/validations';

export const validateOtherInfoSectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'OtherSkills':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Skills should be at least 3 characters.';
        }
      }
      return '';
    case 'Interests':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Interests should be at least 3 characters.';
        }
      }
      return '';
    case 'VolunteeredOrganizations':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Volunteered organization should be at least 3 characters.';
        }
      }
      return '';
    case 'DhakaCreditRelativeEmployeeName':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Employee name should be at least 3 characters.';
        }
      }
      return '';
    case 'DhakaCreditRelativeEmployeePosition':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Employee position should be at least 3 characters.';
        }
      }
      return '';
    case 'DhakaCreditRelativeEmployeeRelationshipId':
      if (!isEmpty(fieldValue)) {
        if (isEmpty(fieldValue)) {
          return 'Please select employee relationship.';
        }
      }
      return '';

    case 'DhakaCreditRelativeEmployeeContactNo':
      if (!isEmpty(fieldValue)) {
        console.log('not empty');
        // return 'Enter Valid Mobile Number';
        if (!isValidMobileNumber(fieldValue)) {
          console.log('not valid');
          return 'Appropriate format required("Ex :+880-1000000000")';
        }
        return '';
      }
      return '';
    case 'PreviouslyCalledForPosition':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Previous called for position should be at least 3 characters.';
        }
      }
      return '';
    case 'PreviouslyCalledForApplicationDate':
      if (!isEmpty(fieldValue)) {
        if (isEmpty(fieldValue)) {
          return 'Please select previous called application date.';
        }
        if (!isPastDate(fieldValue)) {
          return 'avoid selecting future date';
        }
      }

      return '';
    case 'DisabilityDetails':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Disability details should be at least 3 characters.';
        }
      }
      return '';
    case 'CrimeDetails':
      if (!isEmpty(fieldValue)) {
        if (isLessThenMinimumLength(fieldValue, 3)) {
          return 'Crime details should be at least 3 characters.';
        }
      }
      return '';

    default:
      return '';
  }
};
