import image from 'assets/images/service/ambulance.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function AmbulanceService() {
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
          <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="float-left w-full lg:w-2/5"
            >
              <img src={image} className="w-full pb-5 lg:pr-6" alt="" />
            </motion.div>

            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="p-1 text-3xl font-bold"
            >
              Ambulance Service
            </motion.h2>
            <div className="mt-3 p-1 text-justify">
              <motion.p
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
              >
                "Dhaka Credit" has its own "Ambulance Service" for member's and
                their families’ emergency needs. This service has been able to
                ensure the members health care at a very fast and affordable
                cost. Dial us for your urgent need.
              </motion.p>

              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-3 text-2xl font-semibold"
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
                  24/7 hrs. and comparatively low-cost service.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Safe, comfortable, and experienced service.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Oxygen on board.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Portable power and climate controlled storage.
                </motion.li>
              </ul>

              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-3 text-2xl font-semibold lg:mt-28"
              >
                Service Charge
              </motion.h4>

              <ul className="mt-2 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Inside dhaka city: BDT 1,500/-.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Up-down: BDT (1500+1500)= 3,000/-.
                </motion.li>

                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Outside dhaka: extra BDT 15/- per kilometer.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Waiting Charge: no charge for 1st hour, next hour BDT 100 per
                  hour.
                </motion.li>
              </ul>
            </div>
            <div className="mt-20 border-t">
              <ul>
                <motion.h2 className="mt-5 p-1 text-2xl font-bold">
                  Address
                </motion.h2>
                <li>Rev. Fr Charles J. Young Bhaban</li>
                <li>173/1/A, East Tejturi Bazar,</li>
                <li>Tejgaon, Dhaka-1215.</li>
                <li>For Emergency Call: 01716-399949, 01709-815466.</li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default AmbulanceService;
