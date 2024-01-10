import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';

function MyAccountsIndexPage() {
  return (
    <div>
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
                    className=" text-3xl font-extrabold"
                  >
                    My Account
                  </motion.h1>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                  >
                    Browse Your Account Options
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default MyAccountsIndexPage;
