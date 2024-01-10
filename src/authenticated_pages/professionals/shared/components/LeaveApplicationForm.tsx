import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import logoIcon from 'assets/images/logo/logocccul.png';
import { validateFallbackApprovalRequestState } from 'authenticated_pages/professionals/fallback_approval/validation/validateFallbackApprovalRequestState';
import { LeaveApplicationRequestState } from 'authenticated_pages/professionals/leave_application/hooks/useLeaveApplicationRequestStates';
import { EmployeeSearchRequestModel } from 'authenticated_pages/professionals/leave_application/model/request/EmployeeSearchRequestModel';
import { validateLeaveApplicationRequestState } from 'authenticated_pages/professionals/leave_application/validation/validateLeaveApplicationRequestState';
import { EmployeeLeaveRequestModel } from 'authenticated_pages/professionals/leave_histories/model/request/EmployeeLeaveRequestModel';
import { validateLeaveUpdateRequest } from 'authenticated_pages/professionals/leave_histories/utils/validateLeaveUpdateRequest';
import dayjs from 'dayjs';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MySearchInput from 'global_shared/components/MySearchInput';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyTextarea from 'global_shared/components/MyTextarea';
import TimeSelect from 'global_shared/components/TimeSelect';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { CRUDModes } from 'global_shared/data/CRUDModes';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { convertMinutesToHours } from 'global_shared/utils/dateUtils';
import { default as Moment, default as moment } from 'moment';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeaveTypes } from '../data/LeaveTypes';
import { LeaveApplicationModel } from '../model/data/LeaveApplicationModel';
import { LeaveBalanceModel } from '../model/data/LeaveBalanceModel';
import { LeaveTypeBalanceResponseModel } from '../model/data/LeaveTypeBalanceResponseModel';
import { LeaveTypeModel } from '../model/data/LeaveTypeModel';
import { SubmitLeaveApplicationRequestModel } from '../model/request/SubmitLeaveApplicationRequestModel';
import { assignLeaveDetailsModelValues } from '../utils/assignLeaveDetailsModelValues';
import { validateTotalLeaveDays } from '../utils/validateTotalLeaveDays';

interface LeaveApplicationFormProps {
  title: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  leaveApplicationStates: LeaveApplicationRequestState;
  updateLeaveApplicationState: (
    fieldName: string,
    fieldValue: any,
    leavePolicy: LeaveBalanceModel
  ) => void;
  setLeaveApplicationStates: React.Dispatch<
    React.SetStateAction<LeaveApplicationRequestState>
  >;

  mode: CRUDModes;
}

