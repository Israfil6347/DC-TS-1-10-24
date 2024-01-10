import { EmployeeModel } from 'authenticated_pages/professionals/shared/model/data/EmployeeModel';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyModal from 'global_shared/components/MyModal';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import AuthUserContext, {
  AuthUserContextType,
} from 'global_shared/contexts/AuthUserContext';
import { CRUDModes } from 'global_shared/data/CRUDModes';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { BaseRequestModel } from 'global_shared/model/request/BaseRequestModel';
import { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { EmployeeLeaveRequestModel } from '../leave_histories/model/request/EmployeeLeaveRequestModel';
import LeaveApplicationForm from '../shared/components/LeaveApplicationForm';
import ProfessionalDetailsView from '../shared/components/ProfessionalDetailsView';
import { LeaveTypeBalanceResponseModel } from '../shared/model/data/LeaveTypeBalanceResponseModel';
import { LeaveTypeModel } from '../shared/model/data/LeaveTypeModel';
import useLeaveApplicationRequestStates from './hooks/useLeaveApplicationRequestStates';
import { validateLeaveApplicationRequestState } from './validation/validateLeaveApplicationRequestState';
import LeaveInformationSummery from '../shared/components/LeaveInformationSummery';

function LeaveApplicationPage() {
  const { authUser } = useContext(AuthUserContext) as AuthUserContextType;
  const [openLeaveApplicationForm, setOpenLeaveApplicationForm] =
    useState<boolean>(false);

  const {
    leaveApplicationRequestStates,
    updateLeaveApplicationRequestState,
    setLeaveApplicationRequestStates,
  } = useLeaveApplicationRequestStates();

  const {
    loading: isProfessionalDetailsResponseDataLoading,
    data: professionalDetailsResponseData,
    message: professionalDetailsResponseMessage,
    status: professionalDetailsResponseStatus,
    setStatus: setProfessionalDetailsResponseStatus,
    executeCommand: getProfessionalDetailsRequestCommand,
  } = useCommand<EmployeeModel[] | null>();

  const {
    loading: isLeaveTypesResponseDataLoading,
    data: leaveTypesResponseData,
    message: leaveTypesResponseMessage,
    status: leaveTypesResponseStatus,
    setStatus: setLeaveTypesResponseStatus,
    executeCommand: getLeaveTypesRequestCommand,
  } = useCommand<LeaveTypeModel[] | null>();

  const {
    loading: isLeaveTypePolicyResponseDataLoading,
    data: leaveTypePolicyResponseData,
    message: leaveTypePolicyResponseMessage,
    status: leaveTypePolicyResponseStatus,
    setStatus: setLeaveTypePolicyResponseStatus,
    executeCommand: getLeaveTypePolicyRequestCommand,
  } = useCommand<LeaveTypeBalanceResponseModel | null>();

  useEffect(() => {
    const baseRequest = new BaseRequestModel(authUser);

    getProfessionalDetailsRequestCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/getEmployeeDetails',
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    getLeaveTypesRequestCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/getLeaveTypes',
      JSON.stringify(baseRequest),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );

    const employeeLeaveRequestModel = new EmployeeLeaveRequestModel(authUser);
    employeeLeaveRequestModel.LeaveTypeCode =
      leaveApplicationRequestStates?.LeaveTypeCode;

    getLeaveTypePolicyRequestCommand(
      process.env.REACT_APP_BASE_URL + '/professionals_v1/getLeaveTypeBalances',
      JSON.stringify(employeeLeaveRequestModel),
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      }
    );
  }, [leaveApplicationRequestStates?.LeaveTypeCode]);

  return (
    <div>
      <LoaderDialogue
        isLoading={
          isProfessionalDetailsResponseDataLoading ||
          isLeaveTypePolicyResponseDataLoading ||
          isLeaveTypesResponseDataLoading
        }
      />

      <MyModal
        size={Size.Medium}
        show={openLeaveApplicationForm}
        onClose={() => {
          setOpenLeaveApplicationForm(false);
        }}
      >
        <LeaveApplicationForm
          title="Apply For Leave"
          onClose={setOpenLeaveApplicationForm}
          leaveApplicationStates={leaveApplicationRequestStates}
          updateLeaveApplicationState={updateLeaveApplicationRequestState}
          setLeaveApplicationStates={setLeaveApplicationRequestStates}
          mode={CRUDModes.Create}
        />
      </MyModal>

      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <section className="flex flex-col-reverse items-start gap-6 text-justify md:flex-row">
          <div className="w-full">
            <div className="">
              <div className="flex flex-col gap-6 lg:flex-row">
                <ProfessionalDetailsView
                  professionalDetails={
                    professionalDetailsResponseData &&
                    professionalDetailsResponseData[0]
                  }
                />
                <div className="w-full lg:w-7/12">
                  <motion.div
                    variants={MyVariants.SlideInFromRight}
                    transition={MyTransition.Spring.Low}
                    className="rounded-md bg-surface p-7 shadow"
                  >
                    <motion.h2 className="py-4 text-center text-lg font-bold uppercase">
                      Leave Information
                    </motion.h2>

                    <div className="">
                      <MyDropdown
                        label="===Select Leave Type==="
                        name="LeaveTypeCode"
                        value={leaveApplicationRequestStates?.LeaveTypeCode}
                        error={
                          leaveApplicationRequestStates?.Errors?.LeaveTypeCode
                        }
                        required={true}
                        onChange={(event) => {
                          updateLeaveApplicationRequestState(
                            event.target.name,
                            event.target.value,
                            leaveTypePolicyResponseData?.LeaveInfo!
                          );
                        }}
                        dropDownData={leaveTypesResponseData?.map(
                          (obj, index) => {
                            return {
                              id: index,
                              value: obj?.LeaveTypeCode,
                              label: obj?.LeaveType,
                            };
                          }
                        )}
                        leftIcon={
                          <i className="fa-solid fa-head-side-cough"></i>
                        }
                      />

                      <ul className="mt-6 divide-y overflow-hidden text-justify">
                        <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                          <div className="w-full text-left md:w-1/2">
                            Annual Entitlement
                          </div>
                          <div className="w-full text-right md:w-1/2">
                            {leaveTypePolicyResponseData &&
                              leaveTypePolicyResponseData?.LeaveInfo
                                ?.TotalLeaveDays}
                          </div>
                        </li>

                        <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                          <div className="w-full text-left md:w-1/2">
                            Total Leave Applied
                          </div>
                          <div className="w-full text-right md:w-1/2">
                            {leaveTypePolicyResponseData &&
                              leaveTypePolicyResponseData?.LeaveInfo
                                ?.TotalLeaveApplied}
                          </div>
                        </li>
                        <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                          <div className="w-full text-left md:w-1/2">
                            Balance
                          </div>
                          <div className="w-full text-right md:w-1/2">
                            {leaveTypePolicyResponseData?.LeaveInfo?.Balance}
                          </div>
                        </li>
                        <li className="flex w-full items-center p-2 transition-colors duration-300 hover:bg-backgroundVariant">
                          <div className="w-full text-left md:w-1/2">
                            Last Leave Application Date
                          </div>
                          <div className="w-full text-right md:w-1/2">
                            {moment(
                              leaveTypePolicyResponseData?.LeaveInfo
                                ?.LastApplicationDate
                            ).format('DD-MMM-YYYY')}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <MyButton
                      onClick={() => {
                        const error = validateLeaveApplicationRequestState(
                          'LeaveTypeCode',
                          leaveApplicationRequestStates?.LeaveTypeCode,
                          leaveTypePolicyResponseData?.LeaveInfo!
                        );

                        if (error) {
                          updateLeaveApplicationRequestState(
                            'LeaveTypeCode',
                            leaveApplicationRequestStates?.LeaveTypeCode,
                            leaveTypePolicyResponseData?.LeaveInfo!
                          );
                          return;
                        }

                        setOpenLeaveApplicationForm(true);
                      }}
                      styleClass="w-full rounded bg-primary px-7 py-3 my-3 text-sm font-medium uppercase text-onPrimary hover:bg-primaryVariant shadow-md transition duration-150 hover:scale-105 active:shadow-lg"
                      label={''}
                      name={''}
                      type={undefined}
                    >
                      Apply For Leave
                    </MyButton>
                  </motion.div>
                  <LeaveInformationSummery
                    leaveApplicationRequestStates={leaveTypePolicyResponseData}
                  ></LeaveInformationSummery>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default LeaveApplicationPage;
