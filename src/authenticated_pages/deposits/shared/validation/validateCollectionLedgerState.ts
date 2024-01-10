const { isEmpty } = require('global_shared/utils/validations');

export const validateCollectionLedgerState = (
  fieldName: string,
  fieldValue: any,
  collectionLedgerState: any
) => {
  switch (fieldName) {
    case 'Amount':
      if (isEmpty(String(fieldValue))) {
        return 'Please enter valid amount';
      } else if (parseInt(fieldValue) <= 0) {
        return 'Please enter valid amount';
      } else if (
        collectionLedgerState.IsMultiplier &&
        parseInt(fieldValue) %
          parseInt(collectionLedgerState?.MinimumDeposit) !==
          0
      ) {
        return (
          'Amount must be multiplied by ' +
          collectionLedgerState?.MinimumDeposit +
          '/-'
        );
      } else if (
        collectionLedgerState?.PlType !== 2 &&
        parseInt(fieldValue) < parseInt(collectionLedgerState?.MinimumDeposit)
      ) {
        return (
          'Minimum deposit amount ' + collectionLedgerState?.MinimumDeposit
        );
      }
      // else if (
      //   parseInt(fieldValue) > parseInt(collectionLedgerState?.LoanBalance)
      // ) {
      //   return 'Maximum deposit amount ' + collectionLedgerState?.LoanBalance;
      // }
      return '';
    default:
      return '';
  }
};
