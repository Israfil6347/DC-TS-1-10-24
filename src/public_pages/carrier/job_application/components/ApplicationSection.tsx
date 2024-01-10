import { motion } from 'framer-motion';
import MyButton from 'global_shared/components/MyButton';
import MyCheckBox from 'global_shared/components/MyCheckbox';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyTextarea from 'global_shared/components/MyTextarea';
import { employmentStatuses } from 'global_shared/data/employmentStatuses';
import { useEffect, useState } from 'react';
import { IApplicationSectionState } from '../model/data/IApplicationSectionState';
import { validateApplicationSectionState } from '../validation/validateApplicationSectionState';

interface ApplicationSectionProps {
  applicationSectionState: IApplicationSectionState;
  updateApplicationSectionState: (fieldName: string, fieldValue: any) => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  onApplicationReviewHandler: () => void;
  viability: string;
}

const ApplicationSection: React.FC<ApplicationSectionProps> = ({
  applicationSectionState,
  updateApplicationSectionState,
  backwardHandler,
  onSubmitHandler,
  onApplicationReviewHandler,
  viability,
}) => {
  const [declaredInformationAreCorrect, setDeclaredInformationAreCorrect] =
    useState(false);

  useEffect(() => {
    updateApplicationSectionState(
      'JobCircularId',
      localStorage.getItem('JobCircularId')!
    );
  }, []);

  return (
    <>
      <motion.div
        className={`border bg-surface py-16 px-4 shadow-sm md:py-20 md:px-20 ${viability}`}
        exit={{
          opacity: 0,
          x: -window.innerWidth,
          transition: { duration: 0.3 },
        }}
        initial={{
          opacity: 0,
          x: window.innerWidth,
        }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="text-onSurface">
          <h6 className="mb-6 text-center text-xl font-semibold uppercase md:text-2xl">
            Application Details
          </h6>
          {/* <div className="mb-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <MyFileInput
              label="Upload Resume"
              name="AttachedResume"
              required={false}
              disabled={false}
              value={applicationSectionState.AttachedResume}
              error={applicationSectionState.Errors.AttachedResume}
              onChangeHandler={(name, value) => {
                updateApplicationSectionState(name, value);
              }}
            />
          </div> */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <div className="grid grid-cols-1">
              <MyDropdown
                label="Current Employment Status"
                name="EmploymentStatus"
                required={true}
                disabled={false}
                value={applicationSectionState.EmploymentStatus}
                error={applicationSectionState.Errors.EmploymentStatus}
                dropDownData={employmentStatuses}
                onChange={(event) => {
                  updateApplicationSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
                leftIcon={<i className="fa-solid fa-handshake-simple"></i>}
              />
            </div>
            <div className="grid grid-cols-1">
              <MyTextInput
                label="Required Notice Period"
                name="NoticePeriod"
                id="NoticePeriod"
                value={applicationSectionState.NoticePeriod}
                inputType="text"
                disabled={false}
                required={false}
                error={applicationSectionState.Errors.NoticePeriod}
                onChangeHandler={(event) => {
                  updateApplicationSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
                leftIcon={<i className="fa-solid fa-circle-exclamation"></i>}
              />
            </div>
            <div className="grid grid-cols-1">
              <MyTextInput
                label="Expected Salary"
                name="ExpectedSalary"
                id="ExpectedSalary"
                value={applicationSectionState.ExpectedSalary}
                inputType="number"
                disabled={false}
                required={false}
                error={applicationSectionState.Errors.ExpectedSalary}
                onChangeHandler={(event) => {
                  updateApplicationSectionState(
                    event.target.name,
                    event.target.value
                  );
                }}
                leftIcon={<i className="fa-solid fa-sack-dollar"></i>}
              />
            </div>
          </div>
          <div className="mt-6">
            <MyTextarea
              label="Describe below how you fit into this position (max 100 words, please
          refer specifically to the Job Requirements)"
              name="CoverLetter"
              rows={8}
              cols={0}
              disabled={false}
              value={applicationSectionState.CoverLetter}
              required={true}
              error={applicationSectionState.Errors.CoverLetter}
              onChange={(event) => {
                updateApplicationSectionState(
                  event.target.name,
                  event.target.value
                );
              }}
            />
          </div>
          <div className="mt-4 flex items-center text-onSurface">
            <label
              htmlFor=""
              className={` flex ${
                declaredInformationAreCorrect ? '' : 'text-error'
              }`}
            >
              <MyCheckBox
                disabled={false}
                label=""
                name="DeclaredInformationAreCorrect"
                value={applicationSectionState.DeclaredInformationAreCorrect}
                error={
                  applicationSectionState.Errors.DeclaredInformationAreCorrect
                }
                onChangeHandler={(event) => {
                  updateApplicationSectionState(
                    event.target.name,
                    event.target.checked
                  );
                  setDeclaredInformationAreCorrect(event.target.checked);
                }}
              />
              <div>
                I do hereby declare that the above-mentioned information is, to
                the best of my knowledge, true, complete, and accurate. I
                understand that any false statement or information could result
                in my application or appointment being terminated.
              </div>
            </label>
          </div>
          <hr className="my-6"></hr>
          <div className="mt-6 flex items-center justify-between gap-6">
            <MyButton
              disabled={false}
              onClick={backwardHandler}
              type="button"
              label="Back"
              styleClass="disabled:bg-gray-200 disabled:text-onSurface inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
              name={''}
            />

            <MyButton
              disabled={declaredInformationAreCorrect ? false : true}
              onClick={() => {
                var error = '';
                const { CoverLetter } = applicationSectionState;
                const cardFields = {
                  CoverLetter,
                };
                let fieldName: keyof typeof cardFields;

                for (fieldName in cardFields) {
                  updateApplicationSectionState(
                    fieldName,
                    cardFields[fieldName]
                  );
                  error =
                    error +
                    validateApplicationSectionState(
                      fieldName,
                      applicationSectionState[fieldName]
                    );
                }
                if (error.length === 0) {
                  onApplicationReviewHandler();
                }
              }}
              type="button"
              label="View Application"
              styleClass="disabled:bg-gray-200 disabled:text-onSurface inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
              name={''}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ApplicationSection;
