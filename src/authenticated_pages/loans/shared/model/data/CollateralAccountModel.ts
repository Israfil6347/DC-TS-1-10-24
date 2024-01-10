export class CollateralAccountModel {
  AccountId: number = 0;
  AccountType: string = "";
  AccountNumber: string = "";
  TotalBalance: number = 0;
  LoanableBalance: number = 0;
  PartialApplyLoan: number = 0;
  IsEligible: boolean = false;
  WithdrawableBalance: number = 0;
  isSelected: boolean = false;
}
