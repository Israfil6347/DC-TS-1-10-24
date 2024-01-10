import image from 'assets/images/service/gym.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function GymService() {
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
            <motion.h2
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="text-2xl font-bold lg:text-3xl"
            >
              Dhaka Credit Gym
            </motion.h2>
            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-3 text-justify"
            >
              A sound mind depends on a sound body. There is no alternative to a
              regular "Gym" to keep your body & mind healthy. For conscious
              health awareness, "Dhaka Credit" brings a new gym for members.
              members are getting gym benefits at affordable rates from here. We
              have separate schedules for both men and women.
            </motion.p>
            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="float-left mt-8 w-full  lg:w-2/5"
            >
              <img src={image} className="w-full  pb-5 lg:pr-6" alt="" />
            </motion.div>

            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-3 text-xl font-semibold lg:text-2xl"
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
                Modern equipment.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Non-smoking environment.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Experienced trainer.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Separate timing for women.
              </motion.li>

              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Competitive cost.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Spacious.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Dressing room.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Car parking.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Air-conditioned.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                CCTV camera.
              </motion.li>
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                VIP security.
              </motion.li>
            </ul>

            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-5 mt-20 text-xl font-semibold lg:text-2xl"
            >
              Gym Fees
            </motion.h4>

            <motion.table
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="table w-full"
            >
              <thead className="">
                <tr className="sticky -top-0 hidden h-16 w-full bg-surface text-sm uppercase text-onSurface shadow-sm md:table-row">
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0"> S.L</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Time</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Service holder/Business person</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <p className="p-2 md:p-0">Students</p>
                  </th>
                </tr>
              </thead>

              <tbody className="flex-1 bg-backgroundVariant sm:flex-none ">
                <tr className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 even:bg-red-50 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">SL</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">1</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Time</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Monthly fee for Students
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">
                      Service holder/Business person
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      1,200/-
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Students</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      800/-
                    </p>
                  </td>
                </tr>
                <tr className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 even:bg-red-50 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">SL</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">2</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Time</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Three-monthly payments
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">
                      Service holder/Business person
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      3,000/-
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Students</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      2,285/-
                    </p>
                  </td>
                </tr>
                <tr className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 even:bg-red-50 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">SL</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">3</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Time</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Half-Yearly payments
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">
                      Service holder/Business person
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      6,000/-
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Students</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      4,000/-
                    </p>
                  </td>
                </tr>
                <tr className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 even:bg-red-50 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">SL</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">4</p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Time</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Yearly payments
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">
                      Service holder/Business person
                    </label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      12,000/-
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Students</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      6,850/-
                    </p>
                  </td>
                </tr>
              </tbody>
            </motion.table>

            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-5 mt-20 text-xl font-semibold lg:text-2xl"
            >
              Gym Timing
            </motion.h4>

            <motion.table
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="table w-full"
            >
              <thead className="">
                <tr className="sticky -top-0 hidden h-16 w-full bg-surface text-sm uppercase text-onSurface shadow-sm md:table-row">
                  <th className="border border-gray-200 p-2 text-left ">
                    <label className="p-2 md:hidden md:p-0">S.L</label>
                    <p className="p-2 md:p-0"> S.L</p>
                  </th>

                  <th className="border border-gray-200 p-2 text-left ">
                    <label className="p-2 md:hidden md:p-0">Gender</label>
                    <p className="p-2 md:p-0">Gender</p>
                  </th>
                  <th className="border border-gray-200 p-2 text-left ">
                    <label className="p-2 md:hidden md:p-0">Time</label>
                    <p className="p-2 md:p-0">Time</p>
                  </th>
                </tr>
              </thead>

              <tbody className="flex-1 bg-backgroundVariant sm:flex-none ">
                <tr className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 even:bg-red-50 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">SL</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">1</p>
                  </td>

                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Gender</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Male
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Time</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      6.00am to 2.00pm
                    </p>
                  </td>
                </tr>
                <tr className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 even:bg-red-50 md:my-0 md:table-row">
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">SL</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">1</p>
                  </td>

                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Gender</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      Female
                    </p>
                  </td>
                  <td className="border border-gray-200 p-2 text-left">
                    <label className="p-2 md:hidden md:p-0">Time</label>
                    <p className="p-2 font-semibold md:p-0 md:font-normal">
                      3.00pm to 6.30pm
                    </p>
                  </td>
                </tr>
              </tbody>
            </motion.table>

            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-5"
            >
              **All fees are subject to changes according to the decision by the
              management. For an up-to-date rate, you are requested to contact
              the listed number**
            </motion.p>

            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-20 border-t"
            >
              <ul>
                <motion.h2 className="mt-5 text-xl font-semibold lg:text-2xl">
                  Address & Contact info:
                </motion.h2>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  Sadhonpara Service Center Building (Ground Floor)
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  8/Kha, Sadhonpara,
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  East Rajabazar, Dhaka-1215..
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  Call: 9139517, 01715-81-66-71 and 01711-52-38-33.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  Email: info@cccul.com
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default GymService;
