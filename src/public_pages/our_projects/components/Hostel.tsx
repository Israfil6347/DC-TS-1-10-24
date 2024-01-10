import dcHostelImage from 'assets/images/project/hostel.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function Hostel() {
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
        <div className="content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
          <div className="md:flex">
            <div className="w-full md:w-2/5">
              <img
                src={dcHostelImage}
                className="animate-slideInLeft w-full pb-5 md:pr-6"
                alt=""
              />
            </div>
            <div className="w-full lg:w-3/5">
              <motion.h2
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-2 p-1 text-2xl font-bold lg:text-3xl"
              >
                Dhaka Credit Girl's Hostel
              </motion.h2>
              <motion.p
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
              >
                "Dhaka Credit" is operating three girl’s hostels for female
                students who are coming from villages for higher studies and
                careers in dhaka city. These students often face problems due to
                the crisis of accommodation at a reasonably low cost in the
                city. To tackle this problem, "Dhaka Credit" is using its
                buildings in Shadhonpara, Monipuripara & Nadda to provide
                accommodation to these students. These hostels provide
                comfortable accommodation, comparatively low cost, standard
                meals, skilled management & 24hrs security with cc camera. The
                hostel is conveniently located near the main public
                transportation Hub of the city.
              </motion.p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className=" md:w-1/2">
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-10 text-2xl font-semibold "
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
                  Excellent environment.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Plenty of space
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Healthy and standard meal
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Comfortable accommodation
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  C.C camera security
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Safe and secured
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Hostel facilities
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Separate study room.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Separate dining room.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Daily newspaper.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Lift with generator support (Only in Monipuripara).
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Computer room.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Cable connection
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Always water availability
                </motion.li>
              </ul>
            </div>
            {/* 
            <div className=" md:w-1/2">
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-5 text-xl font-semibold lg:text-2xl "
              >
                Hostel Facilities
              </motion.h4>

              <ul className="mt-5 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Separate study room.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Separate dining room.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Daily newspaper.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Lift with generator support(Only in Monipuripara).
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Computer room.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Cable connection
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Always water availability
                </motion.li>
              </ul>
            </div> */}
          </div>
          <div className="mt-4">
            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className=" text-xl font-bold lg:text-2xl "
            >
              Hostel Info
            </motion.h4>
            <div className=" flex flex-wrap">
              <div className=" lg:w-1/3 ">
                <div className="relative h-full overflow-hidden rounded-lg  lg:p-4">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-normal "
                  >
                    MonipuriPara Hostel
                  </motion.h4>
                  <ul className="mt-5 list-disc">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Hostel Fee: BDT 4,630
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Address: 88/5, MonipuriPara, Gate-4 Tejgaon, Dhaka-1215
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Call: 01718-477702
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Email: info@cccul.com
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div className=" lg:w-1/3">
                <div className="relative h-full overflow-hidden rounded-lg lg:p-4">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-normal "
                  >
                    SadhonPara Girls Hostel
                  </motion.h4>
                  <ul className="mt-5 list-disc">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Hostel Fee: BDT 4,400
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Address: 8/Kha, ShadhonPara,(2nd to 5th Floor) East
                      Rajabazar, Dhaka- 1215
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Call: 01321169717
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Email: info@cccul.com
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div className=" lg:w-1/3">
                <div className="relative h-full overflow-hidden rounded-lg  lg:p-4">
                  <motion.h4
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="mt-5 text-xl font-normal "
                  >
                    Nadda Hostel
                  </motion.h4>
                  <ul className="mt-5 list-disc">
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Hostel Fee: BDT 3,500
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Ka-29/A, Nadda Sarkerbari Gulshan-2, Dhaka-1212
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Call: 01674-110964
                    </motion.li>
                    <motion.li
                      variants={MyVariants.SlideInFromRight}
                      transition={MyTransition.Spring.Low}
                      className="mt-2 flex gap-2"
                    >
                      <i className="fa-regular fa-circle-check mt-1"></i>
                      Email: info@cccul.com
                    </motion.li>
                  </ul>
                </div>
              </div>
              <motion.p
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-5"
              >
                **All Fees are subject to changes according to decision by the
                Management. For up-to-date rate, you are requested to contact
                the listed number**
              </motion.p>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default Hostel;
