import image from 'assets/images/founder/founder_bw.png';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

const FoundersProfile = () => {
  return (
    <motion.div
      className=" bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify"
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="w-full md:w-2/5"
        >
          <img src={image} className="w-full " alt="" />
        </motion.div>
        <div className="w-full md:w-3/5">
          <motion.h2
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="p-1 text-2xl font-semibold uppercase"
          >
            Fr. Charles J. Young
          </motion.h2>
          <motion.p
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="mb-4 p-1 font-semibold"
          >
            Founder of Dhaka Credit
          </motion.p>
          <div className="">
            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-4 p-1 text-justify text-onSurface"
            >
              Fr. Charles Joseph Young popularly known as Fr. Charles J. Young
              is pioneer of the credit union movement in Bangladesh. The priest
              is founder of "The Christian Co-Operative Credit Union Ltd.
              Dhaka," one of the largest credit union in Bangladesh and south
              Asia. He was born in May 3, in 1904. Fr. Charles joined the
              seminary of the holy cross in September 1923, and joined in the
              first verse in 1925 and accepted his blessing in 1928. In 1929, he
              obtained his BA degree from Notre Dame University of America.
              Later in 1933, after studying the theory of theism at the foreign
              mission seminary in Washington, he was promoted to a priest at
              "Indiana Notre Dame University chapel". And in the same year, he
              came to Bangladesh as a foreign missionary and did various
              pastoral and social activities in Dhaka and Mymensingh. In 1953,
              Lawrence L. Grenar CSC, Archbishop of Dhaka sent him to the Coady
              Institute of St. Francis Xavier University in Canada to acquire
              knowledge on co-operatives. In 1955, coming back to Dhaka, he
              established "The Christian Co-Operative Credit Union Ltd. Dhaka"
              (Dhaka Credit) to bring the socio-economic development of the
              Christian community of the country.
            </motion.p>
            <motion.p
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="mb-4 p-1 text-justify text-onSurface"
            >
              His philosophy in the credit movement has spread widely throughout
              the country. This theory brings radical changes in people’s lives.
              later, using this theory, the non-governmental organization
              "Grameen Bank" won the Nobel peace prize. Many organizations in
              the country are working in light of this theory. "The Christian
              Co-Operative Credit Union Ltd. Dhaka" is now one of the largest
              Credit Union in South Asia of its kind. The name of Fr. Charles J.
              Young CSC will be written in the history of the Credit Movement of
              this region. He died on 14 November, 1988 in a tragic road
              accident. He was buried in Tejgaon Holy Rosary Church in Dhaka.
              His death anniversary is celebrated every year with due honor.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FoundersProfile;
