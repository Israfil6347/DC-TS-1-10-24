import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import PageContainer from "global_shared/components/PageContainer";
import useAutoScrollUp from "global_shared/hooks/useAutoScrollUp";
import Accordion from "./components/Accordion";

function FrequentlyAskedQuestions() {
  useAutoScrollUp();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.VeryFast}
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <motion.div
            className="flex w-full flex-col items-center bg-surface  p-16 shadow-sm"
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            <Accordion />
          </motion.div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default FrequentlyAskedQuestions;
