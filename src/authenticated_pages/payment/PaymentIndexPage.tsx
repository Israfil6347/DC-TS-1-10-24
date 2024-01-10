import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
/**========================================================================
 * ?                                ABOUT
 * @author         :  name_on_card
 * @designation    :  Software Developer
 * @email          :  newtonmitro@gmail.com
 * @description    :
 * @createdOn      :  01 July 2023
 * @updatedBy      :  Israfil
 * @updatedOn      :  07 July 2023
 *========================================================================**/

function PaymentIndexPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <div className="w-full">
        <div className="">
          <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
            <div className="animate-backInRight py-20 text-center">
              <motion.h1
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
                className=" text-3xl font-extrabold"
              >
                Payment
              </motion.h1>
              <motion.p
                variants={MyVariants.SlideInFromRight}
                transition={MyTransition.Spring.Low}
              >
                Browse your Payment options
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PaymentIndexPage;
