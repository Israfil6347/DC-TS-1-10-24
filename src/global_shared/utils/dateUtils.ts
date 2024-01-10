import moment from 'moment';

export const isPresentDay = (input_date: string) => {
  const inputDate = moment(input_date);
  return inputDate.isSame(moment(), 'day');
};

export const isPastDate = (input_date: string) => {
  const inputDate = moment(input_date);
  if (isPresentDay(input_date)) {
    return false;
  }
  return inputDate.isBefore();
};

export const isFutureDate = (input_date: string) => {
  const inputDate = moment(input_date);
  if (isPresentDay(input_date)) {
    return false;
  }
  return inputDate.isAfter();
};

export const dateDifference = (d1: string, d2: string) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();
  var dateDiff = date2 - date1;
  var daydiff = dateDiff / (1000 * 60 * 60 * 24);
  return daydiff;
};

export const addHoursToDate = (date: Date, hours: number) => {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return date;
};

function subtract6Months(date: Date, fiscalMonth: number) {
  date.setMonth(date.getMonth() - fiscalMonth);
  return date;
}

export const financialYearBeginDate = () => {
  var fiscalMonth;
  const toDay = new Date();
  const dateMonth = toDay.getMonth();
  if (dateMonth < 6) {
    fiscalMonth = dateMonth + 6;
  } else {
    fiscalMonth = dateMonth - 6;
  }
  var startDate = subtract6Months(toDay, fiscalMonth);
  const Year = startDate.getFullYear();
  const Month = startDate.getMonth() + 1;
  const Day = 1;
  var fiscalDate = Year + '/' + Month + '/' + Day;
  return fiscalDate;
};

export default function getRemainingPascalMonths() {
  const data = [];
  const date = new Date();

  const CurrentMonth = date.getMonth() + 1;
  let pascaleMonth = 0;
  if (CurrentMonth < 6) {
    pascaleMonth = CurrentMonth + 6;
  } else {
    pascaleMonth = CurrentMonth - 6;
  }
  const seduleMonth = pascaleMonth - 12;
  let result = Math.abs(seduleMonth);
  for (let i = 1; i < result + 1; i++) {
    data.push(i);
  }
  return data;
}

export const removeSpecialCharacters = (data: string): string => {
  if (data) {
    const cleanedSpouseName: string = data.replace(/[^\w\s]/g, '');
    return cleanedSpouseName;
  }
  return '';
};

export const convertMinutesToHours = (minutes: number) => {
  if (isNaN(minutes) || minutes < 0) {
    return 'Invalid input. Please enter a valid positive number of minutes.';
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours} hours and ${remainingMinutes} minutes`;
};

function convertTo12HourFormat(timeString: any) {
  const dateTime = new Date(`2024-01-09T${timeString}`);
  let hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;

  return formattedTime;
}

export const dateTOTimeSeparation = (date: any) => {
  const timePart = date.split('T');

  return convertTo12HourFormat(timePart[1]);
};
