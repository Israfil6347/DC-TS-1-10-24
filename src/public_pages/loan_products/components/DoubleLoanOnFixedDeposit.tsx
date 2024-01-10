import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function DoubleLoanOnFixedDeposit() {
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
                className="mb-2 p-1 text-2xl font-bold text-onSurface lg:text-3xl"
              >
                Double Loan On Fixed Deposit
              </motion.h2>
              <div>
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mb-4 p-1 text-justify text-onSurface"
                >
                  In the current economic situation, it is almost impossible to
                  get sufficient surety for any loan. Due to this situation,
                  members are unable to secure new loans from Dhaka Credit.
                  Hence, Dhaka Credit has launched a new product “Double Loan on
                  Fixed Deposit” which is targeting members who have sufficient
                  Fixed deposits but are unable to secure surety for a loan.
                </motion.p>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Requirements
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The loan applicant must pay the first loan and then he/ she
                    will eligible to get the loan within at least 6 months of
                    regular payment.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    5% of the loan must be available in share/ savings/ HDS.
                  </motion.li>

                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    This loan can be applied while having a general loan or even
                    when the surety is the default. An additional 5% of
                    shares/savings/HDS deposits must be used against this loan
                    should be shares/savings/HDS.
                  </motion.li>
                </ol>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Rules & Regulations
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    You have to apply for this loan through the prescribed
                    application form of the union.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    In the case of loans against deposits of minors, only if the
                    account operator is a regular member of the credit union,
                    the loan will be given in the name of the account operator.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    This loan will be sanctioned as double against the deposit
                    maintained by the member in "Dhaka Credit" which shall not
                    exceed Tk. 35,00,000.00/- (35 Lac).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The loan is repayable in 36/60/72/96/120 installments.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Yearly Interest rate is 12%.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Rebate will be paid on this loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Subject to repayment/settlement of this loan, refinance can
                    be taken.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    After 3 months of FDR opening the member will be eligible
                    for this loan
                  </motion.li>
                </ol>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Loan Surety
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    3 MICR cheques in the applicant’s own name should be given
                    as surety.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Affidavit of one earning member of the family (husband-wife,
                    son-daughter) has to give an undertaking on non-judicial
                    stamp paper. If there is no earning member in the family,
                    the applicant has to give an undertaking on non-judicial
                    stamp paper. In the case of retirees, their dependent has to
                    give an undertaking on non-judicial stamp paper.
                  </motion.li>
                </ol>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Loan Repayment
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Payment of loan interest and installments are calculated
                    daily from the date of disbursement of the loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    In case of failure to repay the loan, fines, and other
                    expenses will be collected as per the prevailing rules of
                    "Dhaka Credit".
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    If the loan defaults for more than 3 months, it will be
                    reconciled with the deposit (as per the deposit encashment
                    policy) and necessary action will be taken as per the loan
                    recovery policy by the decision of the Board.
                  </motion.li>
                </ol>
                <motion.p
                  className="mt-5"
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  Any change/s or addition/s to this loan policy made by the
                  board of directors of "Dhaka Credit" union is subject to the
                  jurisdiction of the board.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default DoubleLoanOnFixedDeposit;
