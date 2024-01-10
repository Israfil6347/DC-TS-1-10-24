import { CollateralAccountModel } from "authenticated_pages/loans/shared/model/data/CollateralAccountModel";

export class CollateralAccountResponseModel {
  CollateralAccounts: CollateralAccountModel[] = [];
  MaximumLoanAmount: number = 0;
  InterestRate: number = 0;
  NumberOfInstallment: number = 0;
  TotalApplyLoan: number = 0;
}
