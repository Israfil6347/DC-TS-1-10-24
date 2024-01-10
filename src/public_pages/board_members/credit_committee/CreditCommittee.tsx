import CreditCommittee13 from 'assets/images/credit_committee/13. Barnard Pankaj D Rozario.jpg';
import CreditCommittee14 from 'assets/images/credit_committee/14. Moshi Mondol.jpg';
import CreditCommittee15 from 'assets/images/credit_committee/15. Uma GOmes.jpg';
import CreditCommittee16 from 'assets/images/credit_committee/16. Bokul Rozario.jpg';
import CreditCommittee17 from 'assets/images/credit_committee/17. Sushanto Kubi.jpg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';

function CreditCommittee() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className="text-center">
            <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <motion.li
                variants={MyVariants.SlideInFromLeft}
                transition={MyTransition.Spring.Low}
                className="group relative h-[308px] w-full border border-primary bg-surface"
              >
                <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                  <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                    <img
                      className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                      src={CreditCommittee13}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">
                      Barnard Pankaj D Rozario
                    </h5>
                    <p className="">Chairman</p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                variants={MyVariants.SlideInFromLeft}
                transition={MyTransition.Spring.Low}
                className="group relative h-[308px] w-full border border-primary bg-surface"
              >
                <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                  <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                    <img
                      className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                      src={CreditCommittee14}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Moshi Mondol</h5>
                    <p className="">Secretary</p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                variants={MyVariants.SlideInFromLeft}
                transition={MyTransition.Spring.Low}
                className="group relative h-[308px] w-full border border-primary bg-surface"
              >
                <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                  <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                    <img
                      className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                      src={CreditCommittee15}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Uma Magdaline Gomes</h5>
                    <p className="">Member</p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                variants={MyVariants.SlideInFromLeft}
                transition={MyTransition.Spring.Low}
                className="group relative h-[308px] w-full border border-primary bg-surface"
              >
                <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                  <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                    <img
                      className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                      src={CreditCommittee16}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Bokul Rozario</h5>
                    <p className="">Member</p>
                  </div>
                </div>
              </motion.li>

              <motion.li
                variants={MyVariants.SlideInFromLeft}
                transition={MyTransition.Spring.Low}
                className="group relative h-[308px] w-full border border-primary bg-surface"
              >
                <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                  <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                    <img
                      className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                      src={CreditCommittee17}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Sushanto Kubi</h5>
                    <p className="">Member</p>
                  </div>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default CreditCommittee;
