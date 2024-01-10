import { WoooApplicationRequestState } from 'authenticated_pages/professionals/working_out_of_office/hooks/useWoooApplicationRequestStates';
import moment from 'moment';

export const getTotalHours = (FromTime: string, ToTime: string) => {
  const fromDateTime = moment(FromTime, 'H:mm:ss A');
  const toDateTime = moment(ToTime, 'H:mm:ss A');

  const diffInMilliseconds = toDateTime.diff(fromDateTime);
  const duration = moment.duration(diffInMilliseconds);
  const formattedTime = moment.utc(duration.asMilliseconds()).format('H:mm');

  return duration.isValid()
    ? `${formattedTime.split(':')[0]} hour(s) and ${
        formattedTime.split(':')[1]
      } minutes`
    : '';
};

// export const getTotalDays = (FromDate: string, ToDate: string): string => {
//     const fromDateObj = moment(FromDate, 'MMM D, YYYY');
//     const toDateObj = moment(ToDate, 'MMM D, YYYY');

//     const diffInMilliseconds = toDateObj.diff(fromDateObj);

//     const duration = moment.duration(diffInMilliseconds);

//     return duration.humanize() === 'Invalid date' ? '' : duration.humanize();
// };

export const getTotalDays = (FromDate: string, ToDate: string): string => {
  const fromDateObj = moment(FromDate, 'MMM D, YYYY');
  const toDateObj = moment(ToDate, 'MMM D, YYYY');

  const diffInDays = toDateObj.diff(fromDateObj, 'days') + 1;

  return diffInDays >= 0 ? `${diffInDays} days` : '';
};

export const getFullDateAndTime = (
  state: Omit<WoooApplicationRequestState, 'Errors'>
) => {
  const defaultTime = moment('00:00:00', 'h:mm:ss A').format('h:mm:ss A');

  const fromTime = state?.FromTime ? state?.FromTime : defaultTime;
  const toTime = state?.ToTime ? state?.ToTime : defaultTime;

  // for hours obj
  const forHours = {
    fromDate: state?.FromDate + ' ' + fromTime,
    toDate: state?.FromDate + ' ' + toTime,
    rejoinDate: state?.FromDate + ' ' + toTime,
  };

  // for days obj
  const forDays = {
    fromDate: state.FromDate + ' ' + fromTime,
    toDate: state.ToDate + ' ' + fromTime,
    rejoinDate: state.RejoiningDate + ' ' + fromTime,
  };

  return {
    forHours,
    forDays,
  };
};

export const convertTo12HourFormat = (time24: any) => {
  const [hours, minutes] = time24.split(':');
  let period = 'AM';

  let hours12 = parseInt(hours, 10);

  if (hours12 > 12) {
    hours12 -= 12;
    period = 'PM';
  }

  return `${hours12}:${minutes} ${period}`;
};
