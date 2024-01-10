import office_bearers18 from "assets/images/Supervisory_Committee/18. Sumon James D' Costa.jpg";
import office_bearers19 from 'assets/images/Supervisory_Committee/19. Surit Gomes.jpg';
import office_bearers20 from 'assets/images/Supervisory_Committee/20. Pankaj Lawrence Costa.jpeg';
import office_bearers21 from 'assets/images/Supervisory_Committee/21. Maria D Cunha.jpg';
import office_bearers22 from 'assets/images/Supervisory_Committee/22. Molay Nath.jpeg';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import { spring } from 'global_shared/animations/transitions/spring';
import PageContainer from 'global_shared/components/PageContainer';

function SupervisoryCommittee() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className="">
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
                        src={office_bearers18}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Sumon James D' Costa
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
                        src={office_bearers19}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Surit Gomes</h5>
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
                        src={office_bearers20}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">
                        Pankaj Lawrence Costa
                      </h5>
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
                        src={office_bearers21}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Maria D Cunha</h5>
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
                        src={office_bearers22}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h5 className="text-lg font-bold">Molay Nath</h5>
                      <p className="">Member</p>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

export default SupervisoryCommittee;
