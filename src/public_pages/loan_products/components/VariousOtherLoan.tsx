import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function VariousOtherLoan() {
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
              <div className="mb-4 divide-y-2 divide-gray-100 p-1 text-justify text-onSurface">
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Dhaka Credit Monthly Savings
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This loan provides financial support during the time of need
                    against the applicant’s "Monthly Savings Account".
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities will be given up to 90% of the deposit
                      after completing 2 years.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 2.5% extra than that of the receiving
                      interest from MSP or Interest rate is 11% for 5 years and
                      11.5% for 10 years duration of the deposit.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Dhaka Credit Education Savings
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This Loan is taken against the applicant’s "Educational
                    Savings Account" to support further education.
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities up to 2 times the amount of the deposited
                      amount.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 0% (Condition apply)
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Applicant completing study up to higher secondary Level
                      and 5 years of opening the account.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      The account holder may avail loan up to 80% of Deposit
                    </motion.li>
                  </ul>
                </div>
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Dhaka Credit Troimashik Savings
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This loan is provided to the applicant against the
                    "Troimashik Savings".
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities will be given up to 90% of the Deposit.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      This facility will be eligible from opening the account
                      Date.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 2.5% extra than that of the receiving
                      interest from TSP.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Dhaka Credit Double Deposit Savings
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This Loan is provided to the applicant against the
                    applicant’s "Double Deposit Savings".
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Under this scheme, applicants get loans on instant
                      facility up to 95% of the total deposit
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      This facility will be eligible from opening the account
                      Date.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      TInterest Rate: 2.5% extra than that of the receiving
                      interest from Deposit.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Dhaka Credit Aged Savings
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    Retired applicants can take this loan against their Aged
                    Savings a/c to get the necessary financial support in their
                    time of need.
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities up to 90% of the deposit after completing
                      2 years.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 2.5% extra than that of the receiving
                      interest from Deposit.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner
                    </motion.li>
                  </ul>
                </div>
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Marriage Deposit Scheme (DCMDS)
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This loan is taken against the deposit made by the members
                    of the marriage deposit scheme.
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities up to 90% of the deposit after completing
                      2 years.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 2.5% extra than that of the receiving
                      interest from Deposit.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>
                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Divine Mercy Hospital Ltd. Bond
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This loan is taken against the hospital bond taken by the
                    member.
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities up to 95% can be given against the
                      hospital bond.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 15%.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>

                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Millionaire Deposit Scheme (MDs)
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This loan is taken against the deposit made by the members
                    of the millionaire deposit scheme.
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities up to 95% of the deposit after completing
                      2 years.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 2.5% extra than that of the receiving
                      interest from Deposit.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>

                {/*  */}

                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Pension Benefit Scheme (PBS)
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This loan is taken against the deposit made by the members
                    of the Pension Benefit scheme.
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities up to 90% of the deposit after completing
                      2 years.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 12% of the Deposit.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments.
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>

                <div className="">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl "
                  >
                    Loan Against Koti Poti Deposit Scheme (KDS)
                  </motion.h4>

                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5"
                  >
                    This loan is taken against the deposit made by the members
                    of the millionaire deposit scheme.
                  </motion.p>

                  <motion.h5
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-medium "
                  >
                    Features
                  </motion.h5>
                  <ul className="my-5">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan facilities up to 95% of the deposit after completing
                      2 years.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest Rate: 12% of the Deposit.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Loan Tenure: maximum 12/24/36/60 monthly installments
                    </motion.li>

                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Interest rate is counted on the basis of a continuous
                      reducing manner.
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default VariousOtherLoan;
