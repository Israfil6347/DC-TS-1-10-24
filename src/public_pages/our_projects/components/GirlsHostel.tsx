import dcHostelImage from "assets/images/project/hostel.jpg";
import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import PageContainer from "global_shared/components/PageContainer";

function GirlsHostel() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
      className="group cursor-pointer"
    >
      <PageContainer>
        <div className=" content bg-surface px-4 py-4 shadow-sm md:py-10 md:px-10 lg:py-20 lg:px-20">
          <div className="flex">
            <div className="w-full lg:w-2/5">
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
                Dhaka Credit’s Child Care & Education Center
              </motion.h2>
              <motion.p
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
              >
                "Dhaka Credit’s Child Care & Education Center" is a unique
                addition to Dhaka Credit as it promotes quality education and
                child-friendly environment for children and makes life easier
                for working women and young couples. "Dhaka Credit" is the 1st
                world Class child care and education center in bangladesh & it
                is open to all. So visit the campus, experience the professional
                Services, and decide your child’s future towards a brighter
                future
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
                  Relief for new couples and working women.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Provide children with world-class education standard.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Create a safe and sustainable educational environment for the
                  children.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Providing the children with the right education that they
                  require.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Providing the service at a very competitive cost.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  And above all, developing future generations of our nation.
                </motion.li>
              </ul>
            </div>

            <div className="p-4 md:w-1/2">
              <motion.h4
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-5 text-xl font-semibold lg:text-2xl "
              >
                Privilege
              </motion.h4>

              <ul className="mt-5 list-disc">
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Very competitive price.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Indoor and outdoor activities.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Nutritious and healthy food
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  The food item is prepared by expert nutritionists.
                </motion.li>
                <motion.li
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="mt-2 flex gap-2"
                >
                  <i className="fa-regular fa-circle-check mt-1"></i>
                  Proper dining and sleeping arrangements especially designed
                  for children.
                </motion.li>
              </ul>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <motion.h4
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-5 text-xl font-semibold lg:text-2xl"
            >
              Teacher
            </motion.h4>

            <ul className="mt-5 list-disc">
              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Our teachers are specially trained in singapore.
              </motion.li>

              <motion.li
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mt-2 flex gap-2"
              >
                <i className="fa-regular fa-circle-check mt-1"></i>
                Guidance under an expert adviser from singapore.
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="mt-3 border-t">
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
              88/5, MonipuriPara, Gate No: 4, Tejgaon,
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Dhaka-1215
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Fax: 88-02-9143079.
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Dial:01709-815484
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Extension No: 967877-2231
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Email: dc_childcare@cccul.com,
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              info@cccul.com,
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              Facebook: www.facebook.com/dhakacreditchildcare/
            </motion.li>
          </ul>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default GirlsHostel;
