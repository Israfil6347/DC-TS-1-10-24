import { motion } from 'framer-motion';

import { AccountTypeCode } from 'authenticated_pages/shared/enum/AccountTypeCode';

import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyTextInput from 'global_shared/components/MyTextInput';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import React, { useEffect, useState } from 'react';
import { CollectionLedgerState } from '../hooks/useCollectionLedgerState';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import moment from 'moment';
import { AccountModel } from 'authenticated_pages/accounts/my_accounts/model/data/AccountModel';
import { GetAccountsDetailsRequestModel } from 'authenticated_pages/accounts/my_accounts/model/request/GetAccountsDetailsRequestModel';
import { LoanDetailsRequestModel } from 'authenticated_pages/loans/my_loans/model/request/LoanDetailsRequestModel';
import { LoanAccountReadModel } from 'authenticated_pages/loans/shared/model/data/LoanAccountReadModel';
import MyLoanDetails from 'authenticated_pages/loans/my_loans/components/MyLoanDetails';
import { GetAccountStatementRequestModel } from 'authenticated_pages/accounts/my_accounts/model/request/GetAccountStatementRequestModel';
import { financialYearBeginDate } from 'global_shared/utils/dateUtils';
import { AccountStatementModel } from 'authenticated_pages/accounts/my_accounts/model/data/AccountStatementModel';

interface CollectionLedgerAccountsViewProps {
  collectionLedgerState: CollectionLedgerState[] | [];
  setCollectionLedgerState: React.Dispatch<
    React.SetStateAction<[] | CollectionLedgerState[]>
  >;
  updateCollectionLedgerState?: any;
  sectionTitle: string;
  submitCollectionLedgerAccountsSubmit?: () => void;
  cardAccountWithdrawableBalance: number;
  submitButtonLabel?: string;
  cardPinRemainingTry: number;
  cardLockRequestHandler?: any;
  allDisable?: boolean;
}

const CollectionLedgerAccountsView: React.FC<
  CollectionLedgerAccountsViewProps
