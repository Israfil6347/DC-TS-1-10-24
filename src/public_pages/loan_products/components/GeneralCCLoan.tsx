import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function GeneralCCLoan() {
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
                General Credit Ceiling Loan
              </motion.h2>
              <div className="mb-4 p-1 text-justify text-onSurface">
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  "General Credit Ceiling Loan" is created for the development
                  of the member’s standard of living and provides financial
                  assistance when the necessity arises.
                </motion.p>

                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Features
                </motion.h4>
                <ul className="mt-5 list-disc">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Highest Loan: BDT 500,000.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Interest Rate: 12% Yearly (Diminishing Manner).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Loan Tenure: Highest 3 years/ 36 equal monthly installments.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    For the security of the loan money, the applicant requires
                    surety from the members beyond family(s) for 30% surety
                    coverage.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Even with existing "General Loan", applicant can apply for
                    this loan.
                  </motion.li>
                </ul>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl "
                >
                  Requirements
                </motion.h4>
                <ul className="mt-5 list-disc">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Regular applying and repayment of 3 previous loans is
                    required to qualify for this loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Other family members of the applicant (if any in "Dhaka
                    Credit") must be regular in all transactions.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Must have surplus income for loan payment.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Applicant must provide BDT 1000 service charge by MICR
                    cheques.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    If the applicant takes 90% against LTSD, the applicant not
                    required to provide MICR cheques.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The applicant must open an LTSD accounts for 10% of the
                    sanctioned loan amount for 3 years on 8% yearly interest.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    For security reasons, the applicant has to provide 3 MICR
                    blank cheques along with undertaking of family members in
                    non-judicial stamp papers agreeing of Loan payments; and 30%
                    of the applied loan has to be deposited in the form of LTSD,
                    share or savings accounts.
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default GeneralCCLoan;
