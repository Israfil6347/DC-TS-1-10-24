import { useState } from 'react';
import { validateProductLoanSelectedAccountState } from '../validation/validateProductLoanSelectedAccountState';

export interface ProductLoanSelectedAccountState {
  AccountId: number;
  AccountType: string;
  AccountNumber: string;
  TotalBalance: number;
  LoanableBalance: number;
  PartialApplyLoan: number;
  IsEligible: boolean;
  WithdrawableBalance: number;
  isSelected: boolean;
  Errors: {
    AccountId: string;
    AccountType: string;
    AccountNumber: string;
    TotalBalance: string;
    LoanableBalance: string;
    PartialApplyLoan: string;
    IsEligible: string;
    WithdrawableBalance: string;
    isSelected: string;
  };
}

function useProductLoanSelectedAccountState() {
  const [
    productLoanSelectedAccountsState,
    setProductLoanSelectedAccountsState,
  ] = useState<ProductLoanSelectedAccountState[]>([]);

  const updateProductLoanSelectedAccountsState = (
    fieldName: string,
    fieldValue: any,
    eligibleAmount: number,
    index: number
  ) => {
    productLoanSelectedAccountsState[index] = {
      ...productLoanSelectedAccountsState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...productLoanSelectedAccountsState[index].Errors,
        [fieldName]: validateProductLoanSelectedAccountState(
          fieldName,
          fieldValue,
          eligibleAmount
        ),
      },
    };
    setProductLoanSelectedAccountsState([...productLoanSelectedAccountsState]);
  };

  return {
    productLoanSelectedAccountsState,
    setProductLoanSelectedAccountsState,
    updateProductLoanSelectedAccountsState,
  };
}

export default useProductLoanSelectedAccountState;