> = ({
  collectionLedgerState,
  setCollectionLedgerState,
  updateCollectionLedgerState,
  sectionTitle,
  submitCollectionLedgerAccountsSubmit,
  cardAccountWithdrawableBalance,
  submitButtonLabel = '',
  cardPinRemainingTry,
  cardLockRequestHandler,
  allDisable,
}) => {
  const [selectAll, setSelectAll] = useState<boolean>(true);
  const [currentEditedLoanNumber, setCurrentEditedLoanNumber] =
    useState<string>('');
  var totalAmount = 0;
  if (collectionLedgerState.length > 0) {
    collectionLedgerState.forEach((collectionLedger, index) => {
      if (collectionLedger?.isSelected) {
        totalAmount = totalAmount + collectionLedger.Amount;
      }
    });
  }

  const { authUser } = React.useContext(AuthUserContext) as AuthUserContextType;
  const {
    loading: loanPaymentCalculationResponseDataLoading,
    data: loanPaymentCalculationResponseData,
    message: loanPaymentCalculationResponseMessage,
    status: loanPaymentCalculationResponseStatus,
    setStatus: setLoanPaymentCalculationResponseStatus,
    executeCommand: loanPaymentCalculationRequestCommand,
  } = useCommand<any[]>();
  const {
    loading: accountDetailsResponseDataLoading,
    data: accountDetailsResponseData,
    message: accountDetailsResponseMessage,
    status: accountDetailsResponseStatus,
    setStatus: setAccountDetailsResponseStatus,
    executeCommand: getAccountDetailsRequestExecuteCommand,
  } = useCommand<AccountModel[] | null>();

  const {
    loading: loanDetailsResponseDataLoading,
    data: loanDetailsResponseData,
    message: loanDetailsResponseMessage,
    status: loanDetailsResponseStatus,
    setStatus: setLoanDetailsResponseStatus,
    executeCommand: loanDetailsRequestCommand,
  } = useCommand<LoanAccountReadModel[] | null>();

  const {
    loading: accountStatementResponseDataLoading,
    data: accountStatementResponseData,
    message: accountStatementResponseMessage,
    status: accountStatementResponseStatus,
    setStatus: setAccountStatementResponseStatus,
    executeCommand: getAccountStatementRequestExecuteCommand,
  } = useCommand<AccountStatementModel[] | null>();

  console.log(loanDetailsResponseStatus);

  const installmentSubmitHandler = (
    collectionLedgerState: CollectionLedgerState,
    refundAmount: number
  ) => {
    const baseRequestObj = new BaseRequestModel(authUser);
    const calculationObj = {
      ...baseRequestObj,
      Days: 0,
      LoanNumber: collectionLedgerState.AccountNo,
      InterestRate: collectionLedgerState.InterestRate,
      IsRefundBased: collectionLedgerState.IsRefundBased,
      LastPaidDate: collectionLedgerState.LastPaidDate,
      LoanBalance: collectionLedgerState.LoanBalance,
      LoanRefund:
        refundAmount > collectionLedgerState.LoanBalance
          ? collectionLedgerState.LoanBalance
          : refundAmount,
      ModuleCode: collectionLedgerState.ModuleCode,
    };

    loanPaymentCalculationRequestCommand(
      process.env.REACT_APP_BASE_URL + '/loans_V1/calculateLoanPayment',
      JSON.stringify(calculationObj),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const toggleSelect = (selectAll: boolean) => {
    const updatedCollectionLedgerState = collectionLedgerState?.map(
      (currentElement, index) => {
        currentElement.isSelected = selectAll;
        return currentElement;
      }
    );
    if (setCollectionLedgerState) {
      setCollectionLedgerState(updatedCollectionLedgerState);
    }
  };

  const toggleGroupSelection = (accountId: number, selected: boolean) => {
    const updatedCollectionLedgerState = collectionLedgerState?.map(
      (currentElement, index) => {
        if (currentElement.AccountId === accountId) {
          currentElement.isSelected = selected;
        }

        return currentElement;
      }
    );

    if (setCollectionLedgerState) {
      setCollectionLedgerState(updatedCollectionLedgerState);
    }
  };

  useEffect(() => {
    if (loanPaymentCalculationResponseData !== null) {
      const updatedCollectionLedgerState = collectionLedgerState?.map(
        (currentElement, index) => {
          if (
            currentElement.LoanCollectionType.trim() === 'LoanLpsAmount' &&
            currentEditedLoanNumber.trim() === currentElement.AccountNo.trim()
          ) {
            currentElement.Amount =
              loanPaymentCalculationResponseData[0].LoanLpsAmount;
          }

          return currentElement;
        }
      );

      if (setCollectionLedgerState) {
        setCollectionLedgerState(updatedCollectionLedgerState);
      }
    }
  }, [loanPaymentCalculationResponseData]);

  useEffect(() => {
    collectionLedgerState?.forEach((currentElement, index) => {
      if (!currentElement.isSelected) {
        setSelectAll(false);
      }
    });
  });

  var paidDate;
  if (
    accountDetailsResponseData?.[0]?.AccountTypeCode ===
      AccountTypeCode?.Double_Deposit_Scheme_Project.toString() ||
    accountDetailsResponseData?.[0]?.AccountTypeCode ===
      AccountTypeCode.Divine_Mercy_General_Bond.toString() ||
    accountDetailsResponseData?.[0]?.AccountTypeCode ===
      AccountTypeCode?.Long_term_saving_project.toString() ||
    accountDetailsResponseData?.[0]?.AccountTypeCode ===
      AccountTypeCode.Troimashik_Savings_Project.toString()
  ) {
    paidDate = 'Sanction Date';
  } else {
    paidDate = 'Last Deposit Date';
  }

  const balanceFormatter = (model: AccountStatementModel) => {
    if (model?.Balance > 0) {
      return '=' + formatToTkSymbolMoney(model?.Balance);
    }
  };

  const amountFormatter = (model: AccountStatementModel) => {
    if (model?.DepositAmount > 0) {
      return '+' + formatToTkSymbolMoney(model?.DepositAmount);
    } else if (model?.WithdrawAmount) {
      return '-' + formatToTkSymbolMoney(model?.WithdrawAmount);
    }
  };

  const accountInfoDialogHandler = (
    LoanCollectionType: string,
    accountNo: string
  ) => {
    if (LoanCollectionType === 'dms_balance') {
      const accountDetailsRequestModel = new GetAccountsDetailsRequestModel(
        authUser
      );
      accountDetailsRequestModel.AccountNo = accountNo;

      getAccountDetailsRequestExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/accounts_V1/GetAccountDetails',
        JSON.stringify(accountDetailsRequestModel),
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        }
      );
    } else if (LoanCollectionType === 'loan_principal_amount') {
      const loanInformationRequestModel = new LoanDetailsRequestModel(authUser);

      loanInformationRequestModel.LoanId = accountNo;

      loanDetailsRequestCommand(
        process.env.REACT_APP_BASE_URL + '/loans_v1/getLoanDetails',
        JSON.stringify(loanInformationRequestModel),
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        }
      );
    } else {
      return '';
    }
  };
  const getAccountStatementHandler = (accountNo: string) => {
    const accountStatementRequestModel = new GetAccountStatementRequestModel(
      authUser
    );
    accountStatementRequestModel.AccountNo = accountNo;
    accountStatementRequestModel.StartDate = financialYearBeginDate();
    accountStatementRequestModel.EndDate = moment(new Date()).format(
      'DD-MMM-YYYY'
    );

    getAccountStatementRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/accounts_V2/getAccountStatement',
      JSON.stringify(accountStatementRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  console.log(collectionLedgerState);

  return (
    <div>
      {/* Begin account statement modal */}
      <MyModal
        size={Size.Medium}
        show={accountStatementResponseStatus === 'success' ? true : false}
        onClose={() => setAccountStatementResponseStatus(null)}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="bg-background p-4">
              <div className="hover:animate-swing flex w-full flex-col items-center hover:cursor-pointer">
                <img src={logoIcon} alt="" className="w-28" />
                <h1 className="text-lg font-bold text-primary">
                  Account Statement
                </h1>
                <h1 className="text-lg font-bold text-primary">
                  {accountStatementResponseData?.[0]?.AccountTypeName}
                </h1>
                <h3 className="font-bold text-primary">
                  {accountStatementResponseData?.[0]?.AccountNo}
                </h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className=" flex w-full flex-col  items-center justify-center  gap-2 bg-background p-6 md:flex-row md:justify-between">
              <div>
                <p className="text-lg font-semibold">
                  Remaining Balance:
                  <span className="ml-2 font-extrabold text-success">
                    {formatToTkSymbolMoney(
                      accountStatementResponseData !== null
                        ? accountStatementResponseData[
                            accountStatementResponseData.length - 1
                          ].Balance
                        : 0
                    )}
                  </span>
                </p>
              </div>

              <MyButton
                type="button"
                label="Close"
                onClick={() => {
                  setAccountStatementResponseStatus(null);
                }}
                styleClass=" w-2/5 rounded bg-primary px-7 ml-5 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
                name={''}
              />
            </div>
          }
          onCancel={() => {
            setAccountStatementResponseStatus(null);
          }}
        >
          <div
            className=" overflow-hidden  overflow-y-scroll  md:border md:px-4"
            style={{ maxHeight: window.innerHeight - 460 }}
          >
            <table className="table w-full ">
              <thead className="">
                <tr className="sticky -top-0 table-row h-16 w-full border bg-surface uppercase text-onSurface shadow-sm">
                  <th className="p-2 text-left">
                    <p>Date</p>
                  </th>
                  <th className="p-2 text-center md:text-left">
                    <p>Description</p>
                  </th>
                  <th className="w-24 p-2 text-left">
                    <p>Amount</p>
                  </th>
                  <th className="hidden p-[1.5rem] text-left md:block">
                    <p>Balance</p>
                  </th>
                </tr>
              </thead>
              <tbody className="h-16 flex-1 bg-backgroundVariant">
                {accountStatementResponseData?.map((transaction, index) => (
                  <tr
                    key={index}
                    className="table-row w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50"
                  >
                    <td className="">
                      <div className="flex items-center justify-center rounded-md bg-primary px-2 py-1 font-normal text-onPrimary">
                        <div className="mx-1 flex flex-row items-center gap-1">
                          <p className="text-4xl font-extrabold">
                            {moment(transaction?.TxnDate).format('DD')}
                          </p>
                          <div className="flex flex-col">
                            <p className="text-xs font-normal uppercase">
                              {moment(transaction?.TxnDate).format('MMM')}
                            </p>
                            <p className="text-xs font-normal uppercase">
                              {moment(transaction?.TxnDate).format('YYYY')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2">
                      <p className="font-normal">{transaction?.Particulars}</p>
                    </td>
                    <td className="p-2">
                      <p className="font-normal">
                        <span>{amountFormatter(transaction)}</span>
                      </p>
                      <p className="md:hidden">
                        <span>{balanceFormatter(transaction)}</span>
                      </p>
                    </td>
                    <td className="hidden p-[1.5rem] md:block">
                      <p className="font-normal">
                        {balanceFormatter(transaction)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MyDialogueView>
      </MyModal>
      {/* End account statement modal */}
      {/* Begin account details modal */}
      <MyModal
        size={Size.Small}
        show={accountDetailsResponseStatus === 'success' ? true : false}
        onClose={() => setAccountDetailsResponseStatus(null)}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="bg-background py-4">
              <div className="hover: animate-swing flex w-full flex-col items-center hover:cursor-pointer ">
                <img src={logoIcon} alt="" className="w-28" />
                <h3 className="font-bold text-primary">
                  {accountDetailsResponseData?.[0]?.AccountTypeName}
                </h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex items-center justify-center gap-4 bg-background p-4">
              <div className="w-2/5">
                <MyButton
                  type="button"
                  label="Statement"
                  onClick={() => {
                    getAccountStatementHandler(
                      accountDetailsResponseData?.[0]?.AccountNo!
                    );
                    setAccountDetailsResponseStatus(null);
                  }}
                  styleClass=" w-full  rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
              </div>
              <div className="w-2/5">
                <MyButton
                  onClick={() => {
                    setAccountDetailsResponseStatus(null);
                  }}
                  type="button"
                  label="Close"
                  styleClass=" w-full  rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
              </div>
            </div>
          }
          onCancel={() => {
            setAccountDetailsResponseStatus(null);
          }}
        >
          <div
            className="scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-200 w-full overflow-hidden overflow-y-scroll rounded-lg px-8  py-6  md:mt-2 md:px-14"
            style={{ maxHeight: window.innerHeight - 400 }}
          >
            <div className="content bg-surface p-4 text-onSurface md:mt-5">
              <ul className="divide-y overflow-hidden text-justify">
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Account No</div>
                  <div className="md:w-2/5">
                    {accountDetailsResponseData?.[0]?.AccountNo}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Balance </div>
                  <div className="w-full md:w-2/5">
                    {formatToTkSymbolMoney(
                      accountDetailsResponseData?.[0]?.Balance!
                    )}
                  </div>
                </li>
                {accountDetailsResponseData?.[0]?.AccountTypeName ===
                  'Savings Account' && (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">
                      Withdrawable Balance
                    </div>
                    <div className="w-full md:w-2/5">
                      {formatToTkSymbolMoney(
                        accountDetailsResponseData?.[0]?.WithdrawableBalance
                      )}
                    </div>
                  </li>
                )}

                {accountDetailsResponseData?.[0]?.AccountNominee === '' ? (
                  ''
                ) : (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">Nominee</div>
                    <div className="w-full md:w-2/5">
                      {accountDetailsResponseData?.[0]?.AccountNominee}
                    </div>
                  </li>
                )}
                {accountDetailsResponseData?.[0]?.LastPaidDate === null ? (
                  ''
                ) : (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">{paidDate}</div>
                    <div className="w-full md:w-2/5">
                      {moment(
                        accountDetailsResponseData?.[0]?.LastPaidDate
                      ).format('DD-MMM-YYYY')}
                    </div>
                  </li>
                )}

                {accountDetailsResponseData?.[0]?.MaturityDate != null ||
                accountDetailsResponseData?.[0]?.MaturityDate === '' ? (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">
                      Maturity Date
                    </div>
                    <div className="w-full md:w-2/5">
                      {moment(
                        accountDetailsResponseData?.[0]?.MaturityDate
                      ).format('DD-MMM-YYYY')}
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>
      {/* End account details modal */}

      <MyLoanDetails
        isDialogueOpen={loanDetailsResponseStatus === 'success' ? true : false}
        loanDetailsData={loanDetailsResponseData!}
        closeLoanDetailsDialog={() => {
          setLoanDetailsResponseStatus(null);
        }}
      />

      <LoaderDialogue isLoading={loanPaymentCalculationResponseDataLoading} />
      <motion.div
        variants={MyVariants.SlideInFromRight}
        transition={MyTransition.Spring.Low}
        className=""
      >
        <div className="rounded-md bg-surface p-7">
          {/* // TODO: remove title */}
          {/* <motion.h2 className="text-center text-lg font-bold uppercase">
          {sectionTitle}
        </motion.h2> */}
          {allDisable ? (
            ''
          ) : (
            <div className="ml-6">
              <MyCheckBox
                disabled={false}
                value={selectAll}
                onChangeHandler={(event) => {
                  setSelectAll(!selectAll);
                  toggleSelect(event.target.checked);
                }}
                label="Select/Deselect all"
                error={undefined}
                name={'selectAll'}
              />
            </div>
          )}

          <div
            className={`min-h-[396px] overflow-auto border p-4 ${
              totalAmount === 0 && 'border-error'
            }`}
            style={{ height: window.innerHeight - 500 }}
          >
            <ul className="space-y-4 overflow-hidden">
              {collectionLedgerState?.map((AccountInfo, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start lg:flex-row"
                >
                  <div className="flex w-full  cursor-pointer items-center rounded border border-gray-400 bg-background px-2 text-start text-sm font-bold lg:w-1/2">
                    {allDisable ? (
                      <label className="py-2.5 px-2 text-sm font-medium">{`${AccountInfo?.AccountType} | ${AccountInfo?.AccountFor} | ${AccountInfo?.AccountNo} `}</label>
                    ) : (
                      <MyCheckBox
                        disabled={AccountInfo?.IsNotEditable}
                        value={AccountInfo?.isSelected}
                        name="isSelected"
                        styleClass="cursor-pointer hover:underline"
                        onChangeHandler={(event) => {
                          updateCollectionLedgerState(
                            event.target.name,
                            event.target.checked,
                            index
                          );

                          toggleGroupSelection(
                            AccountInfo.AccountId,
                            event.target.checked
                          );
                        }}
                        label={`${AccountInfo?.AccountType} | ${AccountInfo?.AccountFor} | ${AccountInfo?.AccountNo}`}
                        error={undefined}
                        onClick={() => {
                          accountInfoDialogHandler(
                            AccountInfo?.LoanCollectionType.trim(),
                            AccountInfo?.AccountNo.trim()
                          );
                        }}
                      />
                    )}
                  </div>
                  <div className="w-full lg:w-1/2">
                    <MyTextInput
                      label=""
                      name="Amount"
                      value={AccountInfo?.Amount.toString()}
                      inputType="number"
                      disabled={
                        allDisable
                          ? true
                          : !AccountInfo?.isSelected ||
                            AccountInfo?.IsNotEditable
                      }
                      required={false}
                      error={
                        collectionLedgerState?.[index]?.Errors?.Amount
                          ? collectionLedgerState?.[index]?.Errors?.Amount
                          : !collectionLedgerState[index]?.IsSubLedger &&
                            collectionLedgerState[index]?.PlType === 2 &&
                            collectionLedgerState?.[index]?.Amount <
                              collectionLedgerState?.[index]?.MinimumDeposit
                          ? `Minimum deposit amount ${collectionLedgerState[index].MinimumDeposit} ৳`
                          : collectionLedgerState?.[index]?.Amount ===
                            collectionLedgerState?.[index]?.LoanBalance
                          ? `Maximum deposit amount ${collectionLedgerState[index].LoanBalance} ৳`
                          : ''
                      }
                      onChangeHandler={(event) => {
                        if (event.target.value === '') {
                          updateCollectionLedgerState(
                            event.target.name,
                            0,
                            index
                          );
                        } else {
                          updateCollectionLedgerState(
                            event.target.name,
                            parseInt(event.target.value),
                            index
                          );
                        }

                        if (
                          !AccountInfo.IsSubLedger &&
                          AccountInfo.PlType === 2 &&
                          AccountInfo.IsLps
                        ) {
                          setCurrentEditedLoanNumber(AccountInfo.AccountNo);
                          installmentSubmitHandler(
                            AccountInfo,
                            parseInt(event.target.value)
                          );
                        }

                        if (
                          !AccountInfo.IsSubLedger &&
                          AccountInfo.PlType === 2
                        ) {
                          AccountInfo.LoanBalance <
                            parseInt(event.target.value) &&
                            updateCollectionLedgerState(
                              event.target.name,
                              AccountInfo.LoanBalance,
                              index
                            );
                        }

                        if (
                          parseInt(event.target.value) <
                          AccountInfo.MinimumDeposit
                        ) {
                          updateCollectionLedgerState(
                            event.target.name,
                            parseInt(event.target.value),
                            index
                          );
                        }
                      }}
                      leftIcon={
                        <i
                          className={`fa-solid fa-bangladeshi-taka-sign 
                      ${
                        !AccountInfo.IsSubLedger &&
                        AccountInfo.PlType === 2 &&
                        AccountInfo.IsLps
                          ? 'text-red-500'
                          : 'text-blue-600'
                      }`}
                        ></i>
                      }
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between pr-6 pt-2 text-right font-semibold md:flex-row">
            {totalAmount > cardAccountWithdrawableBalance ? (
              <motion.h4 className="">
                <span className="text-xs text-error">
                  You do not have sufficient balance
                </span>
              </motion.h4>
            ) : (
              <div></div>
            )}
            <motion.h4 className="">
              Total Amount:
              <span className="font-bold">
                {totalAmount === undefined
                  ? '0 ৳'
                  : ` ${formatToTkSymbolMoney(totalAmount)}`}
              </span>
            </motion.h4>
          </div>

          {submitButtonLabel.length > 0 && (
            <div className="flex items-center justify-end gap-4">
              {collectionLedgerState.length !== 0 ? (
                <button
                  className="w-1/2 rounded bg-primary py-2 font-semibold uppercase text-onPrimary transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    if (cardPinRemainingTry === 0) {
                      cardLockRequestHandler();
                    } else {
                      submitCollectionLedgerAccountsSubmit &&
                        submitCollectionLedgerAccountsSubmit();
                    }
                  }}
                >
                  {submitButtonLabel}
                </button>
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CollectionLedgerAccountsView;
