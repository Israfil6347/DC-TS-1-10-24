import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

const CoreValues = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
      className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify"
    >
      <div>
        <motion.h4
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="text-2xl font-semibold uppercase"
        >
          Core Values
        </motion.h4>
        <ul className="my-4 mb-8 text-left">
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span>Uphold Christian values.</span>
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span>Value our members.</span>
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span>Practice Professionalism.</span>
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span>Respect and dignity.</span>
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span> Integrity and trust worthiness. </span>
          </motion.li>

          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span>Efficiency and excellency.</span>
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span>Transparency and accountability</span>
          </motion.li>

          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span> Transparency and accountability. </span>
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            <span> Growth and development. </span>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default CoreValues;
