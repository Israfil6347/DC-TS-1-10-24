import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

const MissionAndValues = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
      className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify"
    >
      <div className="text-onBackground">
        <div className="mb-6">
          <motion.h4
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mb-4 text-2xl font-semibold uppercase"
          >
            Vision
          </motion.h4>
          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            A <strong>SMART</strong> and leading co-operative credit union in
            Bangladesh and south asia to attain self-reliant, healthy and
            dignified community.
          </motion.p>
          <motion.h6
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="my-2 font-semibold"
          >
            S.M.A.R.T
          </motion.h6>

          <ul>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className=""
            >
              <strong>S</strong> = Sound and safe
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              <strong>M</strong> = Market-oriented
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              <strong>A</strong> = A grade
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              <strong>R</strong> = Responsive to member's financial needs
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
            >
              <strong>T</strong> = Trusted wealth advisor of members
            </motion.li>
          </ul>
        </div>
        <div className="mb-6">
          <motion.h4
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mb-4 text-2xl font-semibold"
          >
            Mission
          </motion.h4>
          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            Improving the standard of living of our members by providing
            affordable and competitive services to achieving.
          </motion.p>

          <ul className="flex list-disc flex-col gap-2">
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              financial viability
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              operational efficiency
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              competitive advantage position
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              member satisfaction
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              employee satisfaction
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Capacity building and job creation
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Members health and education
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Climate change
            </motion.li>
            <motion.li
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mt-2 flex gap-2"
            >
              <i className="fa-regular fa-circle-check mt-1"></i>
              Good co-operative governance
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionAndValues;
