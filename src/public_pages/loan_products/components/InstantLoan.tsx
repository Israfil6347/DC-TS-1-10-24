import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function InstantLoan() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className=" text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <motion.h2
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-2  p-1 text-2xl font-bold text-onSurface lg:text-3xl"
              >
                Instant Loan
              </motion.h2>
              <div className="mb-4  p-1 text-justify text-onSurface">
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  This instant loan policy has been formulated to meet the
                  urgent financial needs of the members and to provide instant
                  digital services.
                </motion.p>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl  "
                >
                  Purposes
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-75 mt-2"
                  >
                    Members will be entitled to this loan after 6 months of
                    membership. The share Account should have a minimum of Tk.
                    1000 and 10% of the amount of the loan amount should be
                    deposited in the member’s "Savings Account".
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-75 mt-2"
                  >
                    The member using the mobile financial service (MFS) of
                    "Dhaka Credit" will be entitled to this loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-100 mt-2"
                  >
                    The loan amount is a maximum of Tk. 10,000. The limit can be
                    increased to Tk. 25,000 based on at least 2 loans and 6
                    months of regular transactions with up to a maximum of Tk.
                    40,000.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-100 mt-2"
                  >
                    The monthly interest rate is 1.25%.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-100 mt-2"
                  >
                    Loan Repayment: 90 days (3 Months) or 180 (6 Months).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-200 mt-2"
                  >
                    Failure to repay the loan within (90 Days) 3 Months or 180
                    (6 Months) will result in a fine of 25% interest rate.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-200 mt-2"
                  >
                    The loan can be availed again based on the repayment of the
                    loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-200 mt-2"
                  >
                    The approved loan can be availed through transfer as
                    ATM/Savings/Bkash(Coming soon).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-300 mt-2"
                  >
                    You can repay the outstanding installment/Loan by paying
                    cash at any service center of "Dhaka Credit". In addition,
                    Bank, Bkash, and MFS in Dhaka Credit (APPS) can be used to
                    repay the outstanding installments/Loans.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-300 mt-2"
                  >
                    Installments can be paid by transferring the loan amount
                    from "Dhaka Credit’s Savings Account/STD Account".
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-500 mt-2"
                  >
                    The processing fee for this loan is Tk. 50 (each time) which
                    will be deducted from the approved loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-500 mt-2"
                  >
                    If the loan fails to be repaid within the scheduled time,
                    the decision of the authority to adjust the loan from the
                    "Share/Savings deposit" and in this regard the decision will
                    be considered final.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="animate-fadeInRight animate-delay-700 mt-2"
                  >
                    Actions will be taken to recover the dues as per defaulting
                    loan policy.
                  </motion.li>
                </ol>
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-10"
                >
                  The above policies are in the jurisdiction of the credit union
                  and have the right for any future
                  changes/enhancements/additions/subtractions as made by the
                  elected board of directors of "the Christian Co-operative
                  Credit Union Ltd., Dhaka." The policy was approved at the 27th
                  joint meeting of the board of directors, credit and
                  supervisory committee held on October 13, 2021
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default InstantLoan;
