import { LoanAccountReadModel } from 'authenticated_pages/loans/shared/model/data/LoanAccountReadModel';
import { LoanStatementModel } from 'authenticated_pages/loans/shared/model/data/LoanStatementModel';
import { motion } from 'framer-motion';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyModal from 'global_shared/components/MyModal';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { logoIcon } from 'global_shared/data/base64Icons';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { financialYearBeginDate } from 'global_shared/utils/dateUtils';
import { formatToTkSymbolMoney } from 'global_shared/utils/textUtils';
import { default as moment } from 'moment';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RepaymentConfirmationDialogue from '../dialogues/RepaymentConfirmationDialogue';
import { LoanStatementRequestModel } from '../model/request/LoanStatementRequestModel';

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

interface MyLoanDetailsProps {
  isDialogueOpen: boolean;
  closeLoanDetailsDialog: () => void;
  loanDetailsData: LoanAccountReadModel[];
}

const MyLoanDetails: React.FC<MyLoanDetailsProps> = ({
  isDialogueOpen,
  closeLoanDetailsDialog,
  loanDetailsData,
}) => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const navigate = useNavigate();

  const [
    isLoanPaymentCalculationDialogOpen,
    setLoanPaymentCalculationDialogOpen,
  ] = useState(false);

  const {
    loading: loanStatementResponseDataLoading,
    data: loanStatementResponseData,
    message: loanStatementResponseMessage,
    status: loanStatementResponseStatus,
    setStatus: setLoanStatementResponseStatus,
    executeCommand: loanStatementRequestCommand,
  } = useCommand<LoanStatementModel[] | null>();

  const BalanceHandler = (model: LoanStatementModel) => {
    if (model?.Deposit <= 0 && model?.Withdrawal <= 0) {
      return '=' + formatToTkSymbolMoney(model?.LoanIssue);
    }
  };

  const AmountHandler = (model: LoanStatementModel) => {
    if (model?.Deposit > 0) {
      return '+' + formatToTkSymbolMoney(model?.Deposit);
    } else if (model?.Withdrawal) {
      return '-' + formatToTkSymbolMoney(model?.Withdrawal);
    }
  };

  const loanStatementRequestHandler = () => {
    const loanDetailsRequestModel = new LoanStatementRequestModel(authUser);
    if (loanDetailsData) {
      loanDetailsRequestModel.loanNo = loanDetailsData?.[0]?.LoanNumber.trim();
    }

    loanDetailsRequestModel.StartDate = financialYearBeginDate();
    loanDetailsRequestModel.EndDate = moment(new Date()).format();

    loanStatementRequestCommand(
      process.env.REACT_APP_BASE_URL + '/loans_v2/getLoanStatement',
      JSON.stringify(loanDetailsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  return (
    <>
      <LoaderDialogue isLoading={loanStatementResponseDataLoading} />
      <FailedDialogue
        isDialogueOpen={loanStatementResponseStatus === 'failed' ? true : false}
        onCloseButtonClick={() => {
          setLoanStatementResponseStatus(null);
        }}
      >
        {loanStatementResponseMessage}
      </FailedDialogue>

      <RepaymentConfirmationDialogue
        closeDialogue={() => {
          setLoanPaymentCalculationDialogOpen(false);
        }}
        loanDetailsData={loanDetailsData}
        isPaymentCalculatorOpen={isLoanPaymentCalculationDialogOpen}
      />

      {/* Begin loan statement dialogue */}
      <MyModal
        size={Size.Medium}
        show={loanStatementResponseStatus === 'success' ? true : false}
        onClose={() => setLoanStatementResponseStatus(null)}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="flex w-full flex-col items-center bg-background p-6 ">
              <img src={logoIcon} alt="" className="w-28" />
              <h1 className="text-lg font-bold text-primary">
                Account Statement
              </h1>
              <h1 className="text-lg font-bold text-primary">
                {loanDetailsData && loanDetailsData?.[0].LoanType}
              </h1>
              <h3 className="font-bold text-primary">
                {loanDetailsData?.[0].LoanNumber}
              </h3>
            </div>
          }
          dialogueFooter={
            <div className="flex w-full flex-col items-center justify-center  gap-2 bg-background p-6 md:flex-row md:justify-between">
              <div>
                <p className="text-lg font-semibold">
                  Remaining Balance:
                  <span className="ml-2 font-extrabold text-success">
                    {formatToTkSymbolMoney(
                      loanStatementResponseData !== null
                        ? loanStatementResponseData[
                            loanStatementResponseData?.length - 1
                          ]?.Balance
                        : 0
                    )}
                  </span>
                </p>
              </div>

              <MyButton
                type="button"
                label="Close"
                onClick={() => {
                  setLoanStatementResponseStatus(null);
                }}
                styleClass=" w-2/5 rounded bg-primary px-7 ml-5 py-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
                name={''}
              />
            </div>
          }
          onCancel={() => setLoanStatementResponseStatus(null)}
        >
          <div
            className="overflow-hidden  overflow-y-scroll  md:border md:px-4"
            style={{ maxHeight: window.innerHeight - 460 }}
          >
            <table className="table w-full">
              <thead className="">
                <tr className="sticky -top-0 table-row h-16 w-full border bg-surface uppercase text-onSurface shadow-sm">
                  <th className="p-2 text-left">
                    <p>Date</p>
                  </th>
                  <th className="p-2 text-center md:text-left">
                    <p>Description</p>
                  </th>
                  <th className="w-28 p-2 text-left">
                    <p>Amount</p>
                  </th>
                  <th className="hidden p-[1.5rem] text-left  md:block">
                    <p>Balance</p>
                  </th>
                </tr>
              </thead>
              <tbody className="h-16 flex-1 bg-backgroundVariant">
                {loanStatementResponseData?.map(
                  (loanStatementTransactionModel, index) => (
                    <tr
                      key={index}
                      className="table-row w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50"
                    >
                      <td className="">
                        <button className="flex items-center justify-center rounded-md bg-primary px-2 py-1 font-normal text-onPrimary">
                          <div className="mx-1 flex flex-row items-center gap-1">
                            <p className="text-4xl font-extrabold">
                              {moment(
                                loanStatementTransactionModel?.TxnDate
                              ).format('DD')}
                            </p>
                            <div className="flex flex-col">
                              <p className="text-xs font-normal uppercase">
                                {moment(
                                  loanStatementTransactionModel?.TxnDate
                                ).format('MMM')}
                              </p>
                              <p className="text-xs font-normal uppercase">
                                {moment(
                                  loanStatementTransactionModel?.TxnDate
                                ).format('yyyy')}
                              </p>
                            </div>
                          </div>
                        </button>
                      </td>
                      <td className="p-2">
                        <p className="font-normal">
                          {loanStatementTransactionModel?.Particulars}
                        </p>
                      </td>
                      <td className="p-2">
                        <p className="font-normal">
                          {AmountHandler(loanStatementTransactionModel)}
                        </p>
                        <p className="md:hidden">
                          {BalanceHandler(loanStatementTransactionModel)}
                        </p>
                      </td>
                      <td className="hidden p-[1.5rem]  md:block">
                        <p className="font-normal">
                          {BalanceHandler(loanStatementTransactionModel) ||
                            loanStatementTransactionModel.Balance}
                        </p>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </MyDialogueView>
      </MyModal>
      {/* End loan statement dialogue */}

      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <MyModal
          size={Size.Small}
          show={isDialogueOpen}
          onClose={closeLoanDetailsDialog}
        >
          <MyDialogueView
            dialogueHeader={
              <div className="hover: animate-swing flex w-full flex-col items-center bg-background p-4 hover:cursor-pointer ">
                <img src={logoIcon} alt="" className="w-28" />
                <h3 className="font-bold text-primary">
                  {loanDetailsData?.[0].LoanType}
                </h3>
              </div>
            }
            dialogueFooter={
              <div className="w-full bg-background p-4">
                <div className="bottom-0 flex w-full items-center justify-center gap-2 p-1 ">
                  <MyButton
                    disabled={
                      loanDetailsData?.[0].LoanBalance! === 0 ? true : false
                    }
                    type="button"
                    label="Repayment"
                    onClick={() => {
                      setLoanPaymentCalculationDialogOpen(true);
                    }}
                    styleClass="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                    name={''}
                  />

                  <MyButton
                    type="button"
                    label="Surety Taken "
                    onClick={() => {
                      closeLoanDetailsDialog();
                      navigate(
                        `/loans/loan_surety/${loanDetailsData?.[0].LoanNumber}`
                      );
                    }}
                    styleClass="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                    name={''}
                  />
                </div>
                <div className="bottom-0 flex items-center justify-center gap-2 p-1 ">
                  <MyButton
                    type="button"
                    label="Statement"
                    onClick={() => {
                      loanStatementRequestHandler();
                    }}
                    styleClass="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                    name={''}
                  />
                  <MyButton
                    onClick={closeLoanDetailsDialog}
                    type="button"
                    label="Close"
                    styleClass="w-1/2 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                    name={''}
                  />
                </div>
              </div>
            }
            onCancel={() => closeLoanDetailsDialog()}
          >
            <div
              className="content overflow-y-scroll  bg-surface px-8 py-6 text-onSurface md:px-14 "
              style={{ maxHeight: window.innerHeight - 430 }}
            >
              <ul className="divide-y overflow-hidden text-justify">
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Loan No</div>
                  <div className="md:w-2/5">
                    {loanDetailsData?.[0].LoanNumber}
                  </div>
                </li>

                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Loan Taken By</div>
                  <div className="md:w-2/5">
                    {loanDetailsData?.[0].LoaneeName}
                  </div>
                </li>
                {loanDetailsData?.[0].IssuedDate === '' ? (
                  ''
                ) : (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">
                      Loan Issued Date
                    </div>
                    <div className="w-full md:w-2/5">
                      {moment(loanDetailsData?.[0].IssuedDate).format(
                        'DD-MMM-YYYY'
                      )}
                    </div>
                  </li>
                )}

                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Loan Amount</div>
                  <div className="md:w-2/5">
                    {formatToTkSymbolMoney(loanDetailsData?.[0].IssuedAmount!)}
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Interest Rate</div>
                  <div className="md:w-2/5">
                    {loanDetailsData?.[0].InterestRate}%
                  </div>
                </li>
                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Loan Balance</div>
                  <div className="w-full md:w-2/5">
                    {formatToTkSymbolMoney(loanDetailsData?.[0].LoanBalance!)}
                  </div>
                </li>
                {loanDetailsData?.[0].LoanStatus === '' ? (
                  ''
                ) : (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">Loan Status</div>
                    <div className="w-full md:w-2/5">
                      {loanDetailsData?.[0].LoanStatus}
                    </div>
                  </li>
                )}

                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="font-bold md:w-3/5">Maximum Installment</div>
                  <div className="md:w-2/5">
                    {loanDetailsData?.[0].Installment}
                  </div>
                </li>
                {loanDetailsData?.[0].LastPaidDate === '' ? (
                  ''
                ) : (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">
                      Recent Refund Date
                    </div>
                    <div className="w-full md:w-2/5">
                      {moment(loanDetailsData?.[0].LastPaidDate).format(
                        'DD-MMM-YYYY'
                      )}
                    </div>
                  </li>
                )}

                <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                  <div className="w-full font-bold md:w-3/5">Refund Amount</div>
                  <div className="w-full md:w-2/5">
                    {formatToTkSymbolMoney(
                      loanDetailsData?.[0].LoanRefundAmount!
                    )}
                  </div>
                </li>

                {loanDetailsData?.[0].LoanEndDate === '' ? (
                  ''
                ) : (
                  <li className="w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant md:flex">
                    <div className="w-full font-bold md:w-3/5">
                      Maturity Date
                    </div>
                    {moment(loanDetailsData?.[0].LoanEndDate).format(
                      'DD-MMM-YYYY'
                    )}
                  </li>
                )}
              </ul>
            </div>
          </MyDialogueView>
        </MyModal>
      </motion.div>
    </>
  );
};

export default MyLoanDetails;
