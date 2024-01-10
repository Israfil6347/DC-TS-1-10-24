import founderImage from 'assets/images/founder/index_founder copy.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import { NavLink } from 'react-router-dom';

function FounderSection() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <section className="group mt-10 flex flex-col-reverse items-center gap-6 text-justify md:flex-row lg:text-left">
        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="z-10  bg-surface p-6 text-onSurface shadow-sm hover:shadow-md md:w-3/5"
        >
          <NavLink
            to="about/founders-profile"
            className="group-hover:cursor-pointer"
          >
            <motion.h2 className="mb-2 p-1 text-3xl font-bold group-hover:cursor-pointer">
              Fr. Charles J. Young
            </motion.h2>
            <p className="mb-4 p-1 font-semibold group-hover:cursor-pointer">
              Founder of Dhaka Credit
            </p>
            <p className="mb-2 p-1 group-hover:cursor-pointer">
              The pioneer of the credit union movement in Bangladesh, Fr.Charles
              J. Young CSC was born in May 3rd 1904, in New York, USA. His full
              name is Fr. Charles Joseph Young CSC. He was the founder of "The
              Christian Co-Operative Credit Union Ltd. Dhaka," the largest
              credit union in Bangladesh and south Asia. Fr. Charles joined the
              seminary of the holy cross on September on 1923, and joined in the
              first verse in 1925 & accepted his blessing in 1928.In 1929
            </p>
            <p className="mb-2 p-1  group-hover:underline">Read More</p>
          </NavLink>
        </motion.div>

        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="lg:w-2/5"
        >
          <img src={founderImage} className="w-full" alt="" />
        </motion.div>
      </section>
    </motion.div>
  );
}

export default FounderSection;
