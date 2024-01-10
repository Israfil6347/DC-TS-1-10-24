import DonutChart from 'authenticated_pages/shared/components/DonutChart';
import { DonutChartData } from 'authenticated_pages/shared/interfaces/DonutChartData';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCard from 'global_shared/components/MyCard';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect, useState } from 'react';
import { LoanAccountModel } from '../shared/model/data/LoanAccountModel';
import { LoanAccountReadModel } from '../shared/model/data/LoanAccountReadModel';
import MyLoanDetails from './components/MyLoanDetails';
import { LoanDetailsRequestModel } from './model/request/LoanDetailsRequestModel';

function MyLoansPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [loanData, setLoanData] = useState<DonutChartData[]>([]);

  const {
    loading: myLoansResponseDataLoading,
    data: myLoansResponseData,
    message: myLoansResponseMessage,
    status: myLoansResponseStatus,
    setStatus: setMyLoansResponseStatus,
    executeCommand: myLoansRequestCommand,
  } = useCommand<LoanAccountModel[] | null>();

  const {
    loading: loanDetailsResponseDataLoading,
    data: loanDetailsResponseData,
    message: loanDetailsResponseMessage,
    status: loanDetailsResponseStatus,
    setStatus: setLoanDetailsResponseStatus,
    executeCommand: loanDetailsRequestCommand,
  } = useCommand<LoanAccountReadModel[] | null>();

  useEffect(() => {
    const loanRequestModel = new BaseRequestModel(authUser);

    myLoansRequestCommand(
      process.env.REACT_APP_BASE_URL + '/loans_v1/getMyLoans',
      JSON.stringify(loanRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  const loanDetailsRequestHandler = (loanId: string) => {
    const loanInformationRequestModel = new LoanDetailsRequestModel(authUser);
    if (myLoansResponseData) {
      loanInformationRequestModel.LoanId = loanId;
    }

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
  };

  useEffect(() => {
    if (myLoansResponseData) {
      const newAccountData = myLoansResponseData.map((item) => {
        const { LoanType, LoanBalance } = item;

        return {
          name: LoanType,
          value: LoanBalance,
        };
      });

      setLoanData(newAccountData);
    }
  }, [myLoansResponseData]);

  console.log(myLoansResponseData);

  return (
    <>
      <LoaderDialogue
        isLoading={myLoansResponseDataLoading || loanDetailsResponseDataLoading}
      />

      <MyLoanDetails
        isDialogueOpen={loanDetailsResponseStatus === 'success' ? true : false}
        loanDetailsData={loanDetailsResponseData!}
        closeLoanDetailsDialog={() => {
          setLoanDetailsResponseStatus(null);
        }}
      />

      {myLoansResponseData?.length === 0 ? (
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
                    Loans
                  </motion.h1>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="-mt-1"
                  >
                    You do not have any loan
                  </motion.p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      ) : (
        <div className="flex flex-col-reverse justify-between md:flex-row">
          <motion.div
            initial="initial"
            animate="animate"
            transition={MyTransition.StaggerChildren.Fast}
            className="grid h-full gap-3 px-10 text-onSurface md:w-2/4 md:grid-cols-1 md:gap-6 xl:w-8/12 xl:grid-cols-2"
          >
            {myLoansResponseData?.map((loan, index) => (
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={{
                  ...MyTransition.Spring.Low,
                  delay: 0.1 * index,
                }}
                key={index}
                onClick={() => {
                  loanDetailsRequestHandler(loan.LoanId);
                }}
              >
                <MyCard
                  rounded={RoundedClass.Medium}
                  shadow={Size.Small}
                  bgColor={'bg-surface'}
                  minimumHeight={80}
                  borderColor={`${
                    loan?.IsDefaulter ? 'border border-2 border-error' : ''
                  }`}
                >
                  <div className={`group flex cursor-pointer items-center p-4`}>
                    <div className="flex flex-col items-center justify-center">
                      {loan?.IsDefaulter ? (
                        <i className="fa-solid fa-sack-dollar text-3xl text-error"></i>
                      ) : (
                        <i className="fa-solid fa-sack-dollar text-3xl text-primary"></i>
                      )}
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="">
                        <ul>
                          <li className="ml-4 grow text-left font-semibold">
                            {loan.LoanType}
                          </li>
                        </ul>
                      </div>

                      <div className="ml-4 text-sm">
                        <p>{`(${loan?.LoanId})`}</p>
                      </div>
                    </div>
                  </div>
                </MyCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="pb-8 md:h-[600px] md:w-2/4 md:pb-0 xl:w-4/12">
            {loanData && <DonutChart data={loanData} />}
          </div>
        </div>
      )}
    </>
  );
}

export default MyLoansPage;
