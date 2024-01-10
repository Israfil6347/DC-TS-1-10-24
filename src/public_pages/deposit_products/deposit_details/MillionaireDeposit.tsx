import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function MillionaireDeposit() {
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
                Millionaire Scheme
              </motion.h2>
              <div className="mb-4 p-1 text-justify">
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  This is a premium monthly deposit scheme that is designed for
                  aspiring members by helping them accumulate approximately BDT
                  10 Lac within the shortest period.
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
                    Flexible Tenure: : 3,5,8,10,12,15 years
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Great opportunity to become a millionaire within 3 years.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    After 3 Years 95% of the total deposit can be taken as a
                    loan.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    It can be used as surety for self and family member’s loans.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    If the depositor fails to pay 1 monthly installment,
                    Maturity date will be extended for 1 month.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    the depositor wishes to withdraw the deposited amount before
                    the agreed term (condition apply).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Any savings account holder can open one or multiple accounts
                    under this scheme.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    For the maturity amount of 1000000 taka, the duration and
                    monthly deposit amount is given below:
                  </motion.li>
                </ul>
                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-6">
                  <div className="flex flex-col gap-1 border border-gray-600 p-3">
                    <div className="">
                      <span className="mr-1 font-bold"> Duration:</span> 3 years
                    </div>
                    <div className="">
                      <span className="mr-1 font-bold">Monthly Deposit:</span>
                      24,300৳
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 border border-gray-600 p-3">
                    <div className="">
                      <span className="mr-1 font-bold"> Duration:</span>5 years
                    </div>
                    <div className="">
                      <span className="mr-1 font-bold">Monthly Deposit:</span>
                      13,275৳
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 border border-gray-600 p-3">
                    <div className="">
                      <span className="mr-1 font-bold"> Duration:</span>8 years
                    </div>
                    <div className="">
                      <span className="mr-1 font-bold">Monthly Deposit:</span>
                      7,175৳
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 border border-gray-600 p-3">
                    <div className="">
                      <span className="mr-1 font-bold"> Duration:</span> 10
                      years
                    </div>
                    <div className="">
                      <span className="mr-1 font-bold">Monthly Deposit:</span>
                      5,175৳
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 border border-gray-600 p-3">
                    <div className="">
                      <span className="mr-1 font-bold"> Duration:</span>12 years
                    </div>
                    <div className="">
                      <span className="mr-1 font-bold">Monthly Deposit:</span>
                      3,890৳
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 border border-gray-600 p-3">
                    <div className="">
                      <span className="mr-1 font-bold"> Duration:</span>15 years
                    </div>
                    <div className="">
                      <span className="mr-1 font-bold">Monthly Deposit:</span>
                      2,650৳
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default MillionaireDeposit;
