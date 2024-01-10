import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyTextarea from 'global_shared/components/MyTextarea';
import { dateDifference } from 'global_shared/utils/dateUtils';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { IJobHistorySectionState } from '../model/data/IJobHistorySectionState';
import { validateJobHistorySectionState } from '../validation/validateJobHistorySectionState';

interface JobHistorySectionProps {
  jobHistorySectionState: IJobHistorySectionState[];
  updateJobHistorySectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;
  removeJobHistorySectionState: (id: string) => void;
  addJobHistorySectionState: () => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const JobHistorySection: React.FC<JobHistorySectionProps> = ({
  jobHistorySectionState,
  updateJobHistorySectionState,
  addJobHistorySectionState,
  removeJobHistorySectionState,
  forwardHandler,
  backwardHandler,
  viability,
}) => {
  const [isValue, setIsValue] = useState({ uid: '', isShow: false });
  const [totalExperience, setTotalExperience] = useState<number>(0);

  const daysToMonthsAndDays = (totalExperience: number) => {
    const averageDaysInMonth = 30.44; // Average days in a month
    const months = Math.floor(totalExperience / averageDaysInMonth); // Calculate the whole months

    const years = Math.floor(months / 12); // Calculate the whole years
    const remainingMonths = months % 12; // Calculate the remaining months
    return { years, remainingMonths };
  };
  const totalMonth = daysToMonthsAndDays(totalExperience);

  useEffect(() => {
    if (jobHistorySectionState.length !== 0) {
      var total = 0;
      jobHistorySectionState?.forEach((jobs, index) => {
        if (jobs?.DurationFrom?.length !== 0) {
          if (jobs?.DurationTo?.length !== 0) {
            var sum = dateDifference(jobs?.DurationFrom, jobs?.DurationTo);
            total += sum;
          } else if (jobs?.DurationTo === '') {
            const toDay = new Date();
            const dateYear = toDay.getFullYear();
            const dateMonth = toDay.getMonth() + 1;
            const dateDate = toDay.getDate();
            var today = dateYear + '-' + dateMonth + '-' + dateDate;
            var totalSum = dateDifference(jobs?.DurationFrom, today);
            total += totalSum;
          }
        }
      });
      setTotalExperience(total);
    } else {
      setTotalExperience(NaN);
    }
  }, [jobHistorySectionState]);

  return (
    <motion.div
      className={`border bg-surface py-16 px-4 shadow-sm md:py-20 md:px-20 ${viability}`}
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <motion.div
        variants={MyVariants.SlideInFromRight}
        transition={MyTransition.Spring.Low}
        className="text-onSurface"
      >
        <h6 className="mb-6 text-center text-xl font-semibold uppercase md:text-2xl">
          Employment History
        </h6>
        {isNaN(totalExperience / 365.25) ? (
          ''
        ) : (
          <div className="flex items-center">
            <motion.h2 className="mr-4 py-4">Total Experience</motion.h2>
            <p className="flex h-10 w-56 justify-center rounded bg-background text-xl  ">
              <b className="pt-1.5">
                {/* {daysToMonthsAndDays(totalExperience)} */}
                {` ${totalMonth?.years} Year and  ${totalMonth.remainingMonths} Months`}
              </b>
            </p>
          </div>
        )}

        {jobHistorySectionState.map((item, index) => (
          <div className="pt-4" key={index}>
            <div className="border border-dashed p-2">
              <div className="flex justify-end pt-2 pb-4">
                <MyButton
                  onClick={() => {
                    removeJobHistorySectionState(item.JobHistoryUUId);
                  }}
                  type="button"
                  styleClass="cursor-pointer text-primary hover:text-error"
                  label={''}
                  name={''}
                >
                  <i className="fa-solid fa-trash-can text-2xl"></i>
                </MyButton>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Organization Name"
                    name={`OrganizationName`}
                    id={`OrganizationName_${index}`}
                    value={item.OrganizationName}
                    required={true}
                    error={item.Errors.OrganizationName}
                    onChangeHandler={(event) => {
                      updateJobHistorySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-building-ngo"></i>}
                  />
                </div>
                <div className="">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Organization Address"
                    name={`OrganizationAddress`}
                    id={`OrganizationAddress_${index}`}
                    value={item.OrganizationAddress}
                    required={false}
                    error={item.Errors.OrganizationAddress}
                    onChangeHandler={(event) => {
                      updateJobHistorySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-building-ngo"></i>}
                  />
                </div>
                <div className="">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Position"
                    name={`Position`}
                    id={`Position_${index}`}
                    value={item.Position}
                    required={false}
                    error={item.Errors.Position}
                    onChangeHandler={(event) => {
                      updateJobHistorySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-ranking-star"></i>}
                  />
                </div>
                <div className="">
                  <MyTextInput
                    disabled={false}
                    inputType="number"
                    label="Salary"
                    name={`Salary`}
                    id={`Salary_${index}`}
                    value={item.Salary}
                    required={false}
                    error={item.Errors.Salary}
                    onChangeHandler={(event) => {
                      updateJobHistorySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-sack-dollar"></i>}
                  />
                </div>
                <div className="">
                  <DateSelect
                    label="Date from"
                    name={`DurationFrom`}
                    value={item.DurationFrom}
                    maxDate={dayjs().add(1, 'day')}
                    onChange={(fieldName, fieldValue) => {
                      updateJobHistorySectionState(
                        fieldName,
                        dayjs(fieldValue).format('DD-MMM-YYYY'),
                        index
                      );
                    }}
                    error={item.Errors.DurationFrom}
                  />
                </div>
                <div className="flex gap-3">
                  <div
                    className={`w-4/6 ${
                      isValue.uid == item.JobHistoryUUId
                        ? !isValue.isShow
                          ? 'show'
                          : 'hidden'
                        : ''
                    }`}
                  >
                    <DateSelect
                      label="Date to"
                      name={`DurationTo`}
                      maxDate={dayjs().add(1, 'day')}
                      value={item.DurationTo}
                      onChange={(fieldName, fieldValue) => {
                        updateJobHistorySectionState(
                          fieldName,
                          dayjs(fieldValue).format('DD-MMM-YYYY'),
                          index
                        );
                      }}
                      error={item.Errors.DurationFrom}
                    />
                  </div>
                  <div className="w-2/6  py-3">
                    <MyCheckBox
                      disabled={false}
                      label="Till Now"
                      onChangeHandler={(event) => {
                        setIsValue({
                          uid: item.JobHistoryUUId,
                          isShow: event.target.checked,
                        });
                        if (event.target.checked) {
                          updateJobHistorySectionState(
                            'DurationTo',
                            // moment(new Date()),
                            '',
                            index
                          );
                        }
                      }}
                      name={''}
                      value={
                        isValue.uid === item.JobHistoryUUId &&
                        isValue.isShow === true
                          ? true
                          : false
                      }
                      error={undefined}
                    />
                  </div>
                </div>
                <div className="">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Reason for Leaving"
                    name={`ReasonForLeaving`}
                    id={`ReasonForLeaving_${index}`}
                    value={item.ReasonForLeaving}
                    required={false}
                    error={item.Errors.ReasonForLeaving}
                    onChangeHandler={(event) => {
                      updateJobHistorySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={
                      <i className="fa-solid fa-person-walking-arrow-right"></i>
                    }
                  />
                </div>
                <div className="">
                  <MyTextInput
                    disabled={false}
                    inputType="number"
                    label="No of employee supervised by you"
                    name={`NoOfEmployeeSupervisedByYou`}
                    id={`NoOfEmployeeSupervisedByYou_${index}`}
                    value={item.NoOfEmployeeSupervisedByYou}
                    required={false}
                    error={item.Errors.NoOfEmployeeSupervisedByYou}
                    onChangeHandler={(event) => {
                      updateJobHistorySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={
                      <i className="fa-solid fa-arrows-down-to-people"></i>
                    }
                  />
                </div>
              </div>
              <div className="mt-6">
                <MyTextarea
                  disabled={false}
                  label="Write shortly about your responsibilities and what you have achieved."
                  name={`Responsibilities`}
                  id={`Responsibilities_${index}`}
                  rows={5}
                  cols={0}
                  value={item.Responsibilities}
                  required={false}
                  error={item.Errors.Responsibilities}
                  onChange={(event) => {
                    updateJobHistorySectionState(
                      event.target.name,
                      event.target.value,
                      index
                    );
                  }}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end py-4 px-2">
          <MyButton
            onClick={addJobHistorySectionState}
            type="button"
            label={`Add ${
              jobHistorySectionState.length !== 0 ? 'Another' : 'Job History'
            } `}
            styleClass="cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-sm font-bold uppercase text-onPrimary hover:bg-background hover:text-primary hover:shadow"
            name={''}
          />
        </div>

        <hr className="my-6"></hr>
        <div className="mt-6 flex items-center justify-between gap-6 px-2">
          <MyButton
            disabled={false}
            onClick={backwardHandler}
            type="button"
            label="Back"
            styleClass="inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
            name={''}
          />
          <MyButton
            onClick={() => {
              var error = '';

              jobHistorySectionState.forEach((element, index) => {
                let fieldName: keyof typeof element;
                for (fieldName in element) {
                  updateJobHistorySectionState(
                    fieldName,
                    element[fieldName],
                    index
                  );
                  error =
                    error +
                    validateJobHistorySectionState(
                      fieldName,
                      element[fieldName]
                    );
                }

                if (error) {
                  window.scrollTo({
                    top: window.innerHeight / 2,
                    behavior: 'smooth',
                  });
                }
              });

              if (error.length === 0) {
                forwardHandler();
              }
            }}
            type="button"
            label="Next"
            styleClass="inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
            name={''}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JobHistorySection;
