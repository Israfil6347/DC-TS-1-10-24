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
 * @updatedOn      :  07 July 2023
 *========================================================================**/

export class DepositThroughBankRequestModel extends BaseRequestModel {
  AccountHolderName;
  AccountId;
  AccountType;
  FromAccountNo;
  TransactionType;
  DepositDate;

  ScheduleDate;
  LedgerId;
  Remarks;
  RepeatMonths;
  ReferenceAccountNo;

  TransactionNumber;
  bankRoutingNumber;
  TransactionReceipt;

  TotalDepositAmount;
  TransactionMethod;
  TransactionModels: CollectionLedgerModel[];
  CardNo;
  SecretKey;
  AccountNo;
  NameOnCard;

  constructor(authUser: IAuthUserModel) {
    super(authUser);
    this.AccountHolderName = '';
    this.AccountId = 0;
    this.AccountType = '';
    this.FromAccountNo = '';
    this.TransactionType = '';
    this.DepositDate = '';

    this.ScheduleDate = '';
    this.LedgerId = 0;
    this.Remarks = '';
    this.RepeatMonths = 0;
    this.ReferenceAccountNo = '';

    this.TransactionNumber = '';
    this.bankRoutingNumber = '';
    this.TransactionReceipt = '';

    this.TotalDepositAmount = 0;
    this.TransactionMethod = '';
    this.TransactionModels = [];
    this.CardNo = '';
    this.SecretKey = '';
    this.AccountNo = '';
    this.NameOnCard = '';
  }
}
