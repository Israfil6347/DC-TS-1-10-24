import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import PageContainer from "global_shared/components/PageContainer";
import useAutoScrollUp from "global_shared/hooks/useAutoScrollUp";
import { NavLink } from "react-router-dom";

const NoticeItems: {
  months: string;
  data: string;
  description: string;
  link: string;
}[] = [];

function Notice() {
  useAutoScrollUp();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
        {NoticeItems.length === 0 ? (
          <div className="text-left md:text-justify lg:text-justify">
            <div className="content bg-surface px-4 py-4 shadow-sm md:px-10 md:py-10 lg:px-20 lg:py-20">
              <div className="animate-backInRight text-center">
                <motion.h1
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className=" text-5xl font-extrabold"
                >
                  No notices to show
                </motion.h1>
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                >
                  Stay connected for getting updated notices.
                </motion.p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NoticeItems.map((NoticeItems, index) => (
              <div className="animate-fadeInLeft group flex gap-2 bg-surface p-6 shadow-sm hover:cursor-pointer hover:shadow-md">
                <span className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full bg-primary p-2 text-center text-onPrimary">
                  <span className="-mb-1 text-2xl font-semibold uppercase">
                    {NoticeItems.months}
                  </span>
                  <span className="-mt-1 text-3xl font-extrabold">
                    {NoticeItems.data}
                  </span>
                </span>
                <div className="flex-grow">
                  <h5 className="font-semibold">
                    <NavLink to="/notices/single-item/">
                      {NoticeItems.data}
                    </NavLink>
                  </h5>
                  <p className="">
                    {NoticeItems.description}
                    <NavLink to={NoticeItems.link} className="nu gray">
                      View Details
                    </NavLink>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </PageContainer>
    </motion.div>
  );
}

export default Notice;
