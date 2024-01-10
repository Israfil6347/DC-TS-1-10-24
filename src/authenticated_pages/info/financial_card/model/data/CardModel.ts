import { DepositAccountModel } from 'authenticated_pages/accounts/my_accounts/model/data/DepositAccountModel';

export class CardModel {
  CardsAccounts: DepositAccountModel[] = [];
  IsLocked: boolean = false;
  IsActive: boolean = false;
  Name: string | null = '';
  CardNo: string | null = '';
  CardType: string | null = '';
  ExpiryDate: string | null = '';
  IsVirtual: boolean = false;
  IsBlock: boolean = false;
  IsUsable: boolean = false;
  CardStageName: string | null = '';
}
