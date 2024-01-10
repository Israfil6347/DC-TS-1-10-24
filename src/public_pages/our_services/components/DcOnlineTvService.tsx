import image from 'assets/images/service/dc_tv.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import { useEffect } from 'react';

function DcOnlineTvService() {
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
            <motion.div
              variants={MyVariants.SlideInFromRight}
              transition={MyTransition.Spring.Low}
              className="float-left w-full lg:w-2/5"
            >
              <img src={image} className="w-full pb-5 md:pr-6 " alt="" />
            </motion.div>
            <div className="">
              <motion.h2
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-2 text-2xl font-bold lg:text-3xl"
              >
                DC TV
              </motion.h2>
              <motion.div
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className="mb-4 p-1 text-justify "
              >
                "Dhaka Credit" has introduced an online television portal named
                DCNEWS(www.dcnewsbd.com) in Bangla. Its main goal & objective is
                to keep people and members informed of the day-to-day events and
                activities taking place in all of its operational areas as well
                as divisional towns & cities around the country. News of other
                co-operatives, churches and social issues in the Christian
                community or secular news at the national level are covered in
                this online portal. The members of "Dhaka Credit" living in
                other parts of the world can get instant information about the
                credit union & get connected instantly. currently, it is one of
                the leading Co-operative and Christian community online news
                portals in Bangladesh.
              </motion.div>
              <div className="clear-both"></div>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default DcOnlineTvService;
