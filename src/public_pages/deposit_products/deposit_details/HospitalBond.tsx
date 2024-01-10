import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function HospitalBond() {
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
                Hospital Bond
              </motion.h2>
              <div className="mb-4 p-1 text-justify">
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  After its independence, the holy family hospital lost its
                  footing in the medical care sector for the christian community
                  as well as general public who are now struggling to get proper
                  with comparatively less costly medical treatment hence, "The
                  Christian Co-Operative Credit Union Ltd, Dhaka.," has decided
                  to build a state-of-The-Art hospital for the christian
                  community as well as the general public of bangladesh.
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
                    Bond Period and Value: Each bond costs 5000tk which is valid
                    for 15 years
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Interest Rate: The annual interest rate is given at 20%.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Transfer of Ownership: The ownership of the bond can be
                    transferred from one person to another with a specific
                    application along with a charge of 20tk per Bond.
                  </motion.li>
                </ul>
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl"
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
                    Application request should be given by the applicant for
                    buying one or more bonds.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Along with the application, 1 color passport-size photo of
                    each applicant and nominee should be provided by the
                    applicant.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    One person can buy multiple Bonds.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The account holder may avail loan up to Loan 95% of the
                    payable amount and Interest rate is @15%.
                  </motion.li>
                </ul>
              </div>

              <div className="">
                <div className="pt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-2">
                      <div className="h-full border p-8 text-left">
                        <motion.h4
                          variants={MyVariants.SlideInFromRight}
                          transition={MyTransition.Spring.Low}
                          className="text-md font-semibold lg:text-2xl"
                        >
                          More than 1 Year Less than 2 Years
                        </motion.h4>
                        <ul className="mt-5 list-disc">
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            1st Prize:1,00,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            2nd Prize:50,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            3rd Prize:25,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            4th Prize:15,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            5th Prize:10,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            6th-25th Prize:5,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            26th-50th Prize Prize:5,000Tk
                          </motion.li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="h-full border p-8 text-left">
                        <motion.h4
                          variants={MyVariants.SlideInFromRight}
                          transition={MyTransition.Spring.Low}
                          className="text-md font-semibold lg:text-2xl"
                        >
                          More than 2 years less then 3 years
                        </motion.h4>
                        <ul className="mt-5 list-disc">
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            1st Prize:2,00,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            2nd Prize:1,00,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            3rd Prize:50,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            4th Prize:25,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            5th Prize:15,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            6th-25th Prize:10,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            26th-50th Prize Prize:5,000Tk
                          </motion.li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="h-full border p-8 text-left">
                        <motion.h4
                          variants={MyVariants.SlideInFromRight}
                          transition={MyTransition.Spring.Low}
                          className="text-md font-semibold lg:text-2xl"
                        >
                          More than 3 Years Less than 4 Years
                        </motion.h4>
                        <ul className="mt-5 list-disc">
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            1st Prize:4,00,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            2nd Prize:2,00,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            3rd Prize:100,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            4th Prize:50,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            5th Prize:25,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            6th-25th Prize:20,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            26th-50th Prize Prize:10,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            50th-75th Prize:5,000Tk
                          </motion.li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="h-full border p-8 text-left">
                        <motion.h4
                          variants={MyVariants.SlideInFromRight}
                          transition={MyTransition.Spring.Low}
                          className="text-md font-semibold lg:text-2xl"
                        >
                          More than 4 Years
                        </motion.h4>
                        <ul className="mt-5 list-disc">
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            1st Prize:5,00,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            2nd Prize:2,50,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            3rd Prize:125,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            4th Prize:75,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            5th Prize:50,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            6th-25th Prize:20,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            26th-50th Prize Prize:10,000Tk
                          </motion.li>
                          <motion.li
                            variants={MyVariants.SlideInFromRight}
                            transition={MyTransition.Spring.Low}
                            className="mt-2 flex gap-2"
                          >
                            <i className="fa-regular fa-circle-check mt-1"></i>
                            50th-75th Prize:5,000Tk
                          </motion.li>
                        </ul>
                      </div>
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

export default HospitalBond;
