import { CardModel } from 'authenticated_pages/info/financial_card/model/data/CardModel';
import { CombinedCardModel } from 'global_shared/model/data/CombinedCardModel';

// Todo : Need to review and find work around @newton
export class CardHandler {
  cardModel: CardModel[] = [];
  constructor(cardObj: CardModel[] | []) {
    this.cardModel = cardObj;
  }

  getHandledCard() {
    var cardModified: CombinedCardModel[] = [];
    this.cardModel?.forEach((element, index) => {
      cardModified.push({
        AccountNumber: element?.CardsAccounts[index]?.AccountNumber,
        AccountTypeName: element?.CardsAccounts[index]?.AccountTypeName,
        AccountTypeCode: element?.CardsAccounts[index]?.AccountTypeCode,
        DCAccountNo: element?.CardsAccounts[index]?.DCAccountNo,
        AccountId: element?.CardsAccounts[index]?.AccountId,
        LedgerId: element?.CardsAccounts[index]?.LedgerId,
        Balance: element?.CardsAccounts[index]?.Balance,
        WithdrawableBalance: element?.CardsAccounts[index]?.WithdrawableBalance,
        CardNo: element?.CardNo!,
        ExpiryDate: element?.ExpiryDate!,
        IsActiveCard: element?.IsActive,
        IsLockCard: element?.IsBlock,
        NameOnCard: element?.Name!,
      });
    });
    return cardModified;
  }

  getdateDifference(d1: string, d2: string, tag: string): number {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();

    var dateDiff = date2 - date1;

    if (tag === 'day') {
      let dayDifference = dateDiff / (1000 * 60 * 60 * 24);
      return Math.abs(dayDifference);
    } else if (tag === 'hour') {
      let dayDifference = dateDiff / (1000 * 60 * 60);
      return Math.abs(dayDifference);
    } else {
      return 0;
    }
  }

  expiryDateHandler() {
    var expiryDate = this.getHandledCard()[0]?.ExpiryDate;
    const myArray = expiryDate?.split('/');
    const day = myArray?.[0];
    const month = myArray?.[1];
    const year = myArray?.[2];

    const toDay = new Date();
    const dateYear = toDay.getFullYear();
    const dateMonth = toDay.getMonth() + 1;
    const dateDate = toDay.getDate();

    var today = dateYear + '-' + dateMonth + '-' + dateDate;

    const expiryFormattedDay = year + '-' + month + '-' + day;

    let date1 = new Date(expiryFormattedDay).getTime();
    let date2 = new Date(today).getTime();

    if (date1 < date2) {
      return 'This card is expired, please apply for re-issue.';
    } else if (this.getdateDifference(expiryFormattedDay, today, 'day') === 0) {
      return (
        'Expires in ' +
        this.getdateDifference(expiryFormattedDay, today, 'hour') +
        'Hour, please apply for re-issue'
      );
    } else if (this.getdateDifference(expiryFormattedDay, today, 'day') <= 30) {
      return (
        'Expires in ' +
        (Math.round(this.getdateDifference(expiryFormattedDay, today, 'day')) -
          1) +
        '  days, please apply for re-issue'
      );
    }
  }
}
