import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

interface AccountHolders {
  AccountHolderId: number;
  IsOrganization: boolean;
  SavingsACNumber: string;
  MembershipNumber: string;
}
interface Nominees {
  PersonId?: number;
  NomineePercentage?: number;
}

interface AccountOperators {
  AccountHolderId: number;
  AccountOperatorId: number;
}

interface Introducers {}

export class SubmitSchemeDepositRequestModel extends BaseRequestModel {
  DMSProductCode: string;
  BranchCode: string;
  AccountFor: number;
  AccountName: string;
  InterestRate: number;
  Duration: number;
  InstallmentAmount: number;
  TxnAccountNumber: string;
  AccountNo: string;
  ApplicationNo: string;
  InterestPostingAccount: string;
  CardNo: string;
  NameOnCard: string;
  SecretKey: string | undefined;
  OTPRegId: string;
  OTPValue: string;
  Introducers: Introducers[];
  AccountHolders: AccountHolders[];
  Nominees: Nominees[];
  AccountOperators: AccountOperators[];

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.DMSProductCode = '';
    this.BranchCode = '';
    this.InterestRate = 0;
    this.AccountFor = 0;
    this.AccountName = '';
    this.Duration = 0;
    this.InstallmentAmount = 0;
    this.TxnAccountNumber = '';
    this.InterestPostingAccount = '';
    this.CardNo = '';
    this.NameOnCard = '';
    this.AccountNo = '';
    this.SecretKey = '';
    this.OTPRegId = '';
    this.OTPValue = '';
    this.ApplicationNo = '';
    this.AccountHolders = [];
    this.Nominees = [];
    this.AccountOperators = [];
    this.Introducers = [];
  }
}
