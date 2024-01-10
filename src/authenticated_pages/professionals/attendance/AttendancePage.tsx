import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import Moment from 'moment';
import { useContext } from 'react';
import './AttendancePage.css';
import { AttendanceRequestModel } from './model/request/AttendanceRequestModel';

const AttendancePage = () => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  function renderEventContent(eventInfo: any) {
    const moment = require('moment');
    const getPunchInTime = eventInfo?.event?.extendedProps?.PunchIn;
    const punchDate = moment(
      eventInfo?.event?.extendedProps?.AttendanceDate
    ).format('DD MMM YYYY');
    const punchIn = moment(getPunchInTime).format('h:mm A');
    const getPunchOutTime = eventInfo?.event?.extendedProps?.PunchOut;
    const punchOut = moment(getPunchOutTime).format('h:mm A');
    console.log(eventInfo?.event);
    return (
      <div className=" group relative w-full select-none">
        <div className="overflow-x-clip group-hover:cursor-pointer">
          <div
            className={`px-1 text-base font-bold md:text-xl  ${
              eventInfo.event.title === 'P' && 'text-green-700'
            } ${eventInfo.event.title === 'L' && 'text-[#FFC107]'}
              ${eventInfo.event.title === 'H' && 'text-red-700'} ${
              eventInfo.event.title === 'A' && 'text-red-600'
            }`}
          >
            {eventInfo.event.title}
          </div>
        </div>
        <div className="absolute -top-20 left-0 h-28 translate-y-full rounded-md bg-gray-800 p-2 text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100">
          <p>Date: {punchDate}</p>
          <p>Remarks: {eventInfo?.event?.extendedProps?.Titles}</p>
          <p>Punch Station: {eventInfo?.event?.extendedProps?.Area}</p>
          {eventInfo?.event?.extendedProps?.PunchIn && <p>In: {punchIn}</p>}
          {eventInfo?.event?.extendedProps?.PunchOut && <p>Out: {punchOut}</p>}
        </div>
      </div>
    );
  }

  async function getMyAttendanceRequestHandler(
    fetchInfo: any,
    successCallback: any
  ) {
    try {
      const getMyAttendanceRequestModel = new AttendanceRequestModel(authUser);
      var resData;

      var date = new Date(fetchInfo.start),
        y = date.getFullYear(),
        m = date.getMonth();

      var firstDay = new Date(y, m + 1, 1);
      var lastDay = new Date(y, m + 2, 0);
      console.log(date);

      // getMyAttendanceRequestModel.FromDate = Moment(new Date()).format(
      //   'MMM DD, YYYY'
      // );
      // getMyAttendanceRequestModel.ToDate = Moment(new Date()).format(
      //   'MMM DD, YYYY'
      // );

      if (fetchInfo) {
        getMyAttendanceRequestModel.FromDate =
          Moment(date).format('MMM DD, YYYY');
        getMyAttendanceRequestModel.ToDate =
          Moment(lastDay).format('MMM DD, YYYY');
      }
      console.log(getMyAttendanceRequestModel);

      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + '/professionals_v1/getMyAttendances',
        JSON.stringify(getMyAttendanceRequestModel),
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        }
      );

      resData = JSON.parse(response.data.Data);

      console.log(resData);

      successCallback(
        resData.map((data: any, index: number) => {
          return {
            id: index,
            title: data?.Status,
            date: data?.AttendanceDate,
            extendedProps: {
              AttendanceDate: data?.AttendanceDate,
              Titles: data?.Remarks,
              Area: data?.PunchArea,
              PunchIn: data?.PunchIn,
              PunchOut: data?.PunchOut,
            },
          };
        })
      );
    } catch (error) {
      resData = [];
    }
  }

  return (
    <motion.div
      className="content h-full w-full bg-surface p-8 text-left text-onBackground shadow-sm md:p-14 lg:p-20"
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <div className="text-onBackground">
        <div className="mb-3 flex flex-col gap-3 md:flex-row md:justify-between">
          <motion.h4
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="text-2xl font-semibold"
          >
            ATTENDANCE CALENDER
          </motion.h4>
        </div>
        <motion.div
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
        >
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            eventContent={renderEventContent}
            selectable={true}
            selectMirror={true}
            forceEventDuration={true}
            eventTimeFormat={{
              hour: 'numeric',
              minute: 'numeric',
            }}
            events={(fetchInfo, successCallback, failureCallback) => {
              getMyAttendanceRequestHandler(fetchInfo, successCallback);
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AttendancePage;
