import { useState, useContext } from 'react';

import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import React from 'react';
import { validateFixedDepositState } from '../validate/validateFixedDepositState';

interface Nominee {
  id?: number;
  PersonId?: number;
  NomineePercentage?: number;
  selectedNomineeName?: string;
}
export interface FixedDepositState {
  accountHolder: string;
  tenure: string;
  amount: string;
  accountHolderName: string;
  nomineePercentage: string;
  selectedNomineeName: string;
  selectedNominee: number;
  DurationInMonths: number;
  CardAccount?: string;
  CardNo?: string;
  CardPIN?: string;
  Interest: number;
  AccountType: string;
  JointNominee: Nominee[];
  Errors: {
    accountHolder: string;
    accountHolderName: string;
    tenure: string;
    amount: string;
    nomineePercentage: string;
    selectedNominee: string;
    DurationInMonths: string;
    selectedNomineeName: string;
    CardAccount?: string;
    CardNo?: string;
    CardPIN?: string;
    Interest: string;
    AccountType: string;
    JointNominee: string;
  };
  // selectedNominees: any;
}

function useFIxedDepositAccountState() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const [selectedValue, setSelectedValue] = useState<string>('');
  const defaultAccount = authUser.PersonId.toString();

  const [schemeDepositState, setSchemeDepositState] =
    useState<FixedDepositState>({
      accountHolder: defaultAccount,
      tenure: '',
      amount: '',
      AccountType: '01',
      nomineePercentage: '100',
      selectedNomineeName: '',
      selectedNominee: 0,
      accountHolderName: '',
      DurationInMonths: 0,
      Interest: 0,
      JointNominee: [],
      Errors: {
        accountHolder: '',
        accountHolderName: '',
        AccountType: '',
        tenure: '',
        amount: '',
        nomineePercentage: '',
        selectedNominee: '',
        selectedNomineeName: '',
        DurationInMonths: '',
        Interest: '',
        JointNominee: '',
      },
    });

  console.log(schemeDepositState);

  const updateSchemeDepositState = (fieldName: string, fieldValue: any) => {
    setSchemeDepositState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateFixedDepositState(fieldName, fieldValue),
        },
      };
    });
  };

  const nomineeAddHandler = (PersonFamilyAndRelatives: any) => {
    const selectedNominee = PersonFamilyAndRelatives.find(
      (nominee: any) =>
        nominee.value.toString() === schemeDepositState.selectedNominee
    );

    if (selectedNominee) {
      setSchemeDepositState((prevState) => {
        const totalPercentage = prevState.JointNominee.reduce(
          (sum: number, nominee: Nominee) =>
            sum + (nominee.NomineePercentage ?? 0),
          0
        );

        if (
          totalPercentage + parseInt(schemeDepositState.nomineePercentage) <=
          100
        ) {
          if (prevState.AccountType === '01') {
            const nomineeData: Nominee = {
              id: selectedNominee.id,
              PersonId: selectedNominee.value,
              selectedNomineeName: selectedNominee.label,
              NomineePercentage: parseInt(schemeDepositState.nomineePercentage),
            };

            return {
              ...prevState,
              JointNominee: [nomineeData],
            };
          } else {
            if (
              !prevState.JointNominee.some(
                (nominee: Nominee) => nominee.PersonId === selectedNominee.value
              )
            ) {
              const nomineeWithPercentage: Nominee = {
                id: selectedNominee.id,
                PersonId: selectedNominee.value,
                selectedNomineeName: selectedNominee.label,
                NomineePercentage: parseInt(
                  schemeDepositState.nomineePercentage
                ),
              };

              return {
                ...prevState,
                JointNominee: [
                  ...prevState.JointNominee,
                  nomineeWithPercentage,
                ],
              };
            }
          }
        }

        return prevState;
      });

      setSelectedValue('');

      const {
        id,
        selectedNominee: any,
        selectedNomineeName,
        nomineePercentage,
      } = selectedNominee;
      return { id, selectedNominee, selectedNomineeName, nomineePercentage };
    }

    return null;
  };

  const removeNomineeHandler = (id: number) => {
    setSchemeDepositState((prevState) => ({
      ...prevState,
      JointNominee: prevState.JointNominee.filter(
        (nominee: any) => nominee.id !== id
      ),
    }));
  };

  return {
    schemeDepositState,
    updateSchemeDepositState,
    removeNomineeHandler,
    nomineeAddHandler,
    // handleDropdownChange,
    setSchemeDepositState,
  };
}

export default useFIxedDepositAccountState;
