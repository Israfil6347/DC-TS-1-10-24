import { EligibleLoanProductModel } from 'authenticated_pages/loans/shared/model/data/EligibleLoanProductModel';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect } from 'react';
import MyProductLoanItem from './MyProductLoanItem';

/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  02 July 2023
 *========================================================================**/

function ProductLoansPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const {
    data: eligibleLoanProductsResponseData,
    loading: eligibleLoanProductsResponseDataLoading,
    message: eligibleLoanProductsResponseMessage,
    status: eligibleLoanProductsResponseStatus,
    setStatus: setEligibleLoanProductsResponseStatus,
    executeCommand: eligibleLoanProductsRequestCommand,
  } = useCommand<EligibleLoanProductModel[] | null>();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const eligibleLoanProductsRequestModel = new BaseRequestModel(authUser);

    eligibleLoanProductsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/loans_v1/getEligibleLoanProducts',
      JSON.stringify(eligibleLoanProductsRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  return (
    <>
      <LoaderDialogue isLoading={eligibleLoanProductsResponseDataLoading} />
      <motion.div
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        animate={{ x: 0, opacity: 1 }}
      >
        {eligibleLoanProductsResponseStatus === 'failed' ? (
          <div className="content  bg-surface px-4 py-4 shadow-sm md:px-10 md:py-10 lg:px-20 lg:py-20">
            <div className="animate-backInRight text-center">
              <h1 className=" text-2xl font-extrabold md:text-3xl">Sorry!</h1>
              <p className="text-xl">{eligibleLoanProductsResponseMessage}</p>
            </div>
          </div>
        ) : eligibleLoanProductsResponseData?.length !== 0 ? (
          <section className="flex w-full flex-col-reverse items-start gap-6 text-justify md:flex-col">
            <div className="content w-full text-left  md:text-justify lg:text-justify">
              <div className="">
                <motion.div
                  initial="initial"
                  animate="animate"
                  transition={MyTransition.StaggerChildren.Fast}
                  className="grid w-full gap-3 text-onSurface md:grid-cols-1 md:gap-6 xl:grid-cols-2"
                >
                  {eligibleLoanProductsResponseData?.map((loan, index) => (
                    <motion.div
                      variants={MyVariants.SlideInFromRight}
                      transition={{
                        ...MyTransition.Spring.Low,
                        delay: 0.1 * index,
                      }}
                      key={index}
                    >
                      <MyProductLoanItem
                        key={index}
                        loan={loan}
                        loanType={loan.LoanProductName}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        ) : (
          <div className="content  bg-surface px-4 py-4 shadow-sm md:px-10 md:py-10 lg:px-20 lg:py-20">
            <div className="animate-backInRight text-center">
              <h1 className=" text-2xl font-extrabold md:text-3xl">Sorry!</h1>
              <p className="text-xl">You are not eligible for this loan</p>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default ProductLoansPage;
