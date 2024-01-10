export class CombinedCardModel {
  AccountNumber: string | null = '';
  AccountTypeName: string | null = '';
  AccountTypeCode: string | null = '';
  DCAccountNo: string | null = '';
  AccountId: number = 0;
  LedgerId: number = 0;
  Balance: number = 0;
  WithdrawableBalance = 0;
  CardNo: string | null = '';
  ExpiryDate: string | null = '';
  IsActiveCard: boolean = false;
  IsLockCard: boolean = false;
  NameOnCard: string | null = '';
}
