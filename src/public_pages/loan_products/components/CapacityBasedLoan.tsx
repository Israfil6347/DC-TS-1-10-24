import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import PageContainer from "global_shared/components/PageContainer";
import { useEffect } from "react";

function CapacityBasedLoan() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-2 p-1 text-2xl font-bold text-onSurface lg:text-3xl"
            >
              Capacity Based Loan
            </motion.h2>
            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-4 p-1 text-justify text-onSurface"
            >
              This loan scheme is based on the capacity of the applicants and
              how much & how many loans the applicants has taken and repaid
              before.
            </motion.div>
            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-5 text-xl font-semibold text-onSurface lg:text-2xl"
            >
              Features
            </motion.h4>

            <ul className="mt-5 list-disc">
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="animate-fadeInRight animate-delay-75 mt-2 flex items-center text-onSurface"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Highest Loan: BDT 15,00,000 (Based on net income and capacity of
                return)
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="animate-fadeInRight animate-delay-100 mt-2 flex items-center text-onSurface"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Interest Rate: 13.5% yearly (continuous reducing manner)
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="animate-fadeInRight animate-delay-150 mt-2 flex items-center text-onSurface"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Loan Tenure: 5 years/ 60 monthly installments
              </motion.li>
            </ul>

            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-5 text-xl font-semibold text-onSurface lg:text-2xl"
            >
              Requirements
            </motion.h4>

            <ul className="mt-5 list-disc">
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="animate-fadeInRight animate-delay-75 mt-2 flex items-center text-onSurface"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Application should be a regular member (continuous 3 years) by
                depositing in share & savings account.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="animate-fadeInRight animate-delay-100 mt-2 flex items-center text-onSurface"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Member has to fulfill first 3 ceiling of loan from the union and
                repaid regularly.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="animate-fadeInRight animate-delay-150 mt-2 flex items-center text-onSurface"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                BDT 3,00,000 of general loan should be taken and repaid
                regularly to apply for BDT 10,00,000 (10 Lac).
              </motion.li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default CapacityBasedLoan;
