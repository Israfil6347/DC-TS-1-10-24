import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyCard from 'global_shared/components/MyCard';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import React, { useContext, useEffect } from 'react';
import { TodayPunchRequestModel } from './model/request/TodayPunchRequestModel';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import { TodayPaunch } from './model/data/TodayPaunch';
import Moment from 'react-moment';
import moment from 'moment';
import { dateTOTimeSeparation } from 'global_shared/utils/dateUtils';

function TodaysPunch() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const {
    loading: todayPunchResponseDataLoading,
    data: todayPunchResponseData,
    message: todayPunchResponseMessage,
    status: todayPunchResponseStatus,
    setStatus: setTodayPunchResponseStatus,
    executeCommand: todayPunchRequestExecuteCommand,
  } = useCommand<TodayPaunch[] | null | any>();

  const todayPunchRequestModel = new TodayPunchRequestModel(authUser);
  todayPunchRequestModel.RequestTime = new Date().toISOString();

  useEffect(() => {
    todayPunchRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL +
        '/professionals_V1/GetPresentDayAttendance',
      JSON.stringify(todayPunchRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  const Todays = moment(new Date()).format('DD-MMM-YYYY');

  return (
    <>
      <LoaderDialogue isLoading={todayPunchResponseDataLoading} />
      {todayPunchResponseData?.length === 0 ? (
        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
        >
          <div className="bg-surface">
            <section className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row">
              <div className="w-full">
                <div className="">
                  <div className="bg-surface  px-4 text-primary shadow-sm">
                    <div className="py-28 text-center">
                      <motion.div
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className="text-xl font-extrabold uppercase"
                      >
                        <h1>Todays Punch Information</h1>

                        <h2 className="text-lg font-semibold uppercase">
                          {Todays}
                        </h2>
                      </motion.div>
                      <motion.p
                        variants={MyVariants.SlideInFromRight}
                        transition={MyTransition.Spring.Low}
                        className=""
                      >
                        Your today's punch is not found! Some service(s) will be
                        unavailable.
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          transition={MyTransition.StaggerChildren.Fast}
        >
          <div className="bg-surface ">
            <section className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row">
              <div className="w-full">
                <div className="">
                  <div className="bg-surface  px-4 text-primary shadow-sm">
                    <div className="py-5 text-center">
                      <div className="flex justify-center">
                        <motion.div
                          variants={MyVariants.SlideInFromRight}
                          transition={MyTransition.Spring.Low}
                          className="text-xl font-extrabold uppercase"
                        >
                          <h1>Todays Punch Information</h1>

                          <h2 className="text-lg font-semibold uppercase">
                            {Todays}
                          </h2>
                        </motion.div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 py-3 md:grid-cols-2 lg:grid-cols-3">
                        {todayPunchResponseData &&
                          todayPunchResponseData?.map((obj: any, key: any) => (
                            <motion.div
                              variants={MyVariants.SlideInFromRight}
                              transition={{
                                ...MyTransition.Spring.Low,
                                delay: 0.1 * key,
                              }}
                              key={key}
                              className=""
                            >
                              <MyCard
                                rounded={RoundedClass.Medium}
                                shadow={Size.Small}
                                bgColor={'bg-background'}
                                minimumHeight={80}
                              >
                                <div
                                  className={`group flex cursor-pointer  p-4`}
                                >
                                  <ul className=" w-full divide-y overflow-hidden text-justify">
                                    <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Punch Station
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {obj?.PunchArea}
                                      </div>
                                    </li>
                                    <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Punch Time
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {dateTOTimeSeparation(obj?.CheckInTime)}
                                      </div>
                                    </li>
                                    <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                                      <div className="w-full text-left md:w-1/2">
                                        Remarks
                                      </div>
                                      <div className="w-full text-right md:w-1/2">
                                        {obj?.Remarks}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </MyCard>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default TodaysPunch;
