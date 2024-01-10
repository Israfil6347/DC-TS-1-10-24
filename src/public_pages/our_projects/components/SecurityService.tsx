import image from 'assets/images/service/security.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function SecurityService() {
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
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-24 lg:px-20">
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="text-2xl font-bold lg:text-3xl"
            >
              Security Service
            </motion.h2>
            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 text-justify"
            >
              "Dhaka Credit’s" security service provides security guards, both
              male & female to various national and international companies
              including different private, public & diplomatic offices &
              apartments. Without any doubt and hesitation, one can handover the
              responsibility for the security of their life, wealth & whatever
              valuable belongings. "Dhaka Credit’s" security service is always
              ready anytime and anywhere.
            </motion.p>

            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="float-left my-3 w-full  lg:w-2/5"
            >
              <img src={image} className="w-full pb-5 lg:pr-6" alt="" />
            </motion.div>

            <div className="mb-7 flex flex-wrap p-1">
              <div className="p-4 md:w-1/2">
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="text-xl font-semibold lg:text-2xl"
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
                    Honest and trustworthy
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Well mannered and disciplined
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Vigilant and reliable
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Capable and loyal
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Physically fit and well-trained
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Combat ready security force
                  </motion.li>
                </ul>
              </div>
              <div className="p-4 md:w-1/2">
                <motion.h4
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="text-xl font-semibold lg:text-2xl"
                >
                  Our Clients
                </motion.h4>

                <ul className="mt-2 list-disc">
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Toma Group
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    AG Church, Moghbazar
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Pagar Housing President House
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Barnali Co-Operative Credit Union Ltd.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    Pagar Christian Co-Operative Credit Union Ltd.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-2 flex gap-2"
                  >
                    <i className="fa-regular fa-circle-check mt-1"></i>
                    The Metropolitan Co-Operative Credit Union.
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default SecurityService;
