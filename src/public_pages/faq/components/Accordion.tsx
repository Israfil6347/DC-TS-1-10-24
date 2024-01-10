import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import AccordionItem from "global_shared/components/AccordionItem";
import { faqList } from "../data/faqList";

function Accordion() {
  return (
    <motion.div
      className="w-full"
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      {faqList.map((faq) => {
        return (
          <motion.div
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
          >
            <AccordionItem title={faq?.Title} content={faq?.Details} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default Accordion;
