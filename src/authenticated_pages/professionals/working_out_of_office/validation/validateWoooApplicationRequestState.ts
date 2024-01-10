import { isEmpty } from 'global_shared/utils/validations';

export const validateWoooApplicationRequestState = (fieldName: string, fieldValue: string) => {
    switch (fieldName) {
        case 'WoooTypeCode':
            if (isEmpty(fieldValue)) {
                return 'Please select working out of office type';
            }
            return '';
        case 'RejoiningDate':
            if (isEmpty(fieldValue)) {
                return 'Rejoining date is required';
            }
            return '';
        case 'FromTime':
            if (isEmpty(fieldValue)) {
                return 'From time is required';
            }
            return '';
        case 'ToTime':
            if (isEmpty(fieldValue)) {
                return 'To time is required';
            }
            return '';
        case 'Reason':
            if (isEmpty(fieldValue)) {
                return 'Please enter your reason';
            }
            return '';
        case 'FromDate':
            if (isEmpty(fieldValue)) {
                return 'From date is required';
            }
            return '';
        case 'ToDate':
            if (isEmpty(fieldValue)) {
                return 'To date is required';
            }
            return '';

        default:
            return '';
    }
};
