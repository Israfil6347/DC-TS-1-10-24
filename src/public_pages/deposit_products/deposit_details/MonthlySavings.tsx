import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function MonthlySavings() {
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
                className="mb-2 p-1 text-3xl font-semibold"
              >
                Monthly Saving Account
              </motion.h2>
              <div className="mb-4 p-1 text-justify ">
                "Monthly Savings" is designed for building awareness among the
                people about forthcoming financial needs that may arise for any
                situation, inspiring the members to save regularly for future
                difficulties.
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
                    Monthly Deposits: BDT (200, 300, 500, 1000, and 1500) or any
                    multiple amounts from 1,000/- up to 25,000/-.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Interest Rate: (8.5% – 5 Years) and (9% – 10 Years)
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Flexible tenure: 5 & 10 Years.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Loan is available after 2 years, and 90% of the total
                    deposit can be received as
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
                </ul>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 mb-6 text-2xl font-semibold"
                >
                  Installment and Total Payable after Maturity:
                </motion.h4>
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <li className="flex w-full flex-col gap-2 divide-y  rounded-md border  border-gray-300 p-4">
                    <div className="text-lg font-bold uppercase md:text-center">
                      Monthly Deposit: 200৳
                    </div>
                    <ul className=" grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">5 Years:</span> 14,869
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 200
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 15,069
                      </li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">10 Years:</span> 38,220
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 200
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 38,420
                      </li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border   border-gray-300 p-4">
                    <div className="text-lg font-bold uppercase md:text-center">
                      Monthly Deposit: 300৳
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">5 Years:</span> 22,607
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 300
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 22,607
                      </li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">10 Years:</span> 57,337
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 300
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 57,637
                      </li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border   border-gray-300 p-4">
                    <div className="text-lg font-bold uppercase md:text-center">
                      Monthly Deposit: 500৳
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">5 Years:</span> 37,677
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 500
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 37,677
                      </li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">10 Years:</span> 95,566
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 500
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 96,066
                      </li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border   border-gray-300 p-4">
                    <div className="text-lg font-bold uppercase md:text-center">
                      Monthly Deposit: 1000৳
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">5 Years:</span> 74,357
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 1000
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 75,357
                      </li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">10 Years:</span>
                        1,91,140
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 1000
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 1,92,140
                      </li>
                    </ul>
                  </li>
                  <li className="flex w-full flex-col gap-2 divide-y rounded-md border   border-gray-300 p-4">
                    <div className="text-lg font-bold uppercase md:text-center">
                      Monthly Deposit: 2000৳
                    </div>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">5 Years:</span> 1,48,720
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 2000
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 1,50,720
                      </li>
                    </ul>
                    <ul className="grid grid-cols-1 gap-1 md:grid-cols-3">
                      <li className="">
                        <span className="font-semibold">10 Years:</span>
                        3,82,286
                      </li>
                      <li className="">
                        <span className="font-semibold">Bonus:</span> 2000
                      </li>
                      <li className="">
                        <span className="font-semibold">Total:</span> 3,84,286
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default MonthlySavings;
