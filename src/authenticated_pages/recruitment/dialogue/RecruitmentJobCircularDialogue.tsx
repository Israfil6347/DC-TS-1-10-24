import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyModal from 'global_shared/components/MyModal';
import MyTextInput from 'global_shared/components/MyTextInput';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import { logoIcon } from 'global_shared/data/base64Icons';
import { employmentTypes } from 'global_shared/data/employmentTypes';
import { genders } from 'global_shared/data/genders';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { ReligionModel } from 'global_shared/model/loockup_data/ReligionModel';
import { editorFormats, editorModules } from 'global_shared/utils/Editor';
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { jobCircularStatuses } from '../data/jobCircularStatusData';
import { recruitmentJobCircularData } from '../data/recruitmentJobCircularData';
import useRecruitmentJobCircular from '../hooks/useRecruitmentJobCircular';
import { RecruitmentJobCircularValidation } from '../utils/RecruitmentJobCircularValidation';

interface RecruitmentJobCircularDialogueProps {
  isRecruitmentJobCircularOpen: boolean;
  isEditJobCircular: boolean;
  closeUpcomingWindow: () => void;
  editJobCircularData: any;
  isViewJobCircular: boolean;
}

const RecruitmentJobCircularDialogue: React.FC<
  RecruitmentJobCircularDialogueProps
