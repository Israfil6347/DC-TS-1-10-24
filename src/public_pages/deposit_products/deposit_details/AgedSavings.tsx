import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function AgedSavings() {
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
        <div className="px-4 text-left md:text-justify lg:text-justify">
          <div className=" text-onBackground">
            <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
              <motion.h2
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-2 p-1  text-2xl font-semibold lg:text-3xl"
              >
                Aged Savings
              </motion.h2>
              <div className="mb-4 p-1 text-justify text-onSurface">
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  A typical Christian businessman encounters many hurdles to
                  keep their business running such as cash constraints. to
                  counter such situations, the union has started a “Bill Pay
                  Loan” to support & help in overcoming the financial crisis
                  faced by businessmen. "Aged Savings" scheme is specially
                  designed to ensure financial security at the time of
                  retirement.
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
                    Monthly Deposit: BDT (200, 300, 500, 700, 1000, 1500, and,
                    2000).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Interest Rate: 9% per annum
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Flexible Tenure: (10, 15, 20, 25, or 30 years)
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    After completing 2 years, 90% of the deposit amount can be
                    received as loan in case of an emergency, a deposit can be
                    withdrawn at anytime as premature encashment(Condition
                    apply).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Any Savings Account holder can open one account under this
                    scheme.
                  </motion.li>
                </ul>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 mb-4 text-xl font-semibold lg:text-2xl"
                >
                  Total Payable amount in Maturity
                </motion.h4>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">2,000</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">3,82,286</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">7,38,774</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">12,87,275</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">21,31,212</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">34,29,713</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">1,500</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">2,86,711</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">5,54,074</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">9,65,444</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">15,98,390</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">25,72,255</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">1,000</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">1,91,140</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">3,69,381</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">6,43,625</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">10,65,586</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">17,14,825</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">700</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">1,33,794</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">2,58,560</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">4,50,528</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">7,45,893</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">12,00,349</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">500</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">95,566</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">1,84,693</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">3,10,801</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">5,32,774</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">8,57,382</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md  md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">300</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">57,337</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">1,10,805</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">1,93,072</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">3,19,650</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">5,14,406</div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-1 gap-y-4 rounded-md   md:grid-cols-6 md:border-0 md:p-0">
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">Monthly Deposit:</div>
                    <div className="font-semibold">200</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">10 Years :</div>
                    <div className="">38,220</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">15 Years:</div>
                    <div className="">73,862</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">20 years:</div>
                    <div className="">1,28,702</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">25 Years :</div>
                    <div className="">2,13,077</div>
                  </div>
                  <div className="flex flex-col gap-1 border p-3">
                    <div className="font-bold">30 years:</div>
                    <div className="">3,42,900</div>
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

export default AgedSavings;
