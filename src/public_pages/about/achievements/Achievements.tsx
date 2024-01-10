import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

const Achievement = () => {
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
          Achievements
        </motion.h4>
        <motion.p
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="mb-4"
        >
          Dhaka Credit has achieved a lot through its long journey as Credit
          union in bangladesh. Apart from institutional achievements, various
          national recognition has been given at various times for making
          important contributions to the country’s Economy. All the achievements
          provide new inspiration to move forward with the dream of becoming
          more successful. Below are some of the achievements that were achieved
          by Dhaka Credit over time.
        </motion.p>

        <ul className="flex list-disc flex-col gap-2">
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            The next big vision of "Dhaka Credit" is to build a Medical College
            & Hospital.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            "Dhaka Credit" has a state of the art & first-class standard resort
            & training center at Mothbari Kuchilabari.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            "Dhaka Credit" is one of the first to provide a world-class child
            care and education center in bangladesh.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Dhaka Credit’s security services is currently one of the leading
            security service providers in bangladesh.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            "Dhaka Credit Union School" situated in Nadda is providing the best
            learning environment for the students.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Establishment of Head Office and 12 area offices (Luxmibazar,
            Sadhonpara, Monipuripara, Mirpur, Mohakhali, Nadda, Savar, Pagar,
            Tumilia, Hasnabad, Shulpur & Nagori).
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            The credit union have got the national gold medal the years 1990 and
            2009. Five presidents of the organization also awarded the national
            gold medal individually for the years of 1994, 1995, 1997, 2009, and
            2017 by the government co-operative department as the best
            co-operative society.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            Establishment of "The Central Association of Christian Co-Operatives
            Limited" (CACCO), a networking body for christian credit unions,
            multi-purpose co-operatives, housing societies, and other financial
            institutions in bangladesh. CACCO has been established on May 1st,
            2007.
          </motion.li>
          <motion.li
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mt-2 flex gap-2"
          >
            <i className="fa-regular fa-circle-check mt-1"></i>
            CCULB was Established in 1979 by using the education fund of this
            credit union, which is now working in bangladesh irrespective of
            religion, cast & creed. CCULB is the umbrella organization that
            provides logistics, technical support & loans among the society
            members.
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Achievement;
