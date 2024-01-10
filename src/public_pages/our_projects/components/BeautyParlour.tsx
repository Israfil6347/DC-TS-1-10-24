import image from 'assets/images/service/beauty_parlor.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function BeautyParlour() {
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
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="float-left w-full  lg:w-2/5"
            >
              <img src={image} className="w-full  pb-5 lg:pr-6" alt="" />
            </motion.div>
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="text-2xl font-bold lg:text-3xl"
            >
              Beauty Parlor
            </motion.h2>
            <div className="mt-3 p-1 text-justify">
              <motion.p
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
              >
                With the wedding season fast approaching, the demand for
                high-quality service and expert beauticians will be huge. To
                take the advantage of this situation, "Dhaka Credit" has
                recently launched its very own "Beauty Parlor" for its valuable
                members. The "Beauty Parlor" has all the necessary products and
                equipment required to rival the best beauty parlors in Dhaka
                city.
              </motion.p>
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-3 text-xl font-semibold lg:text-2xl"
              >
                Features
              </motion.h4>

              <ul className="mt-3 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Beautician with world class expertise.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Branded and high quality make up products and sophisticated
                  equipment that will suit every need of our valuable customers.
                </motion.li>
                {/* <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Expert beautician for all service
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Expert Trainer for trainee
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Opportunity for all trainee practical and theoretical
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Awarding certificate after completion the beautification
                  course
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Reasonable Course fee with accommodation facility
                </motion.li> */}
              </ul>
            </div>

            <div className="border-t md:mt-24">
              <ul>
                <motion.h2 className="mt-5 text-xl font-semibold lg:text-2xl">
                  Address & Contact Info
                </motion.h2>
                <li>Ka-29/A,</li>
                <li>Nadda Sarkerbari (Near Sarkerbari Mosque)</li>
                <li>Gulshan-2, Dhaka-1212</li>
                <li>
                  For more details Call: 01709993097, Visit Fb page-DC Beauty
                  Parlour
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default BeautyParlour;
