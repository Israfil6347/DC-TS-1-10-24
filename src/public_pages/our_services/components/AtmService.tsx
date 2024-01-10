import image from 'assets/images/service/atm.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function AtmService() {
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
      className="group cursor-pointer"
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:px-10 md:py-10 lg:px-20 lg:py-20">
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="text-2xl font-bold lg:text-3xl"
            >
              ATM Service
            </motion.h2>
            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-3 text-justify"
            >
              Every organization has a dream of achieving something ambitious
              during its operation. Dhaka Credit one of those ambitious dream
              was to be the first Credit Union in Bangladesh to successfully
              launch a 24×7 ATM service for its customers. Facilities with
              state-of-the-art technology and security that can rival the
              services provided by the banks which are provided to our esteemed
              & valuable members with services designed especially for the
              convenience of our members.
            </motion.p>

            <div className="grid grid-cols-1 md:flex">
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="float-left mx-3 mt-3 h-auto w-full lg:w-2/5 "
              >
                <img src={image} className="w-full" alt="" />
              </motion.div>
              <div className="w-full lg:w-3/5">
                <div className="mb-4 mt-3 p-1 text-justify">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mb-4 text-xl font-semibold lg:text-2xl"
                  >
                    Features
                  </motion.h4>

                  <ul className="space-y-3">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      State-of-the-art technology.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Credit and debit card features for our valuable members.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Different grades of card based on the limit of the member,
                      such as silver, gold and platinum.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      ATM booth is open 24 hours a day, 7 days a week & 365 days
                      a year.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Withdraw cash instantly by avoiding waiting time through
                      the use of a Cheque.
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="space-x-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      <span>
                        The "ATM" is located in the following locations for the
                        member's convenience:
                      </span>
                    </motion.li>
                    <motion.ol
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="ml-10 flex list-decimal flex-wrap gap-x-8"
                    >
                      <li>Head Office</li>
                      <li>Shadhonpara </li>
                      <li>Monipuripara </li>
                      <li>Nadda</li>
                      <li>Savar </li>
                      <li>Hasnabad </li>
                      <li>Nagori </li>
                      <li>Pagar </li>
                      <li>John Vianney Hospital</li>
                      <li>Mirpur</li>
                    </motion.ol>
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

export default AtmService;