> = ({
  isRecruitmentJobCircularOpen,
  isEditJobCircular,
  closeUpcomingWindow,
  editJobCircularData,
  isViewJobCircular,
}) => {
  const {
    recruitmentJobCircularState,
    updateRecruitmentJobCircularsRequestHandler,
    setRecruitmentJobCircularState,
  } = useRecruitmentJobCircular();

  const {
    loading: addAndUpdateRecruitmentJobCircularResponseDataLoading,
    data: addAndUpdateRecruitmentJobCircularResponseData,
    message: addAndUpdateRecruitmentJobCircularResponseMessage,
    status: addAndUpdateRecruitmentJobCircularResponseStatus,
    setStatus: setAddAndUpdateRecruitmentJobCircularResponseStatus,
    error: addAndUpdateRecruitmentJobCircularResponseError,
    executeCommand: addAndUpdateRecruitmentJobCircularRequestExecuteCommand,
  } = useCommand<string | null>();

  const {
    data: getReligionsResponseData,
    executeCommand: getReligionRequestCommand,
  } = useCommand<ReligionModel[] | null>();

  useEffect(() => {
    getReligionRequestCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetAllReligions',
      null
    );

    if (isEditJobCircular) {
      setRecruitmentJobCircularState(editJobCircularData);
    } else if (isViewJobCircular) {
      setRecruitmentJobCircularState(editJobCircularData);
    } else {
      setRecruitmentJobCircularState(recruitmentJobCircularData);
    }
  }, [
    isEditJobCircular,
    recruitmentJobCircularData,
    addAndUpdateRecruitmentJobCircularResponseData,
    addAndUpdateRecruitmentJobCircularResponseError,
    isViewJobCircular,
  ]);

  const onSubmitRequestHandler = () => {
    const headers = {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    };

    if (isEditJobCircular) {
      addAndUpdateRecruitmentJobCircularRequestExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/recrutements_v1/UpdateJobCircular',
        JSON.stringify(recruitmentJobCircularState),
        {
          headers: headers,
        }
      );
    } else {
      addAndUpdateRecruitmentJobCircularRequestExecuteCommand(
        process.env.REACT_APP_BASE_URL + '/recrutements_v1/AddJobCircular',
        JSON.stringify(recruitmentJobCircularState),
        {
          headers: headers,
        }
      );
    }
  };

  return (
    <>
      <LoaderDialogue
        isLoading={addAndUpdateRecruitmentJobCircularResponseDataLoading}
      />
      {/* start addAndUpdateRecruitmentJobCircular success model */}
      <SuccessDialogue
        isDialogueOpen={
          addAndUpdateRecruitmentJobCircularResponseStatus === 'success'
            ? true
            : false
        }
        onOkButtonClick={() => {
          setAddAndUpdateRecruitmentJobCircularResponseStatus(null);
          closeUpcomingWindow();
        }}
      >
        {addAndUpdateRecruitmentJobCircularResponseData}
      </SuccessDialogue>
      {/* End addAndUpdateRecruitmentJobCircular success model */}

      {/* start addAndUpdateRecruitmentJobCircular Failed model */}
      <FailedDialogue
        dialogueSize={Size.Small}
        isDialogueOpen={
          addAndUpdateRecruitmentJobCircularResponseStatus === 'failed'
            ? true
            : false
        }
        cancelButtonText="ok"
        onCloseButtonClick={() => {
          setAddAndUpdateRecruitmentJobCircularResponseStatus(null);
        }}
      >
        {addAndUpdateRecruitmentJobCircularResponseMessage}
      </FailedDialogue>
      {/* End addAndUpdateRecruitmentJobCircular Failed model */}

      {/* Replace this with common modal */}
      {/* start addAndUpdateRecruitmentJobCircular View  model */}

      <MyModal
        size={Size.Medium}
        show={isRecruitmentJobCircularOpen}
        onClose={() => {
          closeUpcomingWindow();
        }}
      >
        <MyDialogueView
          dialogueHeader={
            <div className=" bg-background p-6">
              <div className="hover:animate-swing flex w-full flex-col items-center hover:cursor-pointer">
                <img src={logoIcon} alt="" className="w-28" />
                <h3 className="font-bold text-primary">
                  {isViewJobCircular
                    ? 'View Job Circular'
                    : isEditJobCircular
                    ? 'Update Job Circular'
                    : 'Post Job Circular'}
                </h3>
              </div>
            </div>
          }
          dialogueFooter={
            <div className="flex items-center justify-center bg-background p-6">
              <MyButton
                disabled={false}
                onClick={closeUpcomingWindow}
                type="button"
                label="Close"
                styleClass="w-2/5 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                name={''}
              />

              {isViewJobCircular ? (
                ''
              ) : (
                <MyButton
                  onClick={() => {
                    var error = '';
                    let fieldName: keyof typeof recruitmentJobCircularState;
                    for (fieldName in recruitmentJobCircularState) {
                      updateRecruitmentJobCircularsRequestHandler(
                        fieldName,
                        recruitmentJobCircularState[fieldName]
                      );
                      error = error + '';
                      RecruitmentJobCircularValidation(
                        fieldName,
                        recruitmentJobCircularState[fieldName]
                      );
                    }
                    if (error) {
                      window.scrollTo({
                        top: window.innerHeight / 2,
                        behavior: 'smooth',
                      });
                    }

                    if (error.length === 0) {
                      onSubmitRequestHandler();
                    }
                  }}
                  type="button"
                  label={isEditJobCircular ? 'Update' : 'Submit'}
                  styleClass="w-2/5 rounded border bg-primary py-2 font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  name={''}
                />
              )}
            </div>
          }
          onCancel={() => {
            closeUpcomingWindow();
          }}
        >
          <div
            className="scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-200 mt-5 w-full overflow-y-scroll rounded-lg px-2 py-2 md:mt-5 md:px-16 md:py-6"
            style={{ maxHeight: window.innerHeight - 400 }}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="">
                <MyDropdown
                  label="Job Circular Status"
                  name="JobCircularStatus"
                  defaultValue={recruitmentJobCircularState?.JobCircularStatus}
                  disabled={isViewJobCircular}
                  value={recruitmentJobCircularState?.JobCircularStatus}
                  required={false}
                  dropDownData={jobCircularStatuses}
                  onChange={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-face-smile"></i>}
                />
              </div>
              <div className="">
                <MyTextInput
                  label="Job Position"
                  id="JobPosition"
                  name="JobPosition"
                  value={recruitmentJobCircularState?.JobPosition}
                  inputType="text"
                  required={false}
                  disabled={isViewJobCircular}
                  error={recruitmentJobCircularState?.errors?.JobPosition}
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-ranking-star"></i>}
                />
              </div>
              <div className="">
                <MyTextInput
                  label="Organization Name"
                  id="OrganizationName"
                  name="OrganizationName"
                  value={recruitmentJobCircularState?.OrganizationName}
                  inputType="text"
                  disabled={isViewJobCircular}
                  required={false}
                  error={recruitmentJobCircularState?.errors?.OrganizationName}
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-building-ngo"></i>}
                />
              </div>

              <div className="">
                <MyTextInput
                  id="TotalNumberOfVacancy"
                  label="Total Number Vacancy"
                  name="TotalNumberOfVacancy"
                  value={recruitmentJobCircularState?.TotalNumberOfVacancy}
                  inputType="number"
                  required={false}
                  disabled={isViewJobCircular}
                  error={
                    recruitmentJobCircularState?.errors?.TotalNumberOfVacancy
                  }
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-brands fa-hornbill"></i>}
                />
              </div>
              <div className="">
                <MyDropdown
                  label="Select Employment Status"
                  name="EmploymentStatus"
                  defaultValue={recruitmentJobCircularState?.EmploymentStatus}
                  value={recruitmentJobCircularState?.EmploymentStatus}
                  required={false}
                  disabled={isViewJobCircular}
                  error={recruitmentJobCircularState?.errors?.EmploymentStatus}
                  dropDownData={employmentTypes}
                  onChange={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-helmet-safety"></i>}
                />
              </div>

              <div className="">
                <MyTextInput
                  label="Educational Requirement"
                  name="EducationalRequirements"
                  id="EducationalRequirements"
                  value={recruitmentJobCircularState?.EducationalRequirements}
                  inputType="text"
                  disabled={isViewJobCircular}
                  required={false}
                  error={
                    recruitmentJobCircularState?.errors?.EducationalRequirements
                  }
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-user-graduate"></i>}
                />
              </div>
              <div className="">
                <MyTextInput
                  label="Experience Requirement"
                  name="ExperienceRequirements"
                  id="ExperienceRequirements"
                  value={recruitmentJobCircularState?.ExperienceRequirements}
                  inputType="text"
                  disabled={isViewJobCircular}
                  required={false}
                  error={
                    recruitmentJobCircularState?.errors?.ExperienceRequirements
                  }
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-briefcase"></i>}
                />
              </div>

              <div className="">
                <MyDropdown
                  label="Select Religion"
                  name="Religion"
                  value={recruitmentJobCircularState?.Religion}
                  defaultValue={recruitmentJobCircularState?.Religion}
                  required={false}
                  disabled={isViewJobCircular}
                  error={recruitmentJobCircularState?.errors?.Religion}
                  dropDownData={getReligionsResponseData?.map((obj, index) => {
                    return {
                      id: index,
                      value: obj?.ReligionId,
                      label: obj?.ReligionName,
                    };
                  })}
                  onChange={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-hands-praying"></i>}
                />
              </div>
              <div className="">
                <MyTextInput
                  label="Age"
                  name="Age"
                  id="Age"
                  value={recruitmentJobCircularState?.Age}
                  inputType="text"
                  required={false}
                  disabled={isViewJobCircular}
                  error={recruitmentJobCircularState?.errors?.Age}
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={
                    <i className="fa-solid fa-person-circle-question"></i>
                  }
                />
              </div>
              <div className="">
                <MyDropdown
                  label="Select Gender"
                  name="Gender"
                  value={recruitmentJobCircularState?.Gender}
                  defaultValue={recruitmentJobCircularState?.Gender}
                  required={false}
                  disabled={isViewJobCircular}
                  error={recruitmentJobCircularState?.errors?.Gender}
                  dropDownData={genders}
                  onChange={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-venus-mars"></i>}
                />
              </div>
              <div className="">
                <MyTextInput
                  label="Job Location"
                  name="JobLocation"
                  id="JobLocation"
                  value={recruitmentJobCircularState?.JobLocation}
                  inputType="text"
                  disabled={isViewJobCircular}
                  required={false}
                  error={recruitmentJobCircularState?.errors?.JobLocation}
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-map-location-dot"></i>}
                />
              </div>
              <div className="">
                <MyTextInput
                  label="Salary"
                  name="Salary"
                  id="Salary"
                  value={recruitmentJobCircularState?.Salary}
                  inputType="text"
                  required={false}
                  disabled={isViewJobCircular}
                  error={recruitmentJobCircularState?.errors?.Salary}
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={<i className="fa-solid fa-money-bill-trend-up"></i>}
                />
              </div>

              <div className="">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateSelect
                    label="Application Deadline"
                    name="ApplicationDeadline"
                    disabled={isViewJobCircular}
                    value={recruitmentJobCircularState?.ApplicationDeadline}
                    error={
                      recruitmentJobCircularState?.errors?.ApplicationDeadline
                    }
                    onChange={(fieldName, fieldValue) => {
                      updateRecruitmentJobCircularsRequestHandler(
                        fieldName,
                        dayjs(fieldValue).format('DD-MMM-YYYY')
                      );
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="">
                <MyTextInput
                  label="Contact Information"
                  name="ContactInfo"
                  id="ContactInfo"
                  value={recruitmentJobCircularState?.ContactInfo}
                  inputType="text"
                  disabled={isViewJobCircular}
                  required={false}
                  error={recruitmentJobCircularState?.errors?.ContactInfo}
                  onChangeHandler={(event) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      event.target.name,
                      event.target.value
                    );
                  }}
                  leftIcon={
                    <i className="fa-solid fa-mobile-screen-button"></i>
                  }
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="">
                <h2 className="pb-2 text-lg">
                  Compensation And Other Benefits
                </h2>
                <ReactQuill
                  theme="snow"
                  id="CompensationAndOtherBenefits"
                  className=""
                  readOnly={isViewJobCircular}
                  modules={editorModules}
                  formats={editorFormats}
                  placeholder={'Compensation and Other Benefits'}
                  onChange={(value) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      'CompensationAndOtherBenefits',
                      value
                    );
                  }}
                  value={
                    recruitmentJobCircularState?.CompensationAndOtherBenefits
                  }
                />
                {/* <CKEditor
                  disabled={isViewJobCircular}
                  editor={ClassicEditor}
                  label="Compensation and Other Benefits"
                  name="CompensationAndOtherBenefits"
                  data={
                    recruitmentJobCircularState?.CompensationAndOtherBenefits
                  }
                  id="CompensationAndOtherBenefits"
                  onError={
                    recruitmentJobCircularState?.errors
                      ?.CompensationAndOtherBenefits
                  }
                  onChange={(event, editor) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      "CompensationAndOtherBenefits",
                      editor.getData()
                    );
                  }}
                /> */}
              </div>

              <div className="">
                <h2 className="pb-2 text-lg">Job Context</h2>
                <ReactQuill
                  theme="snow"
                  id="JobContext"
                  className=""
                  readOnly={isViewJobCircular}
                  modules={editorModules}
                  formats={editorFormats}
                  placeholder={'Job Context'}
                  onChange={(value) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      'JobContext',
                      value
                    );
                  }}
                  value={recruitmentJobCircularState?.JobContext}
                />
                {/* <CKEditor
                  disabled={isViewJobCircular}
                  editor={ClassicEditor}
                  label="Job Context"
                  name="JobContext"
                  data={recruitmentJobCircularState?.JobContext}
                  id="JobContext"
                  onError={recruitmentJobCircularState?.errors?.JobContext}
                  onChange={(event, editor) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      "JobContext",
                      editor.getData()
                    );
                  }}
                /> */}
              </div>

              <div className="">
                <h2 className="pb-2 text-lg">Additional Requirements</h2>
                <ReactQuill
                  theme="snow"
                  id="AdditionalRequirements"
                  className=""
                  readOnly={isViewJobCircular}
                  modules={editorModules}
                  formats={editorFormats}
                  placeholder={'Additional Requirements'}
                  onChange={(value) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      'AdditionalRequirements',
                      value
                    );
                  }}
                  value={recruitmentJobCircularState?.AdditionalRequirements}
                />
                {/* <CKEditor
                  disabled={isViewJobCircular}
                  editor={ClassicEditor}
                  label="Additional Requirements"
                  name="AdditionalRequirements"
                  data={recruitmentJobCircularState?.AdditionalRequirements}
                  id="AdditionalRequirements"
                  onError={
                    recruitmentJobCircularState?.errors?.AdditionalRequirements
                  }
                  onChange={(event, editor) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      "AdditionalRequirements",
                      editor.getData()
                    );
                  }}
                /> */}
              </div>

              <div className="">
                <h2 className="pb-2 text-lg">Job Responsibility</h2>
                <ReactQuill
                  theme="snow"
                  id="JobResponsibility"
                  className=""
                  readOnly={isViewJobCircular}
                  modules={editorModules}
                  formats={editorFormats}
                  placeholder={'Job Responsibility'}
                  onChange={(value) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      'JobResponsibility',
                      value
                    );
                  }}
                  value={recruitmentJobCircularState?.JobResponsibility}
                />
                {/* <CKEditor
                  disabled={isViewJobCircular}
                  editor={ClassicEditor}
                  label="Job Responsibility"
                  name="JobResponsibility"
                  data={recruitmentJobCircularState?.JobResponsibility}
                  id="JobResponsibility"
                  onError={
                    recruitmentJobCircularState?.errors?.JobResponsibility
                  }
                  onChange={(event, editor) => {
                    updateRecruitmentJobCircularsRequestHandler(
                      "JobResponsibility",
                      editor.getData()
                    );
                  }}
                /> */}
              </div>
            </div>
          </div>
        </MyDialogueView>
      </MyModal>

      {/* End addAndUpdateRecruitmentJobCircular View  model */}
    </>
  );
};

export default RecruitmentJobCircularDialogue;
