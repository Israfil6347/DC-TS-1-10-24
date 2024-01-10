import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect } from 'react';
import './DcCalender.css';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';

const DcCalender = () => {
  function handleEventPopup(eventInfo: { event: { title: string } }) {}

  function renderEventContent(eventInfo: { event: { title: string } }) {
    return (
      <div
        onClick={() => handleEventPopup(eventInfo)}
        className=" group relative w-full select-none"
      >
        <div className="overflow-x-clip group-hover:cursor-pointer">
          <div className="text-error">{eventInfo.event.title}</div>
        </div>
        <div className="absolute left-0 -top-6 translate-y-full rounded-md bg-gray-800 p-3 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100">
          {eventInfo.event.title}
        </div>
      </div>
    );
  }

  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const baseRequest = new BaseRequestModel(authUser);
  baseRequest.UID = 1;
  baseRequest.ByUserId = 1;
  baseRequest.UserName = 'not found';
  baseRequest.MobileNumber = 'not found';
  baseRequest.MobileNo = 'not found';
  baseRequest.RolePermissionId = '6,1,1210,1209';
  baseRequest.PersonId = 12345;

  const {
    loading: calendarDataLoading,
    data: calendarData,
    executeCommand: calendarDataCommand,
  } = useCommand<{ HolidaysName: string; Date: string }[]>();

  useEffect(() => {
    calendarDataCommand(
      process.env.REACT_APP_BASE_URL + '/others_v1/GetHolidaysList',
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          RequestFrom: 'Web Client',
          // token: localStorage.getItem('token')
        },
      }
    );
  }, []);

  return (
    <motion.div
      className="content w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 md:text-justify lg:p-20 lg:text-justify"
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <LoaderDialogue isLoading={calendarDataLoading} />

      <div className=" text-onBackground">
        <motion.h4
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="mb-4 text-2xl font-semibold uppercase"
        >
          DHAKA CREDIT’S CALENDER
        </motion.h4>

        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
        >
          <FullCalendar
            plugins={[dayGridPlugin]}
            eventContent={renderEventContent}
            initialView="dayGridMonth"
            selectable={true}
            selectMirror={true}
            weekends={true}
            events={calendarData?.map(
              (obj: { HolidaysName: string; Date: string }, index: number) => {
                return {
                  title: obj?.HolidaysName,
                  start: obj?.Date,
                  end: obj?.Date,
                };
              }
            )}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DcCalender;
