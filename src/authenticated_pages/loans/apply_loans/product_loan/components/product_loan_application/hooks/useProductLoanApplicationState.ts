import { useState } from 'react';
import { validateProductLoanApplicationState } from '../validation/validateProductLoanApplicationState';

export interface ProductLoanApplicationState {
  NumberOfInstallment: number;
  Certificate: string;
  AgreementAccept: boolean;
  Errors: {
    NumberOfInstallment: string;
    Certificate: string;
    AgreementAccept: string;
  };
}

function useProductLoanApplicationState() {
  const [productLoanApplicationState, setProductLoanApplicationState] =
    useState<ProductLoanApplicationState>({
      NumberOfInstallment: 0,
      Certificate: '',
      AgreementAccept: false,
      Errors: {
        NumberOfInstallment: '',
        Certificate: '',
        AgreementAccept: '',
      },
    });

  const updateProductLoanApplicationState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setProductLoanApplicationState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateProductLoanApplicationState(
            fieldName,
            fieldValue
          ),
        },
      };
    });
  };

  return {
    productLoanApplicationState,
    updateProductLoanApplicationState,
  };
}

export default useProductLoanApplicationState;
