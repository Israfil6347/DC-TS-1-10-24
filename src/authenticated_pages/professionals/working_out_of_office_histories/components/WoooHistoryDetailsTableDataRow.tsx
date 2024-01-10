import MyButton from 'global_shared/components/MyButton';
import { default as Moment, default as moment } from 'moment';
import React, { SetStateAction } from 'react';
import {
  ISelectedWooo,
  IWoooHistoryDetails,
} from '../interface/WoooHistoryInterface';

/**========================================================================
 * ?                                ABOUT
 * @author         :  Sunit Corneleous
 * @designation    :  Trainee
 * @email          :  sunit.corneleous25@gmail.com
 * @description    :
 * @createdOn      :  16 August 2023
 * @updatedBy      :  Sunit Corneleous
 * @updatedOn      :  16 August 2023
 *========================================================================**/

interface WoooHistoryDetailsTableDataRowPropType {
  index: number;
  woooDetails: IWoooHistoryDetails;
  setOpenWoooApplicationForm: React.Dispatch<SetStateAction<boolean>>;
  setOpenWoooApplicationUpdateForm: React.Dispatch<SetStateAction<boolean>>;
  setSelectedWooo: React.Dispatch<SetStateAction<ISelectedWooo>>;
}

const WoooHistoryDetailsTableDataRow: React.FC<
  WoooHistoryDetailsTableDataRowPropType
> = ({
  index,
  woooDetails,
  setOpenWoooApplicationForm,
  setOpenWoooApplicationUpdateForm,
  setSelectedWooo,
}: WoooHistoryDetailsTableDataRowPropType) => {
  return (
    <tr className="border-b bg-white ">
      <td className="px-6 py-4"># {index}</td>
      <td className="px-6 py-4">{woooDetails?.EmployeeName}</td>
      <td className="px-6 py-4">
        {Moment(woooDetails?.ApplicationDate).format('DD-MMM-YYYY')}
      </td>
      <td className="px-6 py-4">{woooDetails.WoooType}</td>
      <td className="px-6 py-4">
        {Moment(woooDetails?.FromDate).format('DD-MMM-YYYY')}{' '}
      </td>
      <td className="px-6 py-4">
        {Moment(woooDetails?.ToDate).format('DD-MMM-YYYY')}
      </td>
      <td className="px-6 py-4">
        {Moment(woooDetails?.RejoiningDate).format('DD-MMM-YYYY')}
      </td>
      <td className="px-6 py-4 ">
        <div className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          {woooDetails?.Status}
        </div>
      </td>
      <td className="px-6 py-4 ">
        <MyButton
          name=""
          label=""
          type="button"
          styleClass="w-8 flex justify-center rounded border py-2 mr-5 font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
          onClick={() => {
            setSelectedWooo(() => {
              const {
                WoooTypeCode,
                FromDate,
                ToDate,
                RejoiningDate,
                Reason,
                IsHourly,
                Status,
                EmployeeWoooId,
              } = woooDetails;

              return {
                WoooTypeCode,
                FromDate: moment(FromDate.split('T')[0]).format('ll'),
                ToDate: moment(ToDate.split('T')[0]).format('ll'),
                FromTime: FromDate.split('T')[1],
                ToTime: ToDate.split('T')[1],
                RejoiningDate: moment(RejoiningDate.split('T')[0]).format('ll'),
                Reason,
                IsHourly,
                Status,
                EmployeeWoooId,
              };
            });
            setOpenWoooApplicationForm(true);
          }}
        >
          <i className="fa-solid fa-eye"></i>{' '}
        </MyButton>
      </td>
      <td className="px-6 py-4 ">
        <MyButton
          disabled={!woooDetails?.IsEditable}
          label=""
          name=""
          type="button"
          styleClass="w-8 flex justify-center rounded border py-2 mr-5 font-semibold disabled:bg-gray-500 uppercase text-onPrimary hover:scale-105 bg-primary"
          onClick={() => {
            setSelectedWooo(() => {
              const {
                WoooTypeCode,
                FromDate,
                ToDate,
                RejoiningDate,
                Reason,
                IsHourly,
                Status,
                EmployeeWoooId,
              } = woooDetails;

              return {
                WoooTypeCode,
                FromDate: moment(FromDate.split('T')[0]).format('ll'),
                ToDate: moment(ToDate.split('T')[0]).format('ll'),
                FromTime: FromDate.split('T')[1],
                ToTime: ToDate.split('T')[1],
                RejoiningDate: moment(RejoiningDate.split('T')[0]).format('ll'),
                Reason,
                IsHourly,
                Status,
                EmployeeWoooId,
              };
            });
            setOpenWoooApplicationUpdateForm(true);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </MyButton>
      </td>
    </tr>
  );
};

export default WoooHistoryDetailsTableDataRow;
