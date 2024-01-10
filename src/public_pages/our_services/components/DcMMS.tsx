import image from 'assets/images/service/mms2.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function DcMMS() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <motion.div
      initial={'offscreen'}
      whileInView={'onscreen'}
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <motion.h2
              className="mb-2 text-2xl font-bold lg:text-3xl"
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Member Mobile Service (MMS) App
            </motion.h2>

            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-4 p-1 text-justify "
            >
              Dhaka Credit members have entered a digitization era. In 2010,
              "Dhaka Credit" launched its members mobile service (MMS) at the
              "CBCB" center during a workshop. The app is designed to provide
              convenience to the members through digital services.
            </motion.div>

            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="float-left w-full  lg:w-2/5"
            >
              <img src={image} className="pr-6 pb-5 " alt="" />
            </motion.div>

            <div className="px-4">
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 text-xl font-semibold lg:text-2xl"
              >
                Features
              </motion.h4>

              <ul className="mt-2 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  One account to another.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Cash withdrawal through ATM.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Information on member’s loan.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Surety status.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Savings & products information.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Emergency ambulance service.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  The contact number of all branches.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Instant loan (Starting from Tk. 5,000/- & upto Tk. 40,000/-).
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Deposit request through bank.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Mini statement.
                </motion.li>
              </ul>
            </div>

            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mx-auto mt-20 w-full text-center md:text-left lg:w-3/4 xl:w-1/2"
            >
              <MyButton
                type="button"
                styleClass="transition animate-duration-1000  hover:animate-heartBeat  rounded bg-primary py-2 px-4 text-onPrimary"
                label={''}
                name={''}
              >
                <Link
                  to="https://play.google.com/store/apps/details?id=com.dhakacredit.cccul&amp;hl=en&amp;gl=US"
                  target="_blank"
                  aria-label="Google Play"
                  rel="noopener noreferrer"
                >
                  Click to Download the App
                </Link>
              </MyButton>
            </motion.div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default DcMMS;
