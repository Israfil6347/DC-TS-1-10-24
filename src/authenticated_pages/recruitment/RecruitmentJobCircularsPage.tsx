import { Pagination } from '@mui/material';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import { paginationData } from 'global_shared/data/paginationData';
import useCommand from 'global_shared/hooks/useCommand';
import { arrayOfObjectsToCSVData } from 'global_shared/utils/arrayOfObjectsToCSVData';
import moment from 'moment';
import { JobCircularResponseModel } from 'public_pages/carrier/shared/model/JobCircularResponseModel';
import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { useNavigate } from 'react-router-dom';
import RecruitmentJobCircularDialogue from './dialogue/RecruitmentJobCircularDialogue';

function RecruitmentJobCircularsPage() {
  const [recruitmentDialogueOpen, setRecruitmentDialogueOpen] = useState(false);
  const [isEditJobCircular, setIsEditJobCircular] = useState(false);
  const [isViewJobCircular, setIsViewJobCircular] = useState(false);
  const [recruitmentJobCircular, setRecruitmentJobCircular] = useState({});
  const [paginationRequestObj, setPaginationRequestObj] = useState({
    ActiveStatus: -1,
    startRec: 0,
    pageSize: 10,
    searchText: null,
    RequestFrom: 'Web',
  });

  const navigate = useNavigate();

  const {
    loading: getJobCircularsDataLoading,
    data: JobCircularsData,
    setData: setJobCircularsData,
    error: getJobCircularsError,
    setError: setJobCircularsError,
    executeCommand: getJobCircularsExecuteCommand,
  } = useCommand<JobCircularResponseModel>();

  console.log(JobCircularsData);
  useEffect(() => {
    getJobCircularsExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetJobCirculars',
      paginationRequestObj,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }, [paginationRequestObj, recruitmentDialogueOpen]);

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
      paginationRequestObj.startRec ===
      JobCircularsData?.Paging?.LastPage! - 1
    ) {
      var temp = JobCircularsData?.Paging?.totalRecords! - index();
      return index() + temp;
    } else {
      return index() + 10;
    }
  };

  var CSV;
  if (JobCircularsData !== null) {
    const dataCSV = arrayOfObjectsToCSVData(JobCircularsData?.JobCirculars);
    CSV = (
      <CSVLink
        className="flex items-center justify-center "
        data={dataCSV}
        filename={'CircularData.csv'}
      >
        <i className="fa-solid fa-file-csv"></i>
        CSV
      </CSVLink>
    );
  }

  return (
    <>
      <RecruitmentJobCircularDialogue
        isRecruitmentJobCircularOpen={recruitmentDialogueOpen}
        isEditJobCircular={isEditJobCircular}
        isViewJobCircular={isViewJobCircular}
        editJobCircularData={recruitmentJobCircular}
        closeUpcomingWindow={() => {
          setIsViewJobCircular(false);
          setIsEditJobCircular(false);
          setRecruitmentDialogueOpen(false);
        }}
      />
      <motion.div
        initial="initial"
        animate="animate"
        transition={MyTransition.StaggerChildren.Fast}
      >
        <div className="content w-full bg-surface  text-left md:text-justify lg:text-justify">
          <motion.div
            variants={MyVariants.SlideInFromRight}
            transition={MyTransition.Spring.Low}
            className="h-full w-full "
          >
            <div
              className="select-none overflow-hidden rounded-sm  "
              style={{ height: window.innerHeight - 130 }}
            >
              <motion.h2 className="mb-5 mt-5 pt-5  text-center text-2xl font-semibold lg:text-3xl">
                Job Circulars
              </motion.h2>
              <div className="flex h-16 items-center  p-2 text-primary hover:text-primaryVariant md:justify-start">
                <MyButton
                  onClick={() => {
                    setRecruitmentDialogueOpen(true);
                    setIsEditJobCircular(false);
                  }}
                  type="button"
                  label="Post Job Circular"
                  styleClass="flex cursor-pointer items-center rounded bg-primary py-2 px-4 text-onPrimary transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-onPrimaryVariant "
                  name={''}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mr-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </MyButton>

                <div className="ml-auto rounded bg-primary px-4 py-2 text-onPrimary transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-onPrimaryVariant">
                  {CSV}
                </div>
              </div>
              <div
                className="scrollbar-width: thin mx-2  mb-4 overflow-hidden overflow-x-scroll overflow-y-scroll md:border "
                style={{ height: window.innerHeight - 300 }}
              >
                <table className="table w-full ">
                  <thead className="">
                    <tr className="sticky -top-0 hidden h-16 w-full bg-surface text-sm uppercase text-onSurface shadow-sm md:table-row">
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Job Position</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Vacancy</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Education</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Experience</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Deadline</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Published On</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Status</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Applied</p>
                      </th>
                      <th className="border border-gray-200 p-2 text-left ">
                        <p className="p-2 md:p-0">Action</p>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="flex-1 bg-backgroundVariant sm:flex-none ">
                    {JobCircularsData?.JobCirculars?.map((jobs, index) => (
                      <tr
                        key={index}
                        className="my-3 flex w-full flex-col flex-wrap border border-t border-gray-700 first:border-t-0 odd:bg-slate-100 even:bg-red-50 md:my-0 md:table-row"
                      >
                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            Job Position
                          </label>
                          <p className="p-2 font-semibold md:p-0 md:font-normal">
                            {jobs?.JobPosition}
                          </p>
                        </td>
                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            Vacancy
                          </label>
                          <p className="p-2 font-semibold md:p-0 md:font-normal">
                            {jobs?.TotalNumberOfVacancy}
                          </p>
                        </td>
                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            Educational Requirement
                          </label>
                          <p className="p-2 font-semibold md:p-0 md:font-normal">
                            {jobs?.EducationalRequirements}
                          </p>
                        </td>
                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            Experience Requirements
                          </label>
                          <p className="p-2 font-semibold md:p-0 md:font-normal">
                            {jobs?.ExperienceRequirements}
                          </p>
                        </td>
                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            End Date
                          </label>
                          <p className="p-2 font-semibold md:p-0 md:font-normal">
                            {moment(jobs?.ApplicationDeadline).format(
                              'DD-MMM-YYYY'
                            )}
                          </p>
                        </td>
                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            Published Date
                          </label>
                          <p className="p-2 font-semibold md:p-0 md:font-normal">
                            {moment(jobs?.PublishedDate).format('DD-MMM-YYYY')}
                          </p>
                        </td>

                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            Job Circular Status
                          </label>
                          {jobs?.JobCircularStatus ? (
                            <div className="p-2">
                              <span className="block rounded bg-success p-1 text-center text-onSuccess shadow md:inline">
                                Ongoing
                              </span>
                            </div>
                          ) : (
                            <div className="p-2">
                              <span className="block rounded bg-error p-1 text-center text-onSuccess shadow md:inline">
                                Closed
                              </span>
                            </div>
                          )}
                        </td>

                        <td className="border border-gray-200 p-2 text-left">
                          <label className="p-2 md:hidden md:p-0" htmlFor="">
                            Applied
                          </label>
                          <div className="p-2">
                            <p className="w-10 rounded border border-primary bg-surface p-2  text-center font-semibold  text-onSurface  shadow  transition-all duration-300 md:p-0 md:font-normal ">
                              {jobs?.NumberOfJobApplications}
                            </p>
                          </div>
                        </td>

                        <td className="border border-gray-200 p-2 text-left">
                          <div className="flex gap-2 p-2">
                            <MyButton
                              disabled={false}
                              onClick={() => {
                                setIsEditJobCircular(false);
                                setIsViewJobCircular(true);
                                setRecruitmentJobCircular(jobs);
                                setRecruitmentDialogueOpen(true);
                              }}
                              type="button"
                              styleClass="rounded bg-primary p-2 text-onPrimary shadow transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-error"
                              label={''}
                              name={''}
                            >
                              <i className="fa-solid fa-eye"></i>
                            </MyButton>

                            <MyButton
                              disabled={false}
                              onClick={() => {
                                setIsViewJobCircular(false);

                                setIsEditJobCircular(true);
                                setRecruitmentJobCircular(jobs);
                                setRecruitmentDialogueOpen(true);
                              }}
                              type="button"
                              styleClass="rounded bg-primary p-2 text-onPrimary shadow transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-error"
                              label={''}
                              name={''}
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </MyButton>

                            <MyButton
                              disabled={
                                jobs?.NumberOfJobApplications === 0
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                navigate(
                                  `/recruitment/jobApplication/${jobs?.JobCircularId}`
                                );
                              }}
                              type="button"
                              label=" View Applications"
                              styleClass="rounded disabled:bg-gray-200 disabled:text-onSurface bg-primary py-2 px-4 text-onPrimary shadow transition-all duration-300 hover:scale-105 hover:bg-primaryVariant hover:text-error"
                              name={''}
                            ></MyButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="sticky bottom-0 flex grow flex-col items-center justify-between gap-2 bg-surface p-2 text-onSurface md:flex-row"
              id="table-footer"
            >
              <div className="flex items-center gap-2">
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
              <div>{`Showing ${index()} to ${endIndex()} of ${
                JobCircularsData?.Paging?.totalRecords
              } entries`}</div>
              <div className="whitespace-nowrap text-right">
                <Pagination
                  count={JobCircularsData?.Paging?.LastPage}
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
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default RecruitmentJobCircularsPage;
