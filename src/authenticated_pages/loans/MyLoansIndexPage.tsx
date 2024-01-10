import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";

function MyLoansIndexPage() {
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
          <div className="w-full">
            <div className="px-4 text-primary shadow-sm md:px-12">
              <div className="py-20 text-center">
                <motion.h1
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="text-5xl font-extrabold"
                >
                  Loans
                </motion.h1>
                <motion.p
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="-mt-1"
                >
                  Browse Your Loans Options
                </motion.p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default MyLoansIndexPage;
