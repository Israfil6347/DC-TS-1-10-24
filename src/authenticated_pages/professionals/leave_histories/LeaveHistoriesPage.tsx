import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyModal from 'global_shared/components/MyModal';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { CRUDModes } from 'global_shared/data/CRUDModes';
import { paginationData } from 'global_shared/data/paginationData';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { useContext, useEffect, useState } from 'react';
import LeaveApplicationForm from '../shared/components/LeaveApplicationForm';
import { LeaveApplicationModel } from '../shared/model/data/LeaveApplicationModel';
import HistoryLeaveDetailsTableDataRow from './components/HistoryLeaveDetailsTableDataRow';
import HistoryLeaveDetailsTableHeader from './components/HistoryLeaveDetailsTableHeader';
import useLeaveApplicationUpdateRequestStates from './hooks/useLeaveApplicationUpdateRequestStates';
import useLeaveHistoriesRequestState from './hooks/useLeaveHistoriesRequestState';
import { LeaveHistoryRequestModel } from './model/request/LeaveHistoryRequestModel';
import { Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
function LeaveHistoriesPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const [openLeaveApplicationForm, setOpenLeaveApplicationForm] =
    useState(false);
  const [crudMode, setCrudMode] = useState(CRUDModes.View);
  const param = useParams();
  const [paginationRequestObj, setPaginationRequestObj] = useState({
    leaveHistoryId: param.id,
    startRec: 0,
    pageSize: 10,
    searchText: '',
  });

  const {
    leaveApplicationUpdateRequestState,
    updateLeaveApplicationUpdateRequestState,
    setLeaveApplicationUpdateRequestState,
  } = useLeaveApplicationUpdateRequestStates();

  const { leaveHistoriesRequestState, updateLeaveHistoriesRequestState } =
    useLeaveHistoriesRequestState();

  const {
    loading: isLeaveHistoriesResponseDataLoaded,
    data: leaveHistoriesResponseData,
    message: leaveHistoriesResponseMessage,
    status: leaveHistoriesResponseStatus,
    setStatus: setLeaveHistoriesResponseStatus,
    executeCommand: getLeaveHistoriesCommand,
  } = useCommand<LeaveApplicationModel[] | null>();

  console.log(leaveHistoriesResponseData);

  const headers = {
    'Content-Type': 'application/json',
    token: localStorage.getItem('token'),
  };

  useEffect(() => {
    getLeaveHistoriesRequestHandler();
  }, [paginationRequestObj]);

  const getLeaveHistoriesRequestHandler = () => {
    const leaveHistoryRequestModel = new LeaveHistoryRequestModel(authUser);
    leaveHistoryRequestModel.FromDate = leaveHistoriesRequestState.FromDate;
    leaveHistoryRequestModel.ToDate = leaveHistoriesRequestState.ToDate;

    getLeaveHistoriesCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/getLeaveHistories',
      JSON.stringify(leaveHistoryRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const paginationHandler = (fieldName: string, fieldValue: any) => {
    if (fieldName === 'pageSize') {
      setPaginationRequestObj((prevState) => {
        return {
          ...prevState,
          startRec: 0,
          [fieldName]: fieldValue,
        };
      });
    } else {
      setPaginationRequestObj((prevState) => {
        return {
          ...prevState,
          [fieldName]: fieldValue,
        };
      });
    }
  };

  const index = () => {
    return paginationRequestObj.pageSize * paginationRequestObj.startRec;
  };

  const endIndex = () => {
    if (
      leaveHistoriesResponseData &&
      paginationRequestObj.startRec ===
        leaveHistoriesResponseData[0]?.Paging?.LastPage - 1
    ) {
      var temp = leaveHistoriesResponseData[0].Paging?.totalRecords - index();
      return index() + temp;
    } else {
      return index() + 10;
    }
  };

  return (
    <div>
      <LoaderDialogue isLoading={isLeaveHistoriesResponseDataLoaded} />

      <MyModal
        size={Size.Medium}
        show={openLeaveApplicationForm}
        onClose={() => setOpenLeaveApplicationForm(false)}
      >
        <LeaveApplicationForm
          title={
            crudMode === CRUDModes.View
              ? 'View Leave Details'
              : 'Edit Leave Details'
          }
          onClose={() => setOpenLeaveApplicationForm(false)}
          leaveApplicationStates={leaveApplicationUpdateRequestState}
          setLeaveApplicationStates={setLeaveApplicationUpdateRequestState}
          updateLeaveApplicationState={updateLeaveApplicationUpdateRequestState}
          mode={crudMode}
        />
      </MyModal>

      <section className="flex flex-col-reverse items-start gap-6 bg-surface text-justify md:flex-row">
        <div className="w-full">
          <div className="">
            <div className="bg-surface  px-4 text-primary shadow-sm md:px-12">
              <div className="animate-backInRight text-center">
                <h1 className=" py-5 text-2xl font-extrabold">
                  Leave Histories
                </h1>
                <div className="my-3 grid md:grid-cols-2">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="col-md-8 flex gap-3">
                      <DateSelect
                        disabled={false}
                        label="Form"
                        name="FromDate"
                        value={leaveHistoriesRequestState.FromDate}
                        error={leaveHistoriesRequestState.Errors.FromDate}
                        onChange={(fieldName, fieldValue) => {
                          updateLeaveHistoriesRequestState(
                            fieldName,
                            dayjs(fieldValue).format('DD-MMM-YYYY')
                          );
                        }}
                      />
                      <DateSelect
                        disabled={false}
                        label="To"
                        name="ToDate"
                        value={leaveHistoriesRequestState.ToDate}
                        error={leaveHistoriesRequestState.Errors.ToDate}
                        onChange={(fieldName, fieldValue) => {
                          updateLeaveHistoriesRequestState(
                            fieldName,
                            dayjs(fieldValue).format('DD-MMM-YYYY')
                          );
                        }}
                      />

                      <MyButton
                        name="Search"
                        label="Search"
                        styleClass="p-3 flex justify-center rounded border py-2  font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
                        onClick={() => {
                          getLeaveHistoriesRequestHandler();
                        }}
                        type={undefined}
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
                      {leaveHistoriesResponseData?.map(
                        (leaveDetails, index) => (
                          <HistoryLeaveDetailsTableDataRow
                            key={leaveDetails?.LeaveApplicationId}
                            leaveDetails={leaveDetails}
                            index={index + 1}
                            setLeaveUpdateStates={
                              setLeaveApplicationUpdateRequestState
                            }
                            setOpenLeaveApplicationForm={
                              setOpenLeaveApplicationForm
                            }
                            setMode={setCrudMode}
                          />
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="sticky bottom-0  flex grow flex-col items-center justify-between gap-2 bg-surface p-2 text-onSurface md:flex-row"
                id="table-footer"
              >
                <div className="mt-2 flex gap-2">
                  <label>Show</label>
                  <MyDropdown
                    name="pageSize"
                    value={paginationRequestObj?.pageSize}
                    required={false}
                    dropDownData={paginationData}
                    onChange={(event) => {
                      paginationHandler(event.target.name, event.target.value);
                    }}
                    label={''}
                    leftIcon={<i className="fa-solid fa-list-ol"></i>}
                  />
                  <label>entries</label>
                </div>
                <div>{`Showing ${index() + 1} to ${endIndex()} of ${
                  leaveHistoriesResponseData &&
                  leaveHistoriesResponseData[0]?.Paging?.totalRecords
                } entries`}</div>
                <div className="whitespace-nowrap text-right">
                  <Pagination
                    count={
                      leaveHistoriesResponseData
                        ? leaveHistoriesResponseData[0]?.Paging?.LastPage
                        : 0
                    }
                    variant="outlined"
                    shape="rounded"
                    defaultPage={1}
                    siblingCount={0}
                    onChange={(e, value) => {
                      paginationHandler('startRec', value - 1);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeaveHistoriesPage;
