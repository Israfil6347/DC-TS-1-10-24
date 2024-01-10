import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function DcGymLoan() {
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
                Gym Loan
              </motion.h2>
              <motion.div className="mb-4 p-1 text-justify text-onSurface">
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mb-4 p-1 text-justify text-onSurface"
                >
                  Every individual wants to lead a healthy life, hence "Dhaka
                  Credit’s" "Gym Loan" can be an important part to lead a
                  healthy lifestyle.
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
                    Interest Rate: 12% (Flat rate).
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Loan Tenure: 12 months.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The union provides loans to members for one year at a time.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Loan amount will be directly paid as an advance gym fee.
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
                    Must be a full member of the union.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Must be regular in depositing savings in the union.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Must be a regular member of the health care scheme.
                  </motion.li>
                </ul>
              </motion.div>
              <div className="border-t border-gray-200">
                <div className="mt-10 flex flex-wrap p-2">
                  <div className="border border-gray-200 p-4 md:w-full  lg:w-1/2 xl:w-1/4">
                    <motion.h2
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="title-font mb-2 text-lg font-medium text-onSurface sm:text-xl"
                    >
                      Monthly
                    </motion.h2>

                    <ul className="text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For general Member's 1,200 Taka.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For a student's BDT 800 Taka.
                      </motion.li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 md:w-full  lg:w-1/2 xl:w-1/4">
                    <motion.h2
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="title-font mb-2 text-lg font-medium text-onSurface sm:text-xl"
                    >
                      Tri-Monthly
                    </motion.h2>

                    <ul className="text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For general member's 3,000 Taka.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For a student's BDT 2,285 Taka
                      </motion.li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 md:w-full  lg:w-1/2 xl:w-1/4">
                    <motion.h2
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="title-font mb-2 text-lg font-medium text-onSurface sm:text-xl"
                    >
                      Half-Yearly
                    </motion.h2>

                    <ul className="text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For general member's 6,000 Taka.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For a student's BDT 4,000 Taka.
                      </motion.li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 md:w-full  lg:w-1/2 xl:w-1/4">
                    <motion.h2
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="title-font mb-2 text-lg font-medium text-onSurface sm:text-xl"
                    >
                      Yearly
                    </motion.h2>

                    <ul className="text-onSurface">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For general member's 12,000 Taka.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        For a student's BDT 6,850 Taka.
                      </motion.li>
                    </ul>
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

export default DcGymLoan;
