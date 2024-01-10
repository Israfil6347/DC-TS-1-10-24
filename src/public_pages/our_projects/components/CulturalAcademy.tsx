import Samay from 'assets/images/service/cultural_academy.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function CulturalAcademy() {
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
              className="float-left w-full  lg:w-2/5"
            >
              <img src={Samay} className="w-full  pb-5 lg:pr-6" alt="" />
            </motion.div>

            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="text-2xl font-bold lg:text-3xl"
            >
              Cultural Academy
            </motion.h2>
            <div className="mt-3 p-1 text-justify">
              <motion.p
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
              >
                On January 17, 2009, "Dhaka Credit" introduced a cultural
                academy for the growth & development of the growing generation
                of the Christian community. At present, there are 2 academies,
                one in Tejgaon Catholic Primary School and the other one at
                Nadda in the Dhaka metropolitan area.
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
                  Develop cultural attributes for new generations.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Preservation of tradition, culture & history.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Creating the opportunity to perform in the national and
                  international arena.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Create equal opportunity for all.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  The admission fee is BDT 500 and the monthly fee is BDT
                  300(Its depend on year).
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  We teach: guitar, tabla, music & dance Art.
                </motion.li>
              </ul>

              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-3 text-xl font-semibold lg:text-2xl"
              >
                Our Teachers
              </motion.h4>

              <ul className="mt-3 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Principal: Anima Mukti Gomes, a renowned folk music artist in
                  Bangladesh.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Other Teachers: Jhoton Silvester Serao, Dimple Rodrigues, Anup
                  D’Costa, Anisur Rahman, Aditi Tumpa, Abhi Rodrigues, Kenedy
                  D’Costa, Collinces Barnard Gomes, Manik Sen, Sankar Kumar
                  Paul, and Swapon Kumar Acharjo.
                </motion.li>
              </ul>
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-3 text-xl font-semibold lg:text-2xl"
              >
                Specialty
              </motion.h4>

              <ul className="mt-3 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Excellent environment.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Good Quality.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Modern cultural instrument.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Cultural tours.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Certificate.
                </motion.li>
              </ul>
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-3 text-xl font-semibold lg:text-2xl"
              >
                Class Schedule
              </motion.h4>
              <ul className="mt-3 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Tejgaon Catholic Primary School: Thursday, (3 PM-7 PM).
                </motion.li>
              </ul>

              <div className="mt-10 border-t">
                <ul>
                  <motion.h2 className="mt-5 text-xl font-semibold lg:text-2xl">
                    Address & Contact Info
                  </motion.h2>
                  <li>Call: 01709-993085, 01709993086</li>
                  <li>Email: info@cccul.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default CulturalAcademy;
