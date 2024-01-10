import dcSchoolImage from 'assets/images/project/dcschool.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function School() {
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
            <div className="animate-fadeInLeft float-left w-full lg:w-2/5">
              <img
                src={dcSchoolImage}
                className="animate-fadeInLeft w-full pb-5 lg:pr-6"
                alt=""
              />
            </div>
            <div className="">
              <motion.h2
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-2 p-1 text-2xl font-bold lg:text-3xl"
              >
                Dhaka Credit Union School
              </motion.h2>
              <div className="mb-4 p-1 text-justify">
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  School is one of the most important aspects of any society as
                  they nurture and develop the important potential bright
                  futures of our society. "Dhaka Credit Union School" was
                  established in 2009 along with 16 students the school started
                  its journey. Currently, the number of students is more than
                  300. The school is spreading the light of knowledge in the
                  surrounding areas of Nadda & Bashundhara of Dhaka. On 26th Feb
                  2017, the school moved to a new building. With time, the
                  school is becoming more popular among the people of the
                  community.
                </motion.p>

                <div className="flex flex-wrap p-1">
                  <div className="p-4  md:w-1/2">
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
                        Dhaka Credit Union School was established in 2009 for
                        students irrespective of their religion, with the
                        mission to maintain a standard of education.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Monthly tuition fees for the students are fixed at a
                        reasonable cost.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Presently the school provides classes from Play to class
                        ten (X).
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        At present, the total number of students are 300 plus.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        There is a plan to upgrade the school to a college and
                        consecutively university as well.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Upgraded teaching methodology is implemented by the
                        well-experienced teachers.
                      </motion.li>
                    </ul>
                  </div>
                  <div className="p-4  md:w-1/2">
                    <motion.h4
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-5 text-xl font-semibold lg:text-2xl"
                    >
                      Extra-Curriculum Activities
                    </motion.h4>

                    <ul className="mt-5 list-disc">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Give values to multi-cultural practices
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Club activities.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        ICT and Science labs
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Student counseling.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Game and sports.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Primary medical education.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Academic Tour and Historical place visits.
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t">
                <ul>
                  <motion.h2
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-semibold lg:text-2xl"
                  >
                    Address & Contact Info
                  </motion.h2>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Ka-30/A/2, Joar Sahara, Nadda, Dhaka.
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Dhaka-1212
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Call: 01709-815485
                  </motion.li>
                  <motion.li
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Email: dcschoolinfo@cccul.com
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

export default School;
