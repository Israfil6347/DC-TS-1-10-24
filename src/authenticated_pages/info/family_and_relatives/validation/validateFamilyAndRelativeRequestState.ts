import { isEmpty } from 'global_shared/utils/validations';

export const validateFamilyAndRelativeRequestState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'relativeSearch':
      if (isEmpty(fieldValue)) {
        return 'Please enter valid Number.';
      }
      return '';
    case 'RelationTypeCode':
      if (isEmpty(fieldValue)) {
        return 'Please Select Relation.';
      }
      return '';
    default:
      return '';
  }
};
