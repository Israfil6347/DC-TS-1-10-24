import { Pagination } from '@mui/material';
import { motion } from 'framer-motion';
import CV from 'global_shared/components/CV';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyModal from 'global_shared/components/MyModal';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import { paginationData } from 'global_shared/data/paginationData';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { arrayOfObjectsToCSVData } from 'global_shared/utils/arrayOfObjectsToCSVData';
import { JobCircularModel } from 'public_pages/carrier/shared/model/JobCircularModel';
import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useParams } from 'react-router-dom';
import { JobApplicationModel } from './model/data/JobApplicationModel';
import { JobApplicationResponseModel } from './model/data/JobApplicationResponseModel';
import { IJobApplication } from 'global_shared/model/request/IJobApplication';

function RecruitmentJobApplicationPage() {
  const param = useParams();
  const [paginationRequestObj, setPaginationRequestObj] = useState({
    JobCircularId: param.id,
    startRec: 0,
    pageSize: 10,
    RequestFrom: 'Web',
    searchText: '',
  });

  console.log(paginationRequestObj);
  const {
    data: getJobApplicationsResponseData,
    loading: getJobApplicationsResponseDataLoading,
    executeCommand: getJobApplicationsRequestExecuteCommand,
  } = useCommand<JobApplicationResponseModel>();

  console.log(getJobApplicationsResponseData);

  const {
    loading: updateJobCircularStatusResponseDataLoading,
    data: updateJobCircularStatusResponseData,
    status: updateJobCircularStatusResponseStatus,
    setStatus: setUpdateJobCircularStatusResponseStatus,
    executeCommand: updateJobCircularStatusRequestCommand,
  } = useCommand<JobCircularModel>();

  const {
    loading: getJobApplicationResponseDataLoading,
    data: getJobApplicationResponseData,
    status: getJobApplicationResponseStatus,
    setStatus: setGetJobApplicationResponseStatus,
    executeCommand: getJobApplicationRequestCommand,
  } = useCommand<IJobApplication | null>();

  const headers = {
    'Content-Type': 'application/json',
    token: localStorage.getItem('token'),
  };

  useEffect(() => {
    getJobApplicationsRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetJobApplications',
      paginationRequestObj,
      { headers: headers }
    );
    setUpdateJobCircularStatusResponseStatus(null);
  }, [
    paginationRequestObj,
    updateJobCircularStatusResponseStatus,
    updateJobCircularStatusResponseData,
    getJobApplicationResponseStatus,
  ]);

  const showInCvHandler = (JobApplicationId: number) => {
    getJobApplicationRequestCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetJobApplication',
      { JobApplicationId: JobApplicationId, RequestFrom: 'Web' },
      { headers: headers }
    );
  };

  const paginationRequestHandler = (fieldName: string, fieldValue: any) => {
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
      paginationRequestObj.startRec ===
      getJobApplicationsResponseData?.Paging?.LastPage! - 1
    ) {
      var temp =
        getJobApplicationsResponseData?.Paging?.totalRecords! - index();
      return index() + temp;
    } else {
      return index() + 10;
    }
  };

  var CSV;
  if (getJobApplicationsResponseData !== null) {
    const dataCSV = arrayOfObjectsToCSVData(
      getJobApplicationsResponseData?.JobApplications
    );
    CSV = (
      <CSVLink
        className="flex items-center justify-center "
        data={dataCSV}
        filename={'ApplicantData.csv'}
      >
        <i className="fa-solid fa-file-csv"></i>
        CSV
      </CSVLink>
    );
  }

  const applicantSelectionRequestHandler = (
    JobApplicationId: number,
    jobApplicationStatusId: number
  ) => {
    const updateJobApplicationRequestObj = {
      JobApplicationId: JobApplicationId,
      JobApplicationStatusId: jobApplicationStatusId,
      RequestFrom: 'Web',
    };
    updateJobCircularStatusRequestCommand(
      process.env.REACT_APP_BASE_URL +
        '/recrutements_v1/UpdateJobApplicationStatus',
      updateJobApplicationRequestObj,
      { headers: headers }
    );
  };

  return (
    <>
      <LoaderDialogue
        isLoading={
          getJobApplicationResponseDataLoading ||
          getJobApplicationsResponseDataLoading ||
          updateJobCircularStatusResponseDataLoading
        }
      />
      <MyModal
        size={Size.Medium}
        show={getJobApplicationResponseStatus === 'success' ? true : false}
        onClose={() => {
          setGetJobApplicationResponseStatus(null);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setGetJobApplicationResponseStatus(null);
          }}
        >
          <div
            className="overflow-auto bg-surface px-8 py-6 lg:px-20 lg:py-16"
            style={{ height: window.innerHeight - 30 }}
          >
            <CV
              jobApplicationData={getJobApplicationResponseData}
              isSubmitView={false}
              onSubmitHandler={undefined}
            />
          </div>
        </MyDialogueView>
      </MyModal>
      <div className="">
        <section className="">
          <div className="content w-full text-left">
            <div className=" h-full w-full">
              <div
                className="select-none overflow-hidden rounded-sm bg-surface "
                style={{ height: window.innerHeight - 130 }}
              >
                <motion.h2 className="mb-5 mt-5 pt-5  text-center text-2xl font-semibold lg:text-3xl">
                  Applications
                </motion.h2>

                <div className="flex h-16 items-center  p-2 text-primary hover:text-primaryVariant md:justify-start">
                  <div className="ml-auto rounded bg-primary px-4 py-2 text-onPrimary transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-onPrimaryVariant">
                    {CSV}
                  </div>
                </div>
                <div
                  className="scrollbar-width: thin mx-2  mb-4 overflow-hidden overflow-x-scroll overflow-y-scroll md:border "
                  style={{ height: window.innerHeight - 300 }}
                >
                  <table className="table w-full">
                    <thead className="">
                      <tr className="sticky -top-0 hidden h-16 w-full bg-surface text-sm uppercase text-onSurface shadow-sm md:table-row">
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0"> Name</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Gender</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Age</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Marital Status</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Religion</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Mobile Number</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Education</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Job Position</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Employment Status</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Experience</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Expected Salary</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Application Status</p>
                        </th>
                        <th className="border border-gray-200 p-2 text-left ">
                          <p className="p-2 md:p-0">Action</p>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="flex-1 bg-backgroundVariant sm:flex-none ">
                      {getJobApplicationsResponseData?.JobApplications?.map(
                        (applicants, index) => (
                          <tr
                            key={index}
                            className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 even:bg-red-50 md:my-0 md:table-row"
                          >
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Name
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.ApplicantFullName}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Gender
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.Gender}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Age
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.Age}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Marital Status
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.MaritalStatus}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Religion
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.Religion}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Mobile Number
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.MobileNumber}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Education
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.LatestEducation}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Job Position
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.AppliedPosition}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Employment Status
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.EmploymentStatus}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Experience
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {' '}
                                {applicants?.TotalExperience}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Expected Salary
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.ExpectedSalary}
                              </p>
                            </td>
                            <td className="border border-gray-200 p-2 text-left">
                              <label
                                className="p-2 md:hidden md:p-0"
                                htmlFor=""
                              >
                                Application Status
                              </label>
                              <p className="p-2 font-semibold md:p-0 md:font-normal">
                                {applicants?.JobApplicationStatus}
                              </p>
                            </td>

                            <td className="border border-gray-200 p-2 text-left">
                              <div className="flex gap-2">
                                <button
                                  className="rounded bg-primary p-2 text-onPrimary shadow transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-error"
                                  onClick={() => {
                                    showInCvHandler(
                                      applicants?.JobApplicationId
                                    );
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    ></path>
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                  </svg>
                                </button>

                                {applicants?.JobApplicationStatus ===
                                'Selected' ? (
                                  <button
                                    className="rounded bg-primary p-2 text-onPrimary shadow transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-error"
                                    onClick={() => {
                                      applicantSelectionRequestHandler(
                                        applicants?.JobApplicationId,
                                        1
                                      );
                                    }}
                                  >
                                    <i className="fa-solid fa-user-xmark"></i>
                                  </button>
                                ) : (
                                  <button
                                    className="rounded bg-primary p-2 text-onPrimary shadow transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-error"
                                    onClick={() => {
                                      applicantSelectionRequestHandler(
                                        applicants?.JobApplicationId,
                                        2
                                      );
                                    }}
                                  >
                                    <i className="fa-solid fa-user-check"></i>
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="sticky bottom-0 flex grow flex-col items-center justify-between gap-2 bg-surface p-2 text-onSurface md:flex-row"
                id="table-footer"
              >
                <div className="flex items-center">
                  <label>Show</label>

                  <MyDropdown
                    name="pageSize"
                    value={paginationRequestObj?.pageSize}
                    required={false}
                    dropDownData={paginationData}
                    onChange={(event) => {
                      paginationRequestHandler(
                        event.target.name,
                        event.target.value
                      );
                    }}
                    label={''}
                    leftIcon={<i className="fa-solid fa-list-ol"></i>}
                  />

                  <label>entries</label>
                </div>
                <div>{`Showing ${index()} to ${endIndex()} of ${
                  getJobApplicationsResponseData?.Paging?.totalRecords
                } entries`}</div>
                <div className="whitespace-nowrap text-right">
                  <Pagination
                    count={getJobApplicationsResponseData?.Paging?.LastPage}
                    variant="outlined"
                    shape="rounded"
                    defaultPage={1}
                    siblingCount={0}
                    onChange={(e, value) => {
                      paginationRequestHandler('startRec', value - 1);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RecruitmentJobApplicationPage;
