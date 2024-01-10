import { CollectionLedgerModel } from 'authenticated_pages/shared/model/data/CollectionLedgerModel';
import { useState } from 'react';
import { validateCollectionLedgerState } from '../validation/validateCollectionLedgerState';

export interface CollectionLedgerState {
  AccountNo: string;
  AccountType: string;
  LedgerId: number;
  Amount: number;
  AccountId: number;
  IsDefaulter: boolean;
  IsSubLedger: boolean;
  IsMultiplier: boolean;
  IsNotEditable: boolean;
  AccountTypeCode: string;
  PlType: number;
  Sort: number;
  IsLps: boolean;
  isSelected: boolean;
  isStopEdit: boolean;
  MinimumDeposit: number;
  LoanBalance: number;
  InterestRate: number;
  LastPaidDate: string;
  ModuleCode: string;
  LoanCollectionType: string;
  IsRefundBased: boolean;
  AccountFor?: string;
  personalLedgerType?: number;
  Errors: {
    AccountNo: string;
    AccountType: string;
    LedgerId: string;
    Amount: string;
    AccountId: string;
    IsDefaulter: string;
    IsSubLedger: string;
    IsMultiplier: string;
    IsNotEditable: string;
    AccountTypeCode: string;
    PlType: string;
    Sort: string;
    IsLps: string;
    isSelected: string;
    isStopEdit: string;
    MinimumDeposit: string;
    LoanBalance: string;
    InterestRate: string;
    LastPaidDate: string;
    ModuleCode: string;
    LoanCollectionType: string;
    IsRefundBased: string;
    AccountFor?: string;
    personalLedgerType?: number;
  } | null;
}

function useCollectionLedgerState() {
  const [collectionLedgerState, setCollectionLedgerState] = useState<
    CollectionLedgerState[] | []
  >([]);

  const updateCollectionLedgerState = (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => {
    collectionLedgerState[index] = {
      ...collectionLedgerState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...collectionLedgerState[index].Errors!,
        [fieldName]: validateCollectionLedgerState(
          fieldName,
          fieldValue,
          collectionLedgerState[index]
        ),
      },
    };
    setCollectionLedgerState([...collectionLedgerState]);
  };

  const initCollectionLedgerState = (
    collectionLedgers: CollectionLedgerModel[]
  ) => {
    if (collectionLedgers !== null) {
      var tempCollectionLedgers: CollectionLedgerState[] = [];
      collectionLedgers?.forEach((element) => {
        var modifiedObj: CollectionLedgerState = {
          ...element,
          isSelected: true,
          isStopEdit: false,
          MinimumDeposit: element?.Amount,
          Errors: {
            AccountNo: '',
            AccountType: '',
            LedgerId: '',
            Amount: '',
            AccountId: '',
            IsDefaulter: '',
            IsSubLedger: '',
            IsMultiplier: '',
            IsNotEditable: '',
            AccountTypeCode: '',
            PlType: '',
            Sort: '',
            IsLps: '',
            isSelected: '',
            isStopEdit: '',
            MinimumDeposit: '',
            LoanBalance: '',
            InterestRate: '',
            LastPaidDate: '',
            ModuleCode: '',
            LoanCollectionType: '',
            IsRefundBased: '',
          },
        };

        if (element?.IsNotEditable) {
          modifiedObj.isSelected = true;
          modifiedObj.isStopEdit = true;
        }

        if (!element?.IsSubLedger) {
          if (element?.PlType === 2 && element?.IsLps) {
            modifiedObj.isSelected = true;
            modifiedObj.isStopEdit = true;
          } else {
            modifiedObj.isSelected = true;
            modifiedObj.isStopEdit = false;
          }
        } else {
          modifiedObj.isSelected = true;
          modifiedObj.isStopEdit = false;
        }

        tempCollectionLedgers.push(modifiedObj);
      });

      setCollectionLedgerState([...tempCollectionLedgers]);
    }
  };

  return {
    collectionLedgerState,
    setCollectionLedgerState,
    initCollectionLedgerState,
    updateCollectionLedgerState,
  };
}

export default useCollectionLedgerState;
