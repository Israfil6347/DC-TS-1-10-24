import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import { Link } from 'react-router-dom';

function Publication() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <section className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            className="group flex rounded-md border border-gray-200 p-4 text-onSurface hover:shadow-sm"
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            <div className="">
              <i className="fa-solid fa-file-pdf text-5xl text-error"></i>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold">A.G.M REPORT 2020 – 2021</p>
              <p className=" group-hover:cursor-pointer">
                A.G.M REPORT 2020 – 2021...
                <span className="group-hover:cursor-pointer group-hover:underline">
                  <Link to="" target="_blank">
                    Download PDF
                  </Link>
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="group flex rounded-md border border-gray-200 p-4 text-onSurface hover:shadow-sm"
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            <div className="">
              <i className="fa-solid fa-file-pdf text-5xl text-error"></i>
            </div>
            <div className="ml-4 grow">
              <p className="mb-1 font-bold">A.G.M REPORT 2019 – 2020</p>
              <p className=" group-hover:cursor-pointer">
                "A.G.M REPORT 2019 – 2020.....
                <span className="group-hover:cursor-pointer group-hover:underline">
                  <Link to="" target="_blank">
                    Download PDF
                  </Link>
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Publication;
