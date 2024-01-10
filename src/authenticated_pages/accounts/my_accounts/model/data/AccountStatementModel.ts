export class AccountStatementModel {
  TxnDate: string = '';
  Particulars: string = '';
  DepositAmount: number = 0;
  WithdrawAmount: number = 0;
  Balance: number = 0;
  AccountNo: string = '';
  AccountTypeName: string = '';
}
export class PersonDependentAccountModel {
  AccountHolderName: string = '';
  DependentPersonId: number = 0;
  AccountTypeName: string = '';
  AccountTypeShortName: string = '';
  DCAccountNo: string = '';
  IsDefaulter: boolean = false;
  LedgerId: number = 0;
  AccountId: number = 0;
  AccountNo: string = '';
}
