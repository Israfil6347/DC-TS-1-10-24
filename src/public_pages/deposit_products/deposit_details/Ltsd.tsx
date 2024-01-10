import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function Ltsd() {
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
                className="mb-2 p-1 text-2xl font-semibold lg:text-3xl"
              >
                LTSD Account
              </motion.h2>
              <div className="mb-4 p-1 text-justify">
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  LTSD helps the depositor earn a high rate of interest for a
                  fixed term with flexible tenure.
                </motion.div>

                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl"
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
                    Amount more than BDT 10,000/- can be placed as LTSD.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Flexible Tenure: (6, 12, 24, 36, or 60 months)
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Immediately after opening the account, 90% of the deposit
                    can be received as loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Auto-renewal on maturity according to depositor’s
                    instruction.
                  </motion.li>

                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Instant loan, it can also be used as surety for self-loan or
                    family members.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The account holder may avail loan up to Loan 90% of the
                    payable amount. This facility will be eligible from opening
                    the account Date.
                  </motion.li>

                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The account holder also avails Double loan against Deposit.
                  </motion.li>

                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    It can also be used as surety for self-loan or family
                    members.
                  </motion.li>

                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Deposit can be withdrawn at any time, in case of emergency
                    as premature encashment (Condition apply).
                  </motion.li>

                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Tenure-wise interest rate:
                  </motion.li>
                </ul>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-2 rounded-md md:grid-cols-3 lg:grid-cols-5">
                <div className="flex flex-col gap-1 rounded-md border p-3">
                  <div className="">
                    <span className="mr-1 font-bold">Duration: </span>6 months
                  </div>
                  <div className="">
                    <span className="mr-1 font-bold">Interest: </span>8%
                  </div>
                </div>
                <div className="flex flex-col gap-1 rounded-md border p-3">
                  <div className="">
                    <span className="mr-1 font-bold">Duration: </span>12 months
                  </div>
                  <div className="">
                    <span className="mr-1 font-bold">Interest: </span>9%
                  </div>
                </div>
                <div className="flex flex-col gap-1 rounded-md border p-3">
                  <div className="">
                    <span className="mr-1 font-bold">Duration: </span>24 months
                  </div>
                  <div className="">
                    <span className="mr-1 font-bold">Interest: </span>9.50%
                  </div>
                </div>
                <div className="flex flex-col gap-1 rounded-md border p-3">
                  <div className="">
                    <span className="mr-1 font-bold">Duration: </span>36 months
                  </div>
                  <div className="">
                    <span className="mr-1 font-bold">Interest: </span>10.50%
                  </div>
                </div>
                <div className="flex flex-col gap-1 rounded-md border p-3">
                  <div className="">
                    <span className="mr-1 font-bold">Duration: </span>60 months
                  </div>
                  <div className="">
                    <span className="mr-1 font-bold">Interest: </span>11%
                  </div>
                </div>
              </div>

              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-2 p-1 pt-10 text-2xl font-semibold lg:text-3xl"
              >
                Requirements: To Open LTSD Account
              </motion.h4>

              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-5 text-xl font-semibold lg:text-2xl"
              >
                Individual Person
              </motion.h4>
              <ul className="mt-5 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Applicant’s NID copy
                </motion.li>

                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Nominee’s photo-1, Membership/ savings number
                </motion.li>

                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  If Nominee is not A/C holder of credit union then submit NID/
                  Birth certificate and photo
                </motion.li>
              </ul>

              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-5 text-xl font-semibold lg:text-2xl"
              >
                Joint Account
              </motion.h4>

              <ul className="mt-5 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Joint Savings Account and Individual savings Account
                </motion.li>

                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Applicant’s NID copy
                </motion.li>

                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Nominee’s photo-1, Membership/ savings number
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  If Nominee is not A/C holder of credit union then submit NID/
                  Birth certificate and photo
                </motion.li>
              </ul>

              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-5 text-xl font-semibold lg:text-2xl"
              >
                Organization
              </motion.h4>

              <ul className="mt-5 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Board Decision/ Resolution
                </motion.li>

                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Applicant’s NID copy
                </motion.li>

                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Applicant’s and Nominee’s photo-1
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Authorization Letter
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default Ltsd;
