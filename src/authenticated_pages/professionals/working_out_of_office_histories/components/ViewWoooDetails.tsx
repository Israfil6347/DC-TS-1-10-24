import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ISelectWoooType } from 'authenticated_pages/professionals/shared/components/working_out_of_office/interface/SelectWoooTypeModel';
import {
  getTotalDays,
  getTotalHours,
} from 'authenticated_pages/professionals/shared/utils/calculateDaysAndHours';
import DateSelect from 'global_shared/components/DateSelect';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyTextarea from 'global_shared/components/MyTextarea';
import TimeSelect from 'global_shared/components/TimeSelect';
import { ISelectedWooo } from '../interface/WoooHistoryInterface';

/**========================================================================
 * ?                                ABOUT
 * @author         :  Sunit Corneleous
 * @designation    :  Trainee
 * @email          :  sunit.corneleous25@gmail.com
 * @description    :
 * @createdOn      :  17 August 2023
 * @updatedBy      :  Sunit Corneleous
 * @updatedOn      :  17 August 2023
 *========================================================================**/

interface ViewWoooDetailsPropType {
  selectedWooo: ISelectedWooo;
  isHourly: boolean;
  selectWoooTypeData: ISelectWoooType[] | null;
}

const ViewWoooDetails = ({
  selectedWooo,
  isHourly,
  selectWoooTypeData,
}: ViewWoooDetailsPropType) => {
  if (isHourly) {
    return (
      <div className="flex flex-col pb-6 pt-10 md:flex-row">
        <div className="grid grid-cols-1 gap-6 md:mr-5 md:w-1/2">
          <MyDropdown
            label="===Select Type==="
            name="WoooTypeCode"
            value={selectedWooo?.WoooTypeCode}
            dropDownData={selectWoooTypeData?.map((item, i) => {
              return {
                id: i,
                label: item?.WoooTypeName,
                value: item?.WoooTypeCode,
              };
            })}
            required={true}
            onChange={(e) => {}}
            disabled={true}
            leftIcon={<i className="fa-solid fa-briefcase"></i>}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TimeSelect
                label="===From Time==="
                name="FromTime"
                value={selectedWooo.FromTime}
                onChange={() => {}}
                disabled={true}
              />

              <TimeSelect
                label="===To Time==="
                name="ToTime"
                value={selectedWooo.ToTime}
                onChange={() => {}}
                disabled={true}
              />
            </div>
          </LocalizationProvider>

          <MyTextInput
            label={'Total Hour(s)'}
            disabled={true}
            value={getTotalHours(selectedWooo.FromTime, selectedWooo.ToTime)}
            name="totalHour"
            inputType="text"
            leftIcon={<i className="fa-solid fa-clock"></i>}
            onChangeHandler={() => {}}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateSelect
              label="===Date==="
              name="FromDate"
              value={selectedWooo?.FromDate}
              onChange={() => {}}
              disabled={true}
            />
          </LocalizationProvider>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-6 md:mt-0 md:w-1/2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateSelect
              disabled={true}
              label="===Rejoining Date==="
              name="RejoiningDate"
              value={selectedWooo?.FromDate}
              onChange={() => {}}
            />
          </LocalizationProvider>

          <MyTextInput
            label={'Status'}
            disabled={true}
            value={selectedWooo?.Status}
            name="totalHour"
            inputType="text"
            onChangeHandler={() => {}}
            leftIcon={<i className="fa-solid fa-file"></i>}
          />

          <MyTextarea
            required={true}
            label="Reason"
            name="Reason"
            value={selectedWooo.Reason}
            onChange={() => {}}
            rows={3}
            disabled={true}
            error=""
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col pb-6 pt-10 md:flex-row">
      <div className="grid grid-cols-1 gap-6 md:mr-5 md:w-1/2">
        <MyDropdown
          label="===Select Type==="
          name="WoooTypeCode"
          value={selectedWooo?.WoooTypeCode}
          dropDownData={selectWoooTypeData?.map((item, i) => {
            return {
              id: i,
              label: item?.WoooTypeName,
              value: item?.WoooTypeCode,
            };
          })}
          required={true}
          onChange={() => {}}
          disabled={true}
          leftIcon={<i className="fa-solid fa-briefcase"></i>}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateSelect
            label="===From Date==="
            name="FromDate"
            value={selectedWooo.FromDate}
            onChange={() => {}}
            disabled={true}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateSelect
            label="===To Date==="
            name="ToDate"
            value={selectedWooo.ToDate}
            onChange={() => {}}
            disabled={true}
          />
        </LocalizationProvider>

        <MyTextInput
          label={'Total Day(s)'}
          disabled={true}
          value={getTotalDays(selectedWooo?.FromDate, selectedWooo?.ToDate)}
          name="TotalDay"
          inputType="text"
          leftIcon={<i className="fa-solid fa-calendar-days"></i>}
          onChangeHandler={() => {}}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-6 md:mt-0 md:w-1/2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateSelect
            label="===Rejoining Date==="
            name="RejoiningDate"
            value={selectedWooo.RejoiningDate}
            onChange={() => {}}
            disabled={true}
          />
        </LocalizationProvider>

        <MyTextInput
          label={'Status'}
          disabled={true}
          value={selectedWooo?.Status}
          name="totalHour"
          inputType="text"
          onChangeHandler={() => {}}
          leftIcon={<i className="fa-solid fa-file"></i>}
        />

        <MyTextarea
          required={true}
          label="Reason"
          name="Reason"
          value={selectedWooo.Reason}
          onChange={() => {}}
          rows={3}
          disabled={false}
          error=""
        />
      </div>
    </div>
  );
};

export default ViewWoooDetails;
