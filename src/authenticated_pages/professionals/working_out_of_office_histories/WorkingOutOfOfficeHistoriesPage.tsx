import { Pagination } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import logoIcon from 'assets/images/logo/logocccul.png';
import dayjs from 'dayjs';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyModal from 'global_shared/components/MyModal';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import HistoryLeaveDetailsTableHeader from '../leave_histories/components/HistoryLeaveDetailsTableHeader';
import WoooApplicationTab from '../shared/components/working_out_of_office/WoooApplicationTab';
import { ISelectWoooType } from '../shared/components/working_out_of_office/interface/SelectWoooTypeModel';
import { getFullDateAndTime } from '../shared/utils/calculateDaysAndHours';
import useWoooApplicationRequestStates from '../working_out_of_office/hooks/useWoooApplicationRequestStates';
import ViewWoooDetails from './components/ViewWoooDetails';
import WoooHistoryDetailsTableDataRow from './components/WoooHistoryDetailsTableDataRow';
import {
  ISelectedWooo,
  IWoooHistoryDetails,
} from './interface/WoooHistoryInterface';
import { UpdateWoooRequestModel } from './model/request/EmployeeWoooId';
import { WoooHistoryRequestModel } from './model/request/WoooHistoryRequestModel';

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

const WorkingOutOfOfficeHistoriesPage = () => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const [woooData, setWoooData] = useState<IWoooHistoryDetails[]>([]);

  // state from open close view and update form
  const [openWoooApplicationForm, setOpenWoooApplicationForm] =
    useState<boolean>(false);
  const [openWoooApplicationUpdateForm, setOpenWoooApplicationUpdateForm] =
    useState<boolean>(false);

  // from date and to date to filter wooo history
  const [fromDate, setFromDate] = useState<string>(
    moment().startOf('month').format('L')
  );
  const [toDate, setToDate] = useState<string>(
    moment().endOf('month').format('L')
  );

  // filter type of wooo (hours, days, all)
  const [woooDataTypeToDisplay, setWoooDataTypeToDisplay] =
    useState<string>('');

  // selected wooo to update or view
  const [selectedWooo, setSelectedWooo] = useState<ISelectedWooo>({
    WoooTypeCode: '',
    FromDate: '',
    ToDate: '',
    RejoiningDate: '',
    FromTime: '',
    ToTime: '',
    IsHourly: true,
    Reason: '',
    Status: '',
    EmployeeWoooId: 0,
  });

  const {
    woooApplicationRequestStates,
    setWoooApplicationRequestStates,
    updateWoooApplicationRequestState,
  } = useWoooApplicationRequestStates();

  // get wooo history api call
  const {
    loading: getWoooHistoriesResponseLoading,
    data: getWoooHistoriesResponseData,
    executeCommand: getWoooHistoriesCommand,
  } = useCommand<IWoooHistoryDetails[]>();
  console.log(getWoooHistoriesResponseData);

  // select wooo types for dropdown api call
  const {
    loading: isSelectWooTypesResponseDataLoading,
    data: selectWooTypesResponseData,
    executeCommand: getWooTypesCommand,
  } = useCommand<ISelectWoooType[]>();

  const {
    loading: isUpdateWoooApplicationResponseLoading,
    data: updateWoooApplicationResponseData,
    message: updateWoooApplicationResponseDataMessage,
    status: updateWoooApplicationResponseStatus,
    executeCommand: updateWoooApplicationResponseCommand,
  } = useCommand();

  const woooHistoryRequestModel = new WoooHistoryRequestModel(authUser);
  woooHistoryRequestModel.FromDate = fromDate;
  woooHistoryRequestModel.ToDate = toDate;
  woooHistoryRequestModel.EmployeeWoooId = -1;
  woooHistoryRequestModel.IsSupervisorTreeWise = false;

  useEffect(() => {
    getWoooHistoriesRequestHandler();
  }, [openWoooApplicationUpdateForm]);

  useEffect(() => {
    const baseRequest = new BaseRequestModel(authUser);

    getWooTypesCommand(
      `${process.env.REACT_APP_BASE_URL}/professionals_v1/GetWoooType`,
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  const getWoooHistoriesRequestHandler = () => {
    getWoooHistoriesCommand(
      process.env.REACT_APP_BASE_URL +
        '/professionals_v1/GetEmployeeWorkingOutofOfficeDetails',
      JSON.stringify(woooHistoryRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  useEffect(() => {
    const { WoooTypeCode, FromDate, ToDate, RejoiningDate, Reason, IsHourly } =
      selectedWooo;

    if (Object.keys(selectedWooo).length > 0) {
      updateWoooApplicationRequestState('WoooTypeCode', WoooTypeCode);
      updateWoooApplicationRequestState(
        'FromDate',
        moment(FromDate?.split('T')[0]).format('ll')
      );
      updateWoooApplicationRequestState(
        'ToDate',
        moment(ToDate?.split('T')[0]).format('ll')
      );
      updateWoooApplicationRequestState('Reason', Reason);
      updateWoooApplicationRequestState(
        'RejoiningDate',
        moment(RejoiningDate.split('T')[0]).format('ll')
      );
      updateWoooApplicationRequestState('IsHourly', IsHourly);
      updateWoooApplicationRequestState('FromTime', selectedWooo?.FromTime);
      updateWoooApplicationRequestState('ToTime', selectedWooo?.ToTime);
    }
  }, [selectedWooo]);

  // set wooo type filter state
  useEffect(() => {
    if (woooDataTypeToDisplay === 'All' || woooDataTypeToDisplay === '') {
      getWoooHistoriesResponseData && setWoooData(getWoooHistoriesResponseData);
    } else if (woooDataTypeToDisplay === 'For Hours') {
      getWoooHistoriesResponseData &&
        setWoooData(
          getWoooHistoriesResponseData.filter((item) => {
            return item.IsHourly === true;
          })
        );
    } else if (woooDataTypeToDisplay === 'For Days') {
      getWoooHistoriesResponseData &&
        setWoooData(
          getWoooHistoriesResponseData.filter((item) => {
            return item.IsHourly === false;
          })
        );
    }
  }, [woooDataTypeToDisplay, getWoooHistoriesResponseData]);

  const updateWoooApplicationSubmitHandler = () => {
    const baseRequest = new UpdateWoooRequestModel(authUser);

    if (woooApplicationRequestStates.IsHourly) {
      baseRequest.isHourly = woooApplicationRequestStates.IsHourly;
      baseRequest.FromDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forHours.fromDate;
      baseRequest.ToDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forHours.toDate;
      baseRequest.RejoiningDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forHours.rejoinDate;
      baseRequest.WoooTypeCode = woooApplicationRequestStates.WoooTypeCode;
      baseRequest.Reason = woooApplicationRequestStates.Reason;
      baseRequest.EmployeeWoooId = selectedWooo.EmployeeWoooId;
    } else if (woooApplicationRequestStates.IsHourly === false) {
      baseRequest.isHourly = woooApplicationRequestStates.IsHourly;
      baseRequest.FromDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forDays.fromDate;
      baseRequest.ToDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forDays.toDate;
      baseRequest.RejoiningDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forDays.rejoinDate;
      baseRequest.WoooTypeCode = woooApplicationRequestStates.WoooTypeCode;
      baseRequest.Reason = woooApplicationRequestStates.Reason;
      baseRequest.EmployeeWoooId = selectedWooo.EmployeeWoooId;
    }

    updateWoooApplicationResponseCommand(
      `${process.env.REACT_APP_BASE_URL}/professionals_v1/UpdateEmployeeWorkingOutofOffice`,
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  return (
    <div>
      {/* Loader Dialogue */}
      <LoaderDialogue
        isLoading={
          getWoooHistoriesResponseLoading ||
          isUpdateWoooApplicationResponseLoading ||
          isSelectWooTypesResponseDataLoading
        }
      />

      {/* View Details Modal */}
      <MyModal
        size={Size.Medium}
        show={openWoooApplicationForm}
        onClose={() => setOpenWoooApplicationForm(false)}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="w-full bg-background py-6">
              <div className="flex w-full flex-col items-center gap-3">
                <img src={logoIcon} alt="" />
                <h3 className="text-xl font-bold uppercase text-primary">
                  View Application
                </h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex items-center justify-center gap-6 bg-background px-4 py-6 text-center">
              <MyButton
                type="button"
                name="close"
                label="close"
                styleClass="w-1/2 md:w-1/5 rounded border py-2 font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
                onClick={() => setOpenWoooApplicationForm(false)}
              />
            </div>
          }
          onCancel={() => setOpenWoooApplicationForm(false)}
        >
          <div
            className="overflow-hidden overflow-y-scroll px-4 py-6"
            style={{ maxHeight: window.innerHeight - 460 }}
          >
            {selectedWooo?.IsHourly ? (
              <ViewWoooDetails
                selectedWooo={selectedWooo}
                isHourly={true}
                selectWoooTypeData={selectWooTypesResponseData}
              />
            ) : (
              <ViewWoooDetails
                selectedWooo={selectedWooo}
                isHourly={false}
                selectWoooTypeData={selectWooTypesResponseData}
              />
            )}
          </div>
        </MyDialogueView>
      </MyModal>

      {/* Update Wooo Application Modal */}
      <MyModal
        size={Size.Medium}
        show={openWoooApplicationUpdateForm}
        onClose={() => setOpenWoooApplicationUpdateForm(false)}
      >
        <MyDialogueView
          dialogueHeader={
            <div className="w-full bg-background py-6">
              <div className="flex w-full flex-col items-center gap-3">
                <img src={logoIcon} alt="" />
                <h3 className="text-xl font-bold uppercase text-primary">
                  Update Application
                </h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex items-center justify-center gap-6 bg-background px-4 py-6 text-center">
              <MyButton
                name="close"
                label="close"
                type="button"
                styleClass="w-1/2 md:w-1/5 rounded border py-2 font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
                onClick={() => setOpenWoooApplicationUpdateForm(false)}
              />
            </div>
          }
          onCancel={() => setOpenWoooApplicationUpdateForm(false)}
        >
          <div
            className="overflow-hidden overflow-y-scroll px-4 py-6"
            style={{ maxHeight: window.innerHeight - 460 }}
          >
            <WoooApplicationTab
              selectWoooTypeData={selectWooTypesResponseData}
              woooApplicationRequestStates={woooApplicationRequestStates}
              submitWoooApplicationHandler={updateWoooApplicationSubmitHandler}
              submitWoooResponseData={
                updateWoooApplicationResponseData as string
              }
              submitWoooResponseStatus={updateWoooApplicationResponseStatus}
              submitWoooResponseMessage={
                updateWoooApplicationResponseDataMessage
              }
              updateWoooApplicationRequestState={
                updateWoooApplicationRequestState
              }
              closeModal={() => {
                setOpenWoooApplicationForm(false);
                setOpenWoooApplicationUpdateForm(false);
              }}
            />
          </div>
        </MyDialogueView>
      </MyModal>
      <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
        <div className="w-full">
          <div className="animate-slideInUp">
            <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
              <div className="animate-backInRight text-center">
                <h1 className=" py-5 text-2xl font-extrabold">
                  Working Out Of Office Histories
                </h1>
                <div className="my-3 grid md:grid-cols-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="col-md-8 flex gap-3">
                      <DateSelect
                        disabled={false}
                        label="Form"
                        name="FromDate"
                        value={fromDate}
                        onChange={(fieldName, fieldValue) => {
                          setFromDate(dayjs(fieldValue).format('DD-MMM-YYYY'));
                        }}
                      />
                      <DateSelect
                        disabled={false}
                        label="To"
                        name="ToDate"
                        value={toDate}
                        onChange={(newValue) => {
                          setToDate(dayjs(newValue).format('DD-MMM-YYYY'));
                        }}
                      />

                      <MyButton
                        name="Search"
                        label="Search"
                        type="button"
                        styleClass="p-3 flex justify-center rounded border py-2  font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
                        onClick={getWoooHistoriesRequestHandler}
                      />
                    </div>
                    <div className="mt-3 md:ml-auto md:mt-0 md:w-[50%]">
                      <MyDropdown
                        label="===Filter Type==="
                        name="WoooType"
                        // value={woooDataTypeToDisplay}
                        dropDownData={['All', 'For Hours', 'For Days'].map(
                          (item, index) => {
                            return {
                              id: index,
                              label: item,
                              value: item,
                            };
                          }
                        )}
                        onChange={(e) => {
                          setWoooDataTypeToDisplay(e.target.value);
                        }}
                        leftIcon={<i className="fa-solid fa-filter"></i>}
                      />
                    </div>
                  </LocalizationProvider>
                </div>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-500   ">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                      <HistoryLeaveDetailsTableHeader />
                    </thead>
                    <tbody>
                      {woooData?.map((woooDetails, index) => (
                        <WoooHistoryDetailsTableDataRow
                          key={index}
                          index={index + 1}
                          woooDetails={woooDetails}
                          setOpenWoooApplicationForm={
                            setOpenWoooApplicationForm
                          }
                          setOpenWoooApplicationUpdateForm={
                            setOpenWoooApplicationUpdateForm
                          }
                          setSelectedWooo={setSelectedWooo}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="sticky bottom-0  flex grow flex-col items-center justify-between gap-2 bg-surface p-2 text-onSurface md:flex-row"
                id="table-footer"
              >
                <div className="flex items-center gap-2">
                  <label>Show</label>
                  <MyDropdown
                    label={''}
                    name="pageSize"
                    // value={getWoooHistoriesResponseData?.pageSize}
                    required={false}
                    // dropDownData={paginationData}
                    onChange={(e) => {
                      // paginationHandler(name, value);
                    }}
                    leftIcon={<i className="fa-solid fa-filter"></i>}
                  />

                  <label>entries</label>
                </div>
                {/*  <div>{`Showing ${index()} to ${endIndex()} of ${
                  getWoooHistoriesResponseData?.Paging?.totalRecords
                } entries`}</div> */}
                <div className="whitespace-nowrap text-right">
                  <Pagination
                    // count={getWoooHistoriesResponseData?.Paging?.LastPage}
                    variant="outlined"
                    shape="rounded"
                    defaultPage={1}
                    siblingCount={0}
                    /*  onChange={(e, value) => {
                      paginationHandler('startRec', value - 1);
                    }} */
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkingOutOfOfficeHistoriesPage;
