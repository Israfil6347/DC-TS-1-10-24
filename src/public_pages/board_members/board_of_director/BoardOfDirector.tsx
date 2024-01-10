import office_bearers1 from 'assets/images/office_bearers/Ignatious_Hemanta_Corraya.jpg';
import office_bearers2 from 'assets/images/office_bearers/2. Papri Devi Areng.jpg';
import office_bearers3 from 'assets/images/office_bearers/3. Michael John Gomes.jpg';
import office_bearers4 from 'assets/images/office_bearers/4. Sukumar Lenus Cruze.jpg';
import board_of_directors5 from 'assets/images/board_of_directors/5. Prottesh Rangsa.jpg';
import board_of_directors6 from 'assets/images/board_of_directors/6. Monica Gomes.jpg';
import board_of_directors7 from 'assets/images/board_of_directors/7. Subrata Richard Rozario.jpg';
import board_of_directors8 from 'assets/images/board_of_directors/8. Stella Hazra.jpg';
import board_of_directors9 from 'assets/images/board_of_directors/9. Nirapada Halder.jpg';
import board_of_directors10 from 'assets/images/board_of_directors/10. Don A Adhikary.jpg';
import board_of_directors11 from 'assets/images/board_of_directors/11. Manoj Clement Gomes.jpg';
import board_of_directors12 from 'assets/images/board_of_directors/12. Shipon Rozario.jpg';

import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';

function BoardOfDirector() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
        <div className="text-left md:text-justify lg:text-justify">
          <div className="text-center">
            <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <motion.li
                variants={MyVariants.SlideInFromLeft}
                transition={MyTransition.Spring.Low}
                className="group relative h-[308px] w-full border border-primary bg-surface"
              >
                <div className="flex h-full w-full flex-col items-center gap-4 rounded-sm bg-surface py-10 shadow-sm hover:shadow-md">
                  <div className="flex h-full w-full items-center justify-center group-hover:scale-110">
                    <img
                      className="h-36 w-36 rounded-full group-hover:border-4 group-hover:border-white group-hover:shadow-md"
                      src={office_bearers1}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">
                      Ignatious Hemanta Corraya
                    </h5>
                    <p className="">President</p>
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
                      src={office_bearers2}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Papri Devi Areng</h5>
                    <p className="">Vice President</p>
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
                      src={office_bearers3}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Michael John Gomes</h5>
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
                      src={office_bearers4}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Sukumar Lenus Cruze</h5>
                    <p className="">Treasurer</p>
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
                      src={board_of_directors5}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Prottesh Rangsa</h5>
                    <p className="">Director</p>
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
                      src={board_of_directors6}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Monica Gomes</h5>
                    <p className="">Director</p>
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
                      src={board_of_directors7}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">
                      Subrata Richard Rozario
                    </h5>
                    <p className="">Director</p>
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
                      src={board_of_directors8}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Stella Hazra</h5>
                    <p className="">Director</p>
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
                      src={board_of_directors9}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Nirapada Halder</h5>
                    <p className="">Director</p>
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
                      src={board_of_directors10}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Don A Adhikary</h5>
                    <p className="">Director</p>
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
                      src={board_of_directors11}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Manoj Clement Gomes</h5>
                    <p className="">Director</p>
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
                      src={board_of_directors12}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h5 className="text-lg font-bold">Shipon Rozario</h5>
                    <p className="">Director</p>
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

export default BoardOfDirector;