const LeaveApplicationForm: React.FC<LeaveApplicationFormProps> = ({
  title = 'Leave Application',
  onClose,
  leaveApplicationStates,
  updateLeaveApplicationState,
  setLeaveApplicationStates,

  mode,
}) => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const navigate = useNavigate();

  const {
    loading: isFallbackRequestsResponseDataLoading,
    data: fallbackRequestsResponseData,
    message: fallbackRequestsResponseMessage,
    status: fallbackRequestsResponseStatus,
    setStatus: setFallbackRequestsResponseStatus,
    executeCommand: getFallbackRequestsCommand,
  } = useCommand<LeaveApplicationModel[] | null>();

  const {
    loading: isLeaveTypePolicyResponseDataLoading,
    data: leaveTypePolicyResponseData,
    executeCommand: getLeaveTypePolicyRequestCommand,
  } = useCommand<LeaveTypeBalanceResponseModel | null>();

  const {
    loading: isLeaveTypesResponseDataLoading,
    data: leaveTypesResponseData,
    executeCommand: getLeaveTypesCommand,
  } = useCommand<LeaveTypeModel[] | null>();

  const {
    loading: isLeaveApplicationResponseDataLoading,
    data: leaveApplicationResponseData,
    message: leaveApplicationResponseMessage,
    status: leaveApplicationResponseStatus,
    setStatus: setLeaveApplicationResponseStatus,
    executeCommand: submitLeaveApplicationRequestCommand,
  } = useCommand<string | null>();

  const {
    loading: isLeaveApplicationUpdateResponseDataLoading,
    data: leaveApplicationUpdateResponseData,
    message: leaveApplicationUpdateResponseMessage,
    status: leaveApplicationUpdateResponseStatus,
    setStatus: setLeaveApplicationUpdateResponseStatus,
    executeCommand: submitLeaveApplicationUpdateRequestCommand,
  } = useCommand<string | null>();

  const {
    loading: isFallbackApprovalResponseDataLoading,
    data: fallbackApprovalResponseData,
    message: fallbackApprovalResponseMessage,
    status: fallbackApprovalResponseStatus,
    setStatus: setFallbackApprovalResponseStatus,
    executeCommand: submitFallbackApprovalRequestCommand,
  } = useCommand<string | null>();

  const handleLeaveApplicationSubmit = () => {
    const submitLeaveApplicationRequestModel =
      new SubmitLeaveApplicationRequestModel(authUser);

    submitLeaveApplicationRequestModel.CurrentStage =
      leaveApplicationStates.CurrentStage;
    submitLeaveApplicationRequestModel.ApplicationDate =
      leaveApplicationStates.ApplicationDate;

    submitLeaveApplicationRequestModel.RejoiningDate =
      leaveApplicationStates.RejoiningDate === ''
        ? leaveApplicationStates?.FromDate
        : leaveApplicationStates.RejoiningDate;
    submitLeaveApplicationRequestModel.FallbackEmployeeCode =
      leaveApplicationStates.FallbackEmployeeCode === ''
        ? authUser.EmployeeCode
        : leaveApplicationStates.FallbackEmployeeCode;
    submitLeaveApplicationRequestModel.FallbackPersonName =
      leaveApplicationStates.FallbackPersonName === ''
        ? authUser.UserName
        : leaveApplicationStates.FallbackPersonName;
    submitLeaveApplicationRequestModel.LeaveStageRemarks =
      leaveApplicationStates.LeaveStageRemarks;

    submitLeaveApplicationRequestModel.LeaveApplicationId =
      leaveApplicationStates.LeaveApplicationId;

    submitLeaveApplicationRequestModel.LeaveTypeCode =
      leaveApplicationStates.LeaveTypeCode;

    submitLeaveApplicationRequestModel.Remarks = leaveApplicationStates.Remarks;
    submitLeaveApplicationRequestModel.ToTime = leaveApplicationStates.ToTime;
    if (leaveApplicationStates.ToTime === '') {
      submitLeaveApplicationRequestModel.ToDate = leaveApplicationStates.ToDate;
    } else {
      submitLeaveApplicationRequestModel.ToDate =
        leaveApplicationStates.ToDate + ' ' + leaveApplicationStates.ToTime;
    }
    submitLeaveApplicationRequestModel.FromTime =
      leaveApplicationStates.FromTime;
    if (leaveApplicationStates.FromTime === '') {
      submitLeaveApplicationRequestModel.FromDate = moment(
        new Date(leaveApplicationStates?.FromDate)
      ).format('DD-MMM-YYYY');
    } else {
      submitLeaveApplicationRequestModel.FromDate =
        leaveApplicationStates?.FromDate +
        ' ' +
        leaveApplicationStates.FromTime;
    }

    console.log(submitLeaveApplicationRequestModel);
    submitLeaveApplicationRequestCommand(
      process.env.REACT_APP_BASE_URL +
        '/professionals_v1/submitLeaveApplication',
      JSON.stringify(submitLeaveApplicationRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const handleFallbackAcceptSubmit = () => {
    submitFallbackApprovalRequestCommand(
      process.env.REACT_APP_BASE_URL +
        '/professionals_v1/acceptFallbackRequest',
      assignLeaveDetailsModelValues(leaveApplicationStates, authUser),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const handleLeaveApplicationUpdateSubmit = () => {
    submitLeaveApplicationUpdateRequestCommand(
      process.env.REACT_APP_BASE_URL +
        '/professionals_v1/updateLeaveApplication',
      assignLeaveDetailsModelValues(leaveApplicationStates, authUser),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  useEffect(() => {
    const baseRequest = new BaseRequestModel(authUser);

    getLeaveTypesCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/getLeaveTypes',
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    if (mode === CRUDModes.Create) {
      setLeaveApplicationStates((prevState) => {
        return {
          ...prevState,
          LeaveApplicationId: 0,
          FallbackEmployeeCode: '',
          FallbackPersonName: '',
          FromDate: '',
          FromTime: '',
          ToDate: '',
          ToTime: '',
          RejoiningDate: '',
          Remarks: '',
          LeaveStageRemarks: '',
          CurrentStage: '',
          ApplicationDate: '',
          Errors: {
            LeaveApplicationId: '',
            LeaveTypeCode: '',
            FallbackEmployeeCode: '',
            FallbackPersonName: '',
            FromDate: '',
            FromTime: '',
            ToDate: '',
            ToTime: '',
            RejoiningDate: '',
            Remarks: '',
            LeaveStageRemarks: '',
            CurrentStage: '',
            ApplicationDate: '',
          },
        };
      });
    }

    const empLeaveBaseRequest = new EmployeeLeaveRequestModel(authUser);
    empLeaveBaseRequest.LeaveTypeCode = leaveApplicationStates?.LeaveTypeCode;

    getLeaveTypePolicyRequestCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/getLeaveTypeBalances',
      JSON.stringify(empLeaveBaseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [leaveApplicationStates?.LeaveTypeCode]);

  const employeeSearchHandler = () => {
    const baseRequest = new EmployeeSearchRequestModel(authUser);
    baseRequest.searchText = leaveApplicationStates.FallbackEmployeeCode;

    getFallbackRequestsCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/searchEmployee',
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  };

  const name = fallbackRequestsResponseData?.[0]?.FullName?.split(/\|/);

  let totalDays = 0;

  if (leaveTypePolicyResponseData?.LeaveInfo?.WithTime) {
    totalDays =
      leaveApplicationStates?.FromDate !== '' &&
      leaveApplicationStates?.ToDate !== ''
        ? moment(
            `${leaveApplicationStates?.ToDate} ${leaveApplicationStates?.ToTime}`
          ).diff(
            moment(
              `${leaveApplicationStates?.FromDate} ${leaveApplicationStates?.FromTime}`
            ),
            'minutes'
          )
        : 0;
  } else {
    totalDays =
      leaveApplicationStates?.FromDate !== '' &&
      leaveApplicationStates?.ToDate !== ''
        ? moment(leaveApplicationStates?.ToDate).diff(
            moment(leaveApplicationStates?.FromDate),
            'days'
          ) + 1
        : 0;
  }

  return (
    <>
      <LoaderDialogue
        isLoading={
          isFallbackRequestsResponseDataLoading ||
          isLeaveTypePolicyResponseDataLoading ||
          isLeaveTypesResponseDataLoading ||
          isLeaveApplicationResponseDataLoading ||
          isLeaveApplicationUpdateResponseDataLoading ||
          isFallbackApprovalResponseDataLoading
        }
      />

      <SuccessDialogue
        isDialogueOpen={
          leaveApplicationResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setLeaveApplicationResponseStatus(null);
          onClose(false);
          navigate('/Personnel/leave_application');
        }}
      >
        {leaveApplicationResponseData}
      </SuccessDialogue>

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          leaveApplicationResponseStatus === 'failed' ? true : false
        }
        cancelButtonText="Ok"
        onCloseButtonClick={() => {
          setLeaveApplicationResponseStatus(null);
        }}
      >
        {leaveApplicationResponseMessage}
      </FailedDialogue>

      <SuccessDialogue
        isDialogueOpen={
          leaveApplicationUpdateResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setLeaveApplicationUpdateResponseStatus(null);
          onClose(false);
          navigate('/Personnel/leave_application');
        }}
      >
        {leaveApplicationUpdateResponseData}
      </SuccessDialogue>

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          leaveApplicationUpdateResponseStatus === 'failed' ? true : false
        }
        onCloseButtonClick={() => {
          setLeaveApplicationUpdateResponseStatus(null);
        }}
      >
        {leaveApplicationUpdateResponseMessage}
      </FailedDialogue>

      <SuccessDialogue
        isDialogueOpen={
          fallbackApprovalResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setFallbackApprovalResponseStatus(null);
          onClose(false);
          navigate('/Personnel/leave_application');
        }}
      >
        {fallbackApprovalResponseData}
      </SuccessDialogue>

      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          fallbackApprovalResponseStatus === 'failed' ? true : false
        }
        onCloseButtonClick={() => {
          setFallbackApprovalResponseStatus(null);
        }}
      >
        {fallbackApprovalResponseMessage}
      </FailedDialogue>

      <MyDialogueView
        dialogueHeader={
          <div className="w-full bg-background py-6">
            <div className="flex w-full flex-col items-center gap-3">
              <img src={logoIcon} alt="" />
              <h3 className="text-xl font-bold uppercase text-primary">
                {title}
              </h3>
            </div>
          </div>
        }
        dialogueFooter={
          <div className="flex items-center justify-center gap-6 bg-background py-6 px-4 text-center">
            <MyButton
              name="close"
              label="close"
              styleClass="w-1/2 md:w-1/5 rounded border py-2 font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
              onClick={() => onClose(false)}
              type={undefined}
            />
            {mode === CRUDModes.Create ||
            mode === CRUDModes.Approve ||
            mode === CRUDModes.Edit ? (
              <MyButton
                name="Submit"
                label={
                  mode === CRUDModes.Edit
                    ? 'Update'
                    : mode === CRUDModes.Approve
                    ? 'Accept'
                    : 'Apply'
                }
                onClick={() => {
                  var errors = '';
                  if (mode === CRUDModes.Create) {
                    let fieldName: keyof typeof leaveApplicationStates;
                    for (fieldName in leaveApplicationStates) {
                      updateLeaveApplicationState(
                        fieldName,
                        leaveApplicationStates[fieldName],
                        leaveTypePolicyResponseData?.LeaveInfo!
                      );
                      errors =
                        errors +
                        validateLeaveApplicationRequestState(
                          fieldName,
                          leaveApplicationStates[fieldName],
                          leaveTypePolicyResponseData?.LeaveInfo!
                        );
                    }

                    errors =
                      errors +
                      validateTotalLeaveDays(
                        totalDays,
                        leaveTypePolicyResponseData?.LeaveInfo!
                      );

                    if (errors?.length !== 0) {
                      return;
                    }

                    handleLeaveApplicationSubmit();
                  } else if (mode === CRUDModes.Edit) {
                    let fieldName: keyof typeof leaveApplicationStates;
                    for (fieldName in leaveApplicationStates) {
                      updateLeaveApplicationState(
                        fieldName,
                        leaveApplicationStates[fieldName],
                        leaveTypePolicyResponseData?.LeaveInfo!
                      );
                      errors =
                        errors +
                        validateLeaveUpdateRequest(
                          fieldName,
                          leaveApplicationStates[fieldName],
                          leaveTypePolicyResponseData?.LeaveInfo!
                        );
                    }

                    if (errors?.length !== 0) {
                      return;
                    }

                    handleLeaveApplicationUpdateSubmit();
                  } else {
                    let fieldName: keyof typeof leaveApplicationStates;
                    for (fieldName in leaveApplicationStates) {
                      updateLeaveApplicationState(
                        fieldName,
                        leaveApplicationStates[fieldName],
                        leaveTypePolicyResponseData?.LeaveInfo!
                      );
                      errors =
                        errors +
                        validateFallbackApprovalRequestState(
                          fieldName,
                          leaveApplicationStates[fieldName]
                        );
                    }

                    if (errors?.length !== 0) {
                      return;
                    }

                    handleFallbackAcceptSubmit();
                  }
                }}
                styleClass="w-1/2 md:w-1/5 rounded border py-2 font-semibold uppercase text-onPrimary hover:scale-105 bg-primary"
                type={undefined}
              />
            ) : (
              ''
            )}
          </div>
        }
        onCancel={() => onClose(false)}
      >
        <div
          className="overflow-hidden overflow-y-scroll py-6 px-4"
          style={{ maxHeight: window.innerHeight - 460 }}
        >
          <div className="grid-row-2 mb-5 grid grid-cols-1 gap-6 md:mb-0 md:grid-cols-2 ">
            <MyDropdown
              disabled={
                mode === CRUDModes.View ||
                mode === CRUDModes.Approve ||
                mode === CRUDModes.Approve
                  ? true
                  : false
              }
              label="===Type Of Leave==="
              name="LeaveTypeCode"
              value={leaveApplicationStates?.LeaveTypeCode}
              defaultValue={leaveApplicationStates?.LeaveTypeCode}
              error={leaveApplicationStates?.Errors?.LeaveTypeCode}
              required={true}
              onChange={(event) => {
                updateLeaveApplicationState(
                  event.target.name,
                  event.target.value,
                  leaveTypePolicyResponseData?.LeaveInfo!
                );
              }}
              dropDownData={leaveTypesResponseData?.map((obj, index) => {
                return {
                  id: index,
                  value: obj?.LeaveTypeCode,
                  label: obj?.LeaveType,
                };
              })}
              leftIcon={<i className="fa-solid fa-head-side-cough"></i>}
            />

            {leaveTypePolicyResponseData?.LeaveInfo?.IsFallbackRequired && (
              <div className="">
                <div className="relative  w-full">
                  <MySearchInput
                    leftIcon={<i className="fa-solid fa-user-tie"></i>}
                    disabled={
                      mode === CRUDModes.View || mode === CRUDModes.Approve
                        ? true
                        : false
                    }
                    required={
                      leaveTypePolicyResponseData?.LeaveInfo?.IsFallbackRequired
                    }
                    label="Fallback Employee Id"
                    value={leaveApplicationStates?.FallbackEmployeeCode}
                    name="FallbackEmployeeCode"
                    error={leaveApplicationStates?.Errors?.FallbackEmployeeCode}
                    onChange={(event) => {
                      updateLeaveApplicationState(
                        event.target.name,
                        event.target.value,
                        leaveTypePolicyResponseData?.LeaveInfo!
                      );
                    }}
                    onSubmit={employeeSearchHandler}
                  />
                </div>
              </div>
            )}

            {leaveTypePolicyResponseData?.LeaveInfo?.IsFallbackRequired && (
              <MyTextInput
                disabled={
                  mode === CRUDModes.View || mode === CRUDModes.Approve
                    ? true
                    : false
                }
                label="Fallback Employee Name"
                value={
                  name ? name[0] : leaveApplicationStates?.FallbackPersonName
                }
                error={leaveApplicationStates?.Errors?.FallbackPersonName}
                name="FallbackPersonName"
                onChangeHandler={(event) => {
                  updateLeaveApplicationState(
                    event.target.name,
                    event.target.value,
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                }}
                inputType="text"
                required={
                  leaveTypePolicyResponseData?.LeaveInfo?.IsFallbackRequired
                }
                leftIcon={<i className="fa-solid fa-user-tie"></i>}
              />
            )}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateSelect
                disabled={
                  mode === CRUDModes.View || mode === CRUDModes.Approve
                    ? true
                    : false
                }
                label="===From Date==="
                name="FromDate"
                value={
                  leaveApplicationStates?.Errors?.FromDate === ''
                    ? leaveApplicationStates?.FromDate
                    : ''
                }
                error={leaveApplicationStates?.Errors?.FromDate}
                onChange={(fieldName, fieldValue) => {
                  updateLeaveApplicationState(
                    fieldName,
                    dayjs(fieldValue).format('MMM DD, YYYY'),
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                  if (
                    leaveApplicationStates?.LeaveTypeCode ===
                    LeaveTypes.HourLeave
                  ) {
                    updateLeaveApplicationState(
                      'ToDate',
                      dayjs(fieldValue).format('MMM DD, YYYY'),
                      leaveTypePolicyResponseData?.LeaveInfo!
                    );
                  }
                }}
              />

              {leaveTypePolicyResponseData?.LeaveInfo?.WithTime && (
                <div className="">
                  <TimeSelect
                    disabled={
                      mode === CRUDModes.View || mode === CRUDModes.Approve
                        ? true
                        : false
                    }
                    label="From Time"
                    name="FromTime"
                    value={
                      leaveApplicationStates?.FromTime === ''
                        ? leaveApplicationStates.FromDate
                        : leaveApplicationStates?.FromTime
                    }
                    error={leaveApplicationStates?.Errors?.FromTime}
                    onChange={(value) => {
                      const time = dayjs(value).format('LT');
                      const time24 = moment(time, 'hh:mm A').format('HH:mm');

                      updateLeaveApplicationState(
                        'FromTime',
                        time24,
                        leaveTypePolicyResponseData?.LeaveInfo!
                      );

                      updateLeaveApplicationState(
                        'ToTime',
                        moment(time, 'hh:mm A')
                          .add(2, 'hours')
                          .add(30, 'minutes')
                          .format('HH:mm'),
                        leaveTypePolicyResponseData?.LeaveInfo!
                      );
                    }}
                  />
                </div>
              )}
              <DateSelect
                disabled={
                  mode === CRUDModes.View ||
                  mode === CRUDModes.Approve ||
                  leaveTypePolicyResponseData?.LeaveInfo?.LeaveTypeCode ===
                    LeaveTypes.HourLeave
                    ? true
                    : false
                }
                label="===To Date==="
                name="ToDate"
                value={leaveApplicationStates?.ToDate}
                error={leaveApplicationStates?.Errors?.ToDate}
                onChange={(fieldName, fieldValue) => {
                  updateLeaveApplicationState(
                    fieldName,
                    dayjs(fieldValue).format('DD-MMM-YYYY'),
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                  updateLeaveApplicationState(
                    'RejoiningDate',
                    dayjs(fieldValue).add(1, 'day').format('DD-MMM-YYYY'),
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                }}
              />

              {leaveTypePolicyResponseData?.LeaveInfo?.WithTime && (
                <TimeSelect
                  disabled={
                    mode === CRUDModes.View ||
                    mode === CRUDModes.Approve ||
                    leaveTypePolicyResponseData?.LeaveInfo?.LeaveTypeCode ===
                      LeaveTypes.HourLeave
                      ? true
                      : false
                  }
                  label="To Time"
                  name="ToTime"
                  value={leaveApplicationStates?.ToTime}
                  error={leaveApplicationStates?.Errors?.ToTime}
                  onChange={(value) => {
                    const time = dayjs(value).format('LT');
                    const time24 = moment(time, 'hh:mm A').format('HH:mm');

                    updateLeaveApplicationState(
                      'ToTime',
                      time24,
                      leaveTypePolicyResponseData?.LeaveInfo!
                    );
                  }}
                />
              )}

              <MyTextInput
                label={
                  leaveTypePolicyResponseData?.LeaveInfo?.WithTime
                    ? 'Total Minutes'
                    : 'Total Day(s)'
                }
                error={validateTotalLeaveDays(
                  totalDays,
                  leaveTypePolicyResponseData?.LeaveInfo!
                )}
                disabled={true}
                value={
                  leaveTypePolicyResponseData?.LeaveInfo?.WithTime
                    ? convertMinutesToHours(totalDays)
                    : totalDays.toString()
                }
                name="TotalDay"
                inputType="text"
                onChangeHandler={(event) => {
                  updateLeaveApplicationState(
                    event.target.name,
                    event.target.value,
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                }}
                leftIcon={<i className="fa-solid fa-clock"></i>}
              />
              {leaveTypePolicyResponseData?.LeaveInfo?.IsRejoinDateRequired && (
                <DateSelect
                  disabled={
                    mode === CRUDModes.View || mode === CRUDModes.Approve
                      ? true
                      : false
                  }
                  label="Rejoining Date"
                  name="RejoiningDate"
                  value={leaveApplicationStates?.RejoiningDate}
                  error={leaveApplicationStates?.Errors?.RejoiningDate}
                  onChange={(fieldName, fieldValue) => {
                    updateLeaveApplicationState(
                      fieldName,
                      dayjs(fieldValue).format('DD-MMM-YYYY'),
                      leaveTypePolicyResponseData?.LeaveInfo!
                    );
                  }}
                />
              )}
            </LocalizationProvider>
            {mode !== CRUDModes.Create && CRUDModes.Edit && (
              <MyTextInput
                label="Application Date"
                disabled={
                  mode === CRUDModes.View || mode === CRUDModes.Approve
                    ? true
                    : false
                }
                value={Moment(leaveApplicationStates?.ApplicationDate).format(
                  'DD-MMM-YYYY'
                )}
                error={leaveApplicationStates?.Errors?.ApplicationDate}
                name="ApplicationDate"
                inputType="text"
                onChangeHandler={(event) => {
                  updateLeaveApplicationState(
                    event.target.name,
                    event.target.value,
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                }}
                leftIcon={<i className="fa-solid fa-calendar-check"></i>}
              />
            )}

            {mode !== CRUDModes.Create && CRUDModes.Edit && (
              <MyTextInput
                label="Application Status"
                disabled={
                  mode === CRUDModes.View || mode === CRUDModes.Approve
                    ? true
                    : false
                }
                value={leaveApplicationStates?.CurrentStage}
                name="CurrentStage"
                inputType="text"
                onChangeHandler={(event) => {
                  updateLeaveApplicationState(
                    event.target.name,
                    event.target.value,
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                }}
                leftIcon={<i className="fa-solid fa-face-smile"></i>}
              />
            )}
          </div>

          <div className="my-5 grid grid-cols-1  gap-6 md:mb-0  ">
            <MyTextarea
              disabled={
                mode === CRUDModes.View || mode === CRUDModes.Approve
                  ? true
                  : false
              }
              required={true}
              label="Reason For Leave"
              name="Remarks"
              value={leaveApplicationStates?.Remarks}
              error={leaveApplicationStates?.Errors?.Remarks}
              onChange={(event) => {
                updateLeaveApplicationState(
                  event.target.name,
                  event.target.value,
                  leaveTypePolicyResponseData?.LeaveInfo!
                );
              }}
            />
          </div>

          {mode === CRUDModes.Approve && (
            <div className="my-5 grid grid-cols-1  gap-6 px-5 md:mb-0 md:px-0  ">
              <MyTextarea
                required={true}
                label="Fallback Approval Remarks"
                name="LeaveStageRemarks"
                value={leaveApplicationStates?.LeaveStageRemarks}
                error={leaveApplicationStates?.Errors?.LeaveStageRemarks}
                onChange={(event) => {
                  updateLeaveApplicationState(
                    event.target.name,
                    event.target.value,
                    leaveTypePolicyResponseData?.LeaveInfo!
                  );
                }}
              />
            </div>
          )}
        </div>
      </MyDialogueView>
    </>
  );
};

export default LeaveApplicationForm;
