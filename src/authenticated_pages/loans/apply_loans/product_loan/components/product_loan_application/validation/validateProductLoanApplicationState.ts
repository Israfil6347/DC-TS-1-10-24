export const validateProductLoanApplicationState = (
  fieldName: string,
  fieldValue: any
) => {
  switch (fieldName) {
    case 'NumberOfInstallment':
      if (fieldValue <= 0) {
        return 'Please select installment period.';
      }
      return '';
    case 'AgreementAccept':
      if (fieldValue === false) {
        return 'You mast be accept Trams And condition.';
      }
      return '';
    default:
      return '';
  }
};
