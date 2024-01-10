import { AccountModel } from 'authenticated_pages/accounts/my_accounts/model/data/AccountModel';
import {
  AccountStatementModel,
  PersonDependentAccountModel,
} from 'authenticated_pages/accounts/my_accounts/model/data/AccountStatementModel';
import { GetAccountStatementRequestModel } from 'authenticated_pages/accounts/my_accounts/model/request/GetAccountStatementRequestModel';
import { GetAccountsDetailsRequestModel } from 'authenticated_pages/accounts/my_accounts/model/request/GetAccountsDetailsRequestModel';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyCard from 'global_shared/components/MyCard';
import MyModal from 'global_shared/components/MyModal';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { logoIcon } from 'global_shared/data/base64Icons';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { financialYearBeginDate } from 'global_shared/utils/dateUtils';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import moment from 'moment';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PersonDependentAccountRequestModel } from './model/request/PersonDependentAccountRequestModel';

function PersonDependentsAccountPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const location = useLocation();
  const urlArrays = location.pathname.split('/');

  console.log(urlArrays[3]);

  const {
    loading: personDependentAccountResponseDataLoading,
    data: personDependentAccountResponseData,
    message: personDependentAccountResponseMessage,
    status: personDependentAccountResponseStatus,
    setStatus: setPersonDependentAccountResponseStatus,
    executeCommand: getPersonDependentAccountRequestExecuteCommand,
  } = useCommand<PersonDependentAccountModel[] | null>();

  const {
    loading: accountStatementResponseDataLoading,
    data: accountStatementResponseData,
    message: accountStatementResponseMessage,
    status: accountStatementResponseStatus,
    setStatus: setAccountStatementResponseStatus,
    executeCommand: getAccountStatementRequestExecuteCommand,
  } = useCommand<AccountStatementModel[] | null>();

  const {
    loading: accountDetailsResponseDataLoading,
    data: accountDetailsResponseData,
    message: accountDetailsResponseMessage,
    status: accountDetailsResponseStatus,
    setStatus: setAccountDetailsResponseStatus,
    executeCommand: getAccountDetailsRequestExecuteCommand,
  } = useCommand<AccountModel[] | null>();

  console.log(personDependentAccountResponseData);

  useEffect(() => {
    const personDependentAccountRequestModel =
      new PersonDependentAccountRequestModel(authUser);
    personDependentAccountRequestModel.DependentPersonId = parseInt(
      urlArrays[3]
    );
    personDependentAccountRequestModel.UserName = authUser.Email;
    personDependentAccountRequestModel.RolePermissionId = '6,1,1210';
    console.log(personDependentAccountRequestModel);

    getPersonDependentAccountRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/Accounts_V1/getDependentAccounts',
      JSON.stringify(personDependentAccountRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

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

  const getAccountDetailsHandler = (accountNo: string) => {
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
  };
  const amountFormatter = (model: AccountStatementModel) => {
    if (model?.DepositAmount > 0) {
      return '+' + formatToTkSymbolMoney(model?.DepositAmount);
    } else if (model?.WithdrawAmount) {
      return '-' + formatToTkSymbolMoney(model?.WithdrawAmount);
    }
  };

  const balanceFormatter = (model: AccountStatementModel) => {
    if (model?.Balance > 0) {
      return '=' + formatToTkSymbolMoney(model?.Balance);
    }
  };
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
            className=" overflow-hidden  overflow-y-scroll p-2 md:border md:px-4"
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
                  <div className="font-bold md:w-3/5">Account Holder Name</div>
                  <div className="md:w-2/5">
                    {accountDetailsResponseData?.[0]?.AccHolderName}
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
                    <div className="w-full font-bold md:w-3/5">
                      Last Paid Date
                    </div>
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
      {personDependentAccountResponseData?.length !== 0 &&
      personDependentAccountResponseData !== null ? (
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <motion.div
            initial="initial"
            animate="animate"
            transition={MyTransition.StaggerChildren.Fast}
            className="grid w-full grid-cols-1 gap-3 text-onSurface md:grid-cols-2 xl:grid-cols-3"
          >
            {personDependentAccountResponseData?.map((obj, key) => (
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={{ ...MyTransition.Spring.Low, delay: 0.1 * key }}
                key={key}
                onClick={() => {
                  getAccountDetailsHandler(obj?.AccountNo);
                }}
              >
                <MyCard
                  rounded={RoundedClass.Medium}
                  shadow={Size.Small}
                  bgColor={'bg-surface'}
                  minimumHeight={80}
                >
                  <div className={`group flex cursor-pointer items-center p-4`}>
                    <div className="flex flex-col items-center justify-center">
                      <i className="fa-solid fa-piggy-bank text-3xl text-primary"></i>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="">
                        <ul>
                          <li className="ml-4 grow text-left font-semibold">
                            {obj?.AccountTypeName}
                          </li>
                        </ul>
                      </div>

                      <div className="ml-4 text-sm">
                        <p>{`(${obj?.AccountNo})`}</p>
                      </div>
                    </div>
                  </div>
                </MyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
        >
          <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
            <div className="w-full">
              <div className="px-4 text-primary shadow-sm md:px-12">
                <div className="py-20 text-center">
                  <motion.h1
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="text-5xl font-extrabold"
                  >
                    Dependents Account
                  </motion.h1>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="-mt-1"
                  >
                    You do not have any Dependents Account
                  </motion.p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
}

export default PersonDependentsAccountPage;
