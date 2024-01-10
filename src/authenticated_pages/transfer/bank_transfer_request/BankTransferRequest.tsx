import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';

function BankTransferRequest() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
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
                    Bank Transfer Request
                  </motion.h1>
                  <motion.p
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="-mt-1"
                  >
                    Thank you for showing your interest on us, We are going to
                    implement "Bank Transfer Request" very soon please connect
                    with us.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageContainer>
    </motion.div>
  );
}

export default BankTransferRequest;
