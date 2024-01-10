import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function GeneralLoan() {
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
          <div className="text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <motion.h2
                variants={MyVariants.SlideInFromRight}
                className="mb-2 p-1 text-2xl font-bold text-onSurface lg:text-3xl"
              >
                General Loan
              </motion.h2>
              <div className="mb-4 p-1 text-justify text-onSurface">
                <motion.p variants={MyVariants.SlideInFromRight}>
                  For any productive and personal use a regular member can take
                  this loan to serve various purposes in general.
                </motion.p>

                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  className="mt-5 text-xl font-semibold text-onSurfaceVariant lg:text-2xl"
                >
                  Features
                </motion.h4>
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  className="mt-5 text-onBackground"
                >
                  According to Loan Ceiling, the following amounts are allowed
                  to be taken as Loan by the regular members of the Union:
                </motion.p>
                <ul className="mt-5">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Highest Loan: BDT 40 LAC.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Interest Rate: 12% (yearly).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Installment: 36/60/72/96/120/144 & 180 Equal Installments.
                    (depends on loan amount)
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i> There
                    are10% rebate facilities on paid interest for regular
                    loanee.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i> There
                    are Loan Protection Scheme (LPS) coverage facilities.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i> A member
                    can apply new loan after paid existing loan and loan is
                    process within very short time
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i> There
                    are Top-up & Refinancing loan facilities for regular loanee.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i> There
                    are 30% book surety & 70 % MICR Cheque surety facilities.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i> General
                    savings & HDS deposit also count as share for loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    According to Loan Ceiling, the following amounts are allowed
                    to be taken as a loan by the regular members of the Union:
                  </motion.li>
                </ul>
              </div>

              <div className=" px-2 ">
                <div className="grid grid-cols-1 flex-wrap gap-1 md:grid-cols-2 lg:grid-cols-4">
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <h2 className="title-font p-2  text-lg font-medium text-onSurface sm:text-xl">
                      1st Loan
                    </h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 4 months previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 100,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      2nd Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 3 months previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 300,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      3rd Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 3 months previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 5,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      4th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 7,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      5th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 10,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      6th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 12,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      7th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 15,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      8th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>10
                        times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 18,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      9th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 25,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      10th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 30,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      11th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 35,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    className=" w-full border border-gray-700  py-4  "
                  >
                    <motion.h2 className="title-font  p-2 text-lg  font-medium text-onSurface sm:text-xl">
                      12th Loan
                    </motion.h2>

                    <ul className="p-2 text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        10 times on 2 months (60 days) previous share amount
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Highest BDT 40,00,000
                      </motion.li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default GeneralLoan;
