import {
  isEmpty,
  isLessThenMinimumLength,
} from 'global_shared/utils/validations';

export const validateLanguageProficiencySectionState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'LanguageName':
      if (isEmpty(fieldValue)) {
        return 'Organization name is required.';
      }
      if (isLessThenMinimumLength(fieldValue, 3)) {
        return 'Language name should be at least 3 characters.';
      }
      return '';
    case 'ReadingProficiency':
      if (isEmpty(fieldValue)) {
        return 'Reading proficiency is required.';
      }
      return '';
    case 'WritingProficiency':
      if (isEmpty(fieldValue)) {
        return 'Writing proficiency is required.';
      }
      return '';
    case 'SpeakingProficiency':
      if (isEmpty(fieldValue)) {
        return 'Writing proficiency is required.';
      }
      return '';

    default:
      return '';
  }
};
