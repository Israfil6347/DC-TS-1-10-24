import { CollectionLedgerModel } from 'authenticated_pages/shared/model/data/CollectionLedgerModel';
import { IAuthUserModel } from 'authentication/login/model/data/IAuthUserModel';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  06 July 2023
 *========================================================================**/

export class DepositNowRequestModel extends BaseRequestModel {
  AccountHolderName: string;
  AccountId: number;
  AccountType: string;
  CardNo: string;
  DepositDate: string;
  FromAccountNo: string;
  AccountNo: string;
  LedgerId: number;
  Remarks: string;
  RepeatMonths: number;
  SecretKey: string;
  TotalDepositAmount: number;
  TransactionMethod: string;
  NameOnCard: string;
  TransactionModels: CollectionLedgerModel[];

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountHolderName = '';
    this.AccountId = 0;
    this.AccountType = '';
    this.CardNo = '';
    this.DepositDate = '';
    this.FromAccountNo = '';
    this.AccountNo = '';
    this.LedgerId = 0;
    this.Remarks = '';
    this.RepeatMonths = 0;
    this.SecretKey = '';
    this.TotalDepositAmount = 0;
    this.TransactionMethod = '';
    this.NameOnCard = '';
    this.TransactionModels = [];
  }
}
