import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

function PinResetPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
        <div className="w-full">
          <div className="">
            <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
              <div className="animate-backInRight py-20 text-center">
                <motion.h1
                  variants={MyVariants.SlideInFromRight}
                  transition={MyTransition.Spring.Low}
                  className="text-3xl font-extrabold"
                >
                  PIN Reset
                </motion.h1>
                <motion.div
                  variants={MyVariants.SlideInFromLeft}
                  transition={MyTransition.Spring.Low}
                  className="flex justify-center py-4"
                >
                  <h3 className="text-xl">
                    Do you want to reset your pin ? Please call
                  </h3>
                  <span className="animate-bounce px-5 text-3xl text-primary">
                    <a href="tel:+8809678771270" data-url="tel:+8809678771270">
                      <i className="fa-solid fa-phone-volume text-xl text-primary group-hover:text-error"></i>
                    </a>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default PinResetPage;
