import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect } from 'react';
import WoooApplicationTab from '../shared/components/working_out_of_office/WoooApplicationTab';
import { ISelectWoooType } from '../shared/components/working_out_of_office/interface/SelectWoooTypeModel';
import { getFullDateAndTime } from '../shared/utils/calculateDaysAndHours';
import useWoooApplicationRequestStates from './hooks/useWoooApplicationRequestStates';
import { WoooRequestModel } from './model/request/WoooRequestModel';

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

const WorkingOutOfOfficePage = () => {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;

  const baseRequest = new BaseRequestModel(authUser);

  const {
    woooApplicationRequestStates,
    setWoooApplicationRequestStates,
    updateWoooApplicationRequestState,
  } = useWoooApplicationRequestStates();

  const {
    data: selectWoooTypesResponseData,
    loading: isSelectWoooTypesResponseLoading,
    status: selectWoooTypesResponseStatus,
    executeCommand: getWooTypesCommand,
  } = useCommand<ISelectWoooType[] | null>();

  const {
    data: submitWoooResponseData,
    loading: isSubmitResponseDataLoading,
    executeCommand: submitWoooCommand,
    status: submitWoooResponseStatus,
    message: submitWoooResponseMessage,
  } = useCommand<string | null>();

  useEffect(() => {
    getWooTypesCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/GetWoooType',
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, []);

  const submitWoooApplicationHandler = () => {
    const woooRequestModel = new WoooRequestModel(authUser);

    if (woooApplicationRequestStates.IsHourly) {
      woooRequestModel.isHourly = woooApplicationRequestStates.IsHourly;
      woooRequestModel.FromDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forHours.fromDate;
      woooRequestModel.ToDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forHours.toDate;
      woooRequestModel.RejoiningDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forHours.rejoinDate;
      woooRequestModel.WoooTypeCode = woooApplicationRequestStates.WoooTypeCode;
      woooRequestModel.Reason = woooApplicationRequestStates.Reason;
    } else {
      woooRequestModel.isHourly = woooApplicationRequestStates.IsHourly;
      woooRequestModel.FromDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forDays.fromDate;
      woooRequestModel.ToDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forDays.toDate;
      woooRequestModel.RejoiningDate = getFullDateAndTime(
        woooApplicationRequestStates
      ).forDays.rejoinDate;
      woooRequestModel.WoooTypeCode = woooApplicationRequestStates.WoooTypeCode;
      woooRequestModel.Reason = woooApplicationRequestStates.Reason;
    }

    submitWoooCommand(
      `${process.env.REACT_APP_BASE_URL}/professionals_v1/AddEmployeeWorkingOutofOffice`,
      JSON.stringify(woooRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
          RequestFrom: 'Web',
        },
      }
    );
  };

  return (
    <>
      {/* Loader */}
      <LoaderDialogue
        isLoading={
          isSelectWoooTypesResponseLoading || isSubmitResponseDataLoading
        }
      />

      {/* Main Content */}
      <div className="bg-surface  px-4 text-primary shadow-sm">
        <h1 className="py-5 text-center text-2xl font-extrabold">
          Working Out Of Office Application
        </h1>

        {/* WOOO TAB */}
        <WoooApplicationTab
          selectWoooTypeData={selectWoooTypesResponseData}
          woooApplicationRequestStates={woooApplicationRequestStates}
          updateWoooApplicationRequestState={updateWoooApplicationRequestState}
          submitWoooApplicationHandler={submitWoooApplicationHandler}
          submitWoooResponseMessage={submitWoooResponseMessage}
          submitWoooResponseData={submitWoooResponseData}
          submitWoooResponseStatus={submitWoooResponseStatus}
        />
      </div>
    </>
  );
};

export default WorkingOutOfOfficePage;
