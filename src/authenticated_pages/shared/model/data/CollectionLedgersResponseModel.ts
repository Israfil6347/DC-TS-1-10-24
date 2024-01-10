import { AccountHolderModel } from "authenticated_pages/accounts/my_accounts/model/data/AccountHolderModel";
import { CollectionLedgerModel } from "./CollectionLedgerModel";

export class CollectionLedgersResponseModel {
  AccountInfoList: CollectionLedgerModel[] = [];
  AccountHolderInfo: AccountHolderModel[] = [];
}
