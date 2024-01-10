import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function EntrepreneurLoan() {
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
                Entrepreneur Loan
              </motion.h2>
              <div>
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mb-4 p-1 text-justify text-onSurface"
                >
                  To provide loans to the members of our association through
                  training on agro-based projects and self-reliance through
                  freelancing. One of the objectives of this loan is to create
                  entrepreneurship and increase investment in the backward
                  sections of society through productive & sustainable work.
                </motion.p>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Loan Application Requirements:
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The loan applicant must be a regular member of "Dhaka
                    Credit".
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Before applying for the loan, the applicant should have
                    received training in the relevant subject from "Dhaka
                    Credit" / another approved institution.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The loan amount is a maximum of Tk. 5000. The limit can be
                    increased to Tk. 10,000 based on at least 2 loans and 6
                    months of regular transactions with up to a maximum of Tk.
                    25,000.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    This loan can be taken while having an existing "General
                    Loan".
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    In case of a loan up to Tk.5,00,000 (Tk. 5 Lac) one-tenth of
                    the loan amount and for a loan more than Tk.5,00,000
                    One-eighth of the money must be deposited by the applicant
                    in the savings account/ STD account which will be treated as
                    surety against the loan...
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Preference will be given to young entrepreneurs.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The loan can be availed again based on the repayment of the
                    loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The maximum age of the loan applicant is 65 years.
                  </motion.li>
                </ol>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Rules & Regulations:
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The loan have to be applied through the application form
                    provided by the credit union.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    2 copies of the updated passport-size photograph, "Dhaka
                    Credit" digital ID card, photocopy of NID card, and consent
                    of the family (husband-wife, son-daughter) should be given
                    along with the loan application.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    A photocopy of the training certificate is required.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    This loan can be taken while having an existing "General
                    Loan".
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    For an applied loan, the project proposal has to be
                    submitted along with the loan application in a specified
                    format provided by "Dhaka Credit" (assistance can be
                    provided if required).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Loan steps:
                    <ul className="my-2">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                      >
                        3rd step – maximum Tk. 30,00,000 (30 Lac).
                      </motion.li>
                      <p>
                        If you take a loan and repay it in a minimum of 6
                        monthly installments and if you take a loan of at least
                        50% of one step, you will get the next step loan.
                      </p>
                    </ul>
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Loans will be approved based on the estimated cost of the
                    project proposal.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Approved loan money will be repaid in multiple installments
                    as per project requirements.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Loan annual Interest is @ 12%.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Regular repayment of the loan will result in a rebate of 10%
                    of the total interest
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    A service charge of Tk.1,000 / – will be applicable for the
                    loan applied for which will have to be paid by account payee
                    bank check in the name of the association.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    The loan applicant has to extend all possible cooperation
                    during the inspection of the project by "Dhaka Credit".
                  </motion.li>
                </ol>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Loan Repayment Policy
                </motion.h4>
                <ol className="mt-5 list-decimal px-3 md:mx-10 lg:mx-10 xl:mx-10">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Loan interest will be calculated on daily basis from the
                    date of disbursement.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The first 6 months installment payment is not mandatory but
                    only interest has to be paid.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Loan repayment installments:
                    <ul className="my-2">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                      >
                        1st step – maximum Tk. 500,000 in a maximum of 36
                        installments.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                      >
                        2nd step – maximum Tk. 15,00,000 in a maximum of 48
                        installments.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                      >
                        3rd step – maximum Tk. 30,00,000 in a maximum of 60
                        installments.
                      </motion.li>
                    </ul>
                    <p>
                      However, in case of termination of the loan by the member,
                      the entire loan amount will be subject to one-time
                      repayment, and a letter of exemption will have to be
                      taken.
                    </p>
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    Failure to repay the loan will result in the recovery of
                    fines and other expenses as per the prevailing rules of
                    "Dhaka Credit".
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    The loan will be covered under the same "Loan Protection
                    Scheme" (LPS) as other loans, i.e. the "Loan Protection
                    Scheme" will have to be paid at the rate of 50 paise per
                    thousand on the loan taken per month.
                  </motion.li>

                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    If the loan taken is the defaulted for more than 3 months,
                    necessary action will be taken as per the defaulting loan
                    recovery policy and decision of the board.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2"
                  >
                    According to the type of business, The loan applicant has to
                    deposit the income from the project on a daily/ weekly/
                    monthly basis into the "Dhaka Credit" savings/ STD account.
                  </motion.li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default EntrepreneurLoan;
