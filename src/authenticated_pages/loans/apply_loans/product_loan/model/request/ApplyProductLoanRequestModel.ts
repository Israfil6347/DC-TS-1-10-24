import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

export class ApplyProductLoanRequestModel extends BaseRequestModel {
  CollateralAccounts: any;
  LoanProductCode: string;
  AccountNo: string;
  NameOnCard: string;
  MaximumLoanAmount: number;
  InterestRate: number;
  NumberOfInstallment: number;
  TotalApplyLoan: number;
  SecretKey: string;
  CardNo: string;
  Certificate: string;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.CollateralAccounts = [];
    this.LoanProductCode = '';
    this.AccountNo = '';
    this.NameOnCard = '';
    this.MaximumLoanAmount = 0;
    this.InterestRate = 0;
    this.NumberOfInstallment = 0;
    this.TotalApplyLoan = 0;
    this.SecretKey = '';
    this.CardNo = '';
    this.Certificate = '';
  }
}
