import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

const WomansActivity = () => {
  return (
    <motion.div
      className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify"
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <div className=" text-onBackground">
        <motion.h4
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="mb-4 text-2xl font-semibold uppercase"
        >
          DHAKA CREDIT’S WOMEN'S COMMITTEE
        </motion.h4>
        <motion.p
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="my-4"
        >
          The Women committee of "Dhaka Credit" has played a significant role in
          promoting the progress of "Dhaka Credit". Besides this, the committee
          has organized various programs such as the reception of students,
          Pre-Christmas celebrations with others and Children, Bee & Smart
          Savers program, International Women’s Day celebration, etc. for the
          empowerment of women. The women's committee consists of nearly 360
          members.
        </motion.p>
        <motion.h4
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="mb-4 text-2xl font-semibold"
        >
          Reasons for forming Women's Committee:
        </motion.h4>
        <ul className="flex list-disc flex-col">
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Women empowerment.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Encouraging the child and Women.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Small entrepreneurship.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Reward the women.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Relation building.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Observe national and international days.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Social activities.
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default WomansActivity;
