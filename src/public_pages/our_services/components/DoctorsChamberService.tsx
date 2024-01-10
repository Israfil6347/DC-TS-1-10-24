import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function DoctorsChamberService() {
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
          <div className="content bg-surface px-4 py-4 shadow-sm md:px-10 md:py-10 lg:px-20 lg:py-20">
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-3 text-2xl font-bold lg:text-3xl"
            >
              Doctor's Chamber
            </motion.h2>
            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className=" text-justify"
            >
              "Dhaka Credit" has launched "Doctor’s Chamber" for everyone to
              use. expert doctors are ready to take care of you and your
              family’s health with utmost professionalism.
            </motion.p>
            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className=" mt-3 pb-4 text-xl font-semibold lg:text-2xl"
            >
              Doctor’s Profile
            </motion.h4>

            <ul className=" ">
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Dr. Hemanto I. Gomes, MBBS (DU), D. Card. (NICVD), Ibrahim
                Cardiac Hospital & Research Institute.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Lt. Col. Dr. Marlina Roy, MBBS, DGO, MCPS, FCPS (Gynae), Navy
                Hospital, Patenga, Chattogram.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Dr. Md. Al-Amin MBBS, M.S (Urology) Kidney & Urology Specialist.
              </motion.li>
              {/* <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Dr. Francisca Rinic Gomes, MBBS, General Physician, St. John
                Vianney Hospital.
              </motion.li> */}
            </ul>
            <div className=" py-4">
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-7 text-xl font-bold lg:text-2xl"
              >
                Service Day
              </motion.h4>
              <div className="-my-8 divide-y divide-gray-100">
                <div className="flex flex-wrap py-8 md:flex-nowrap">
                  <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                    <motion.span
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="title-font font-semibold"
                    >
                      Extension Building Service Day
                    </motion.span>
                  </div>
                  <div className="md:flex-grow">
                    <ul className="">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Sunday and Tuesday 3:00 pm to 6:00 pm
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Monday and Thursday 10:00 am to 1:00 pm
                      </motion.li>

                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>9 No,
                        Tejgaon Church Community Centre (2nd floor) Tejgaon,
                        Dhaka-1215.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Served By: Dr. Md. Al-Amin.
                      </motion.li>
                    </ul>
                  </div>
                </div>
                {/* <div className="flex flex-wrap py-8 md:flex-nowrap md:py-8">
                  <div className="mb-2  flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                    <motion.span
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="title-font font-semibold"
                    >
                      Monipuripara Service Day
                    </motion.span>
                  </div>
                  <div className="md:flex-grow">
                    <ul className="mt-5 ">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Thursday.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Time: 4 pm to 6 pm.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Address: 88/5, Monipuri Para, Tejgaon, Dhaka.
                      </motion.li>
                    </ul>
                  </div>
                </div> */}
                {/* <div className="flex flex-wrap py-8 md:flex-nowrap">
                  <div className=" flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                    <motion.span
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="title-font font-semibold"
                    >
                      Sadhonpara Service Day
                    </motion.span>
                  </div>
                  <div className="md:flex-grow">
                    <ul className="mt-5 ">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Monday, Wednesday.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Time: 4 pm to 6 pm.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Address: 8/KA, East-Raza Bazar, Dhaka.
                      </motion.li>
                     
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="">
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-4 text-xl font-bold lg:text-2xl"
              >
                Online Telemedicine
              </motion.h4>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="w-full">
                  <div className="relative h-full overflow-hidden">
                    <motion.h4
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="bg-primaryVariant p-2 text-center text-xl font-bold text-onPrimaryVariant"
                    >
                      Dr. Hemanto I.Gomes
                    </motion.h4>
                    <ul className="mt-5 ">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Monday, Tuesday, and Wednesday.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Time: 6 pm to 7 pm.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Phone: 01715-863878.
                      </motion.li>
                    </ul>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative h-full overflow-hidden">
                    <motion.h4
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="bg-primaryVariant p-2 text-center text-xl font-bold text-onPrimaryVariant"
                    >
                      Lt. Col. Dr. Marlina Roy
                    </motion.h4>
                    <ul className="mt-5 ">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Monday, Tuesday, and Wednesday.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Time: 6 pm to 7 pm.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Phone: 01708-919537.
                      </motion.li>
                    </ul>
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative h-full overflow-hidden">
                    <motion.h4
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="bg-primaryVariant p-2 text-center text-xl font-bold text-onPrimaryVariant"
                    >
                      Dr. Mohammad Al-Amin
                    </motion.h4>
                    <ul className="mt-5 ">
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Everyday.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Time: Not Specific.
                      </motion.li>
                      <motion.li
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="mt-2 flex gap-2"
                      >
                        <i className="fa-regular fa-circle-check mt-1"></i>
                        Phone: 01819-111109.
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

export default DoctorsChamberService;
