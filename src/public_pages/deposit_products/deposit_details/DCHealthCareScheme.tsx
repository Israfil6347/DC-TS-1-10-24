import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function DCHealthCareScheme() {
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
                Health Care Scheme
              </motion.h2>
              <div className="mb-4 p-1 text-justify">
                <motion.div
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  Our lives revolve around uncertainty and unpredictability. One
                  may never know what sort of illness the individual has to
                  overcome. During those illnesses, it's better to have "Dhaka
                  Credit’s Health Care Scheme" on your side so that you don’t
                  have to be dependent on anyone for financial assistance.
                </motion.div>

                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-5 text-xl font-semibold lg:text-2xl"
                >
                  Objectives, Features & Conditions
                </motion.h4>
                <ul className="mt-5 list-disc">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The duration of this account is 5 years & can be renewed.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Members above 50 years old should provide health
                    certificates about their Cholesterol, Diabetics, Criotinin,
                    H.B/SGPT, Hepatitis B & ECG.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The member should have a "Savings Account" with "Dhaka
                    Credit" and required to deposit monthly premiums regularly
                    to avail of this Health Service.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Any adult can open this account. In the case of members
                    below 18, their guardians can open the account for them.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    HCS facility decreases the dependency on others for
                    treatment cost during illness.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Age-wise installment
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    And this policy is avail up to 70 years.
                  </motion.li>
                </ul>
                <ul className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-4">
                  <li className="flex flex-col rounded-md border p-4">
                    <p>
                      <strong className="pr-1">Age:</strong>Below 25 years
                    </p>
                    <p>
                      <strong className="pr-1">Amount:</strong>BDT 50, 100, &
                      150
                    </p>
                  </li>
                  <li className="flex flex-col rounded-md border p-4">
                    <p>
                      <strong className="pr-1">Age:</strong>25-45 Years
                    </p>
                    <p>
                      <strong className="pr-1">Amount:</strong>BDT 50, 100, 150,
                      200 & 300
                    </p>
                  </li>
                  <li className="flex flex-col rounded-md border p-4">
                    <p>
                      <strong className="pr-1">Age:</strong>46-65 Years
                    </p>
                    <p>
                      <strong className="pr-1">Amount:</strong>BDT 100, 200,
                      300, 400 & 600
                    </p>
                  </li>
                  <li className="flex flex-col rounded-md border p-4">
                    <p>
                      <strong className="pr-1">Age:</strong>66-70 Years
                    </p>
                    <p>
                      <strong className="pr-1">Amount:</strong>BDT 300, 400 &
                      600
                    </p>
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

export default DCHealthCareScheme;
