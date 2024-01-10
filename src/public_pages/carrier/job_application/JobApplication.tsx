import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { motion } from 'framer-motion';
import CV from 'global_shared/components/CV';
import MyModal from 'global_shared/components/MyModal';
import PageContainer from 'global_shared/components/PageContainer';
import FailedDialogue from 'global_shared/components/dialogues/FailedDialogue';
import LoaderDialogue from 'global_shared/components/dialogues/LoaderDialogue';
import MyDialogueView from 'global_shared/components/dialogues/MyDialogueView';
import SuccessDialogue from 'global_shared/components/dialogues/SuccessDialogue';
import { jobApplicationSectionMenus } from 'global_shared/data/jobApplicationSectionMenus';
import { Size } from 'global_shared/enum/Size';
import useCommand from 'global_shared/hooks/useCommand';
import { useState } from 'react';
import ApplicationSection from './components/ApplicationSection';
import ComputerProficiencySection from './components/ComputerProficiencySection';
import DependentSection from './components/DependentSection';
import EducationSection from './components/EducationSection';
import JobHistorySection from './components/JobHistorySection';
import LanguageProficiencySection from './components/LanguageProficiencySection';
import OtherInformationSection from './components/OtherInformationSection';
import PersonSection from './components/PersonSection';
import ReferenceSection from './components/ReferenceSection';
import TrainingSection from './components/TrainingSection';
import useApplicationSectionState from './hooks/useApplicationSectionState';
import useComputerProficiencySectionState from './hooks/useComputerProficiencySectionState';
import useDependentSectionState from './hooks/useDependentSectionState';
import useEducationalSectionState from './hooks/useEducationalSectionState';
import useJobHistorySectionState from './hooks/useJobHistorySectionState';
import useLanguageProficiencySectionState from './hooks/useLanguageProficiencySectionState';
import useOtherInfoSectionState from './hooks/useOtherInfoSectionState';
import usePersonSectionState from './hooks/usePersonSectionState';
import useReferenceSectionState from './hooks/useReferenceSectionState';
import useTrainingSectionState from './hooks/useTrainingSectionState';
import { useNavigate } from 'react-router-dom';

function JobApplication() {
  const navigate = useNavigate();
  const [applicationReviewDialogueOpen, setApplicationReviewDialogueOpen] =
    useState(false);

  const [menuIndex, setMenuIndex] = useState(2);

  const { applicationSectionState, updateApplicationSectionState } =
    useApplicationSectionState();

  const {
    computerProficiencySectionState,
    updateComputerProficiencySectionState,
    removeComputerProficiencySectionState,
    addComputerProficiencySectionState,
  } = useComputerProficiencySectionState();

  const {
    dependentSectionState,
    updateDependentSectionState,
    removeDependentSectionState,
    addDependentSectionState,
  } = useDependentSectionState();

  const {
    educationalSectionState,
    updateEducationalSectionState,
    removeEducationalSectionState,
    addEducationalSectionState,
  } = useEducationalSectionState();

  const {
    jobHistorySectionState,
    updateJobHistorySectionState,
    removeJobHistorySectionState,
    addJobHistorySectionState,
  } = useJobHistorySectionState();

  const {
    languageProficiencySectionState,
    updateLanguageProficiencySectionState,
    removeLanguageProficiencySectionState,
    addLanguageProficiencySectionState,
  } = useLanguageProficiencySectionState();

  const { otherInfoSectionState, updateOtherInfoSectionState } =
    useOtherInfoSectionState();

  const { personSectionState, updatePersonSectionState } =
    usePersonSectionState();

  const {
    referenceSectionState,
    updateReferenceSectionState,
    removeReferenceSectionState,
    addReferenceSectionState,
  } = useReferenceSectionState();

  const {
    trainingSectionState,
    updateTrainingSectionState,
    removeTrainingSectionState,
    addTrainingSectionState,
  } = useTrainingSectionState();

  const {
    loading: addJobApplicationResponseDataLoading,
    data: addJobApplicationResponseData,
    status: addJobApplicationResponseStatus,
    setStatus: setAddJobApplicationResponseStatus,
    message: addJobApplicationResponseMessage,
    executeCommand: addJobApplicationRequestExecuteCommand,
  } = useCommand<string | null>();

  const jobApplicationRequestModel = {
    Dependent: dependentSectionState,
    Training: trainingSectionState,
    Education: educationalSectionState,
    JobHistory: jobHistorySectionState,
    ComputerProficiency: computerProficiencySectionState,
    LanguageProficiency: languageProficiencySectionState,
    Reference: referenceSectionState,
    JobApplicant: personSectionState,
    JobApplication: applicationSectionState,
    OtherInformation: otherInfoSectionState,
    RequestFrom: 'Web',
  };

  const forwardHandler = () => {
    if (menuIndex < jobApplicationSectionMenus.length) {
      setMenuIndex(menuIndex + 1);
    }
  };

  const backwardHandler = () => {
    if (menuIndex !== 0) {
      setMenuIndex(menuIndex - 1);
    }
  };

  const headers = {
    'Content-Type': 'application/json',
  };
  console.log(jobApplicationRequestModel);

  const onSubmitHandler = () => {
    addJobApplicationRequestExecuteCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/AddJobApplication',
      JSON.stringify(jobApplicationRequestModel),
      {
        headers: headers,
      }
    );
  };

  const onApplicationReviewHandler = () => {
    setApplicationReviewDialogueOpen(true);
  };

  return (
    <>
      <LoaderDialogue isLoading={addJobApplicationResponseDataLoading} />
      <SuccessDialogue
        isDialogueOpen={
          addJobApplicationResponseStatus === 'success' ? true : false
        }
        onOkButtonClick={() => {
          setAddJobApplicationResponseStatus(null);
          navigate('/');
        }}
      >
        {addJobApplicationResponseData}
      </SuccessDialogue>

      <FailedDialogue
        isDialogueOpen={
          addJobApplicationResponseStatus === 'failed' ? true : false
        }
        onCloseButtonClick={() => {
          setAddJobApplicationResponseStatus(null);
        }}
      >
        {addJobApplicationResponseMessage}
      </FailedDialogue>

      <MyModal
        size={Size.Medium}
        show={applicationReviewDialogueOpen}
        onClose={() => {
          setApplicationReviewDialogueOpen(false);
        }}
      >
        <MyDialogueView
          onCancel={() => {
            setApplicationReviewDialogueOpen(false);
          }}
          dialogueHeader={undefined}
          dialogueFooter={undefined}
        >
          <div
            className="overflow-auto bg-surface px-8 py-6 lg:py-16 lg:px-20"
            style={{ height: window.innerHeight - 30 }}
          >
            <CV
              jobApplicationData={jobApplicationRequestModel}
              onSubmitHandler={onSubmitHandler}
              isSubmitView={true}
            />
          </div>
        </MyDialogueView>
      </MyModal>

      {/* Replace this with common modal */}

      <motion.div>
        <PageContainer>
          <div className="flex items-center justify-center">
            <div className="w-full ">
              <ul className="my-4 flex flex-col items-center justify-center md:flex-row">
                {jobApplicationSectionMenus.map((menu, index) => (
                  <li
                    key={menu.id}
                    className={`w-full cursor-pointer border-b-8 py-2 px-4 md:w-fit ${
                      index === menuIndex ? 'border-primary text-primary' : ''
                    } `}
                  >
                    {menu.fieldValue}
                  </li>
                ))}
              </ul>
              <form onSubmit={onSubmitHandler}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div>
                    <ApplicationSection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'jobApplication'
                          ? ''
                          : 'hidden'
                      }
                      applicationSectionState={applicationSectionState}
                      updateApplicationSectionState={
                        updateApplicationSectionState
                      }
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                      onApplicationReviewHandler={onApplicationReviewHandler}
                    />

                    <PersonSection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'personal'
                          ? ''
                          : 'hidden'
                      }
                      personSectionState={personSectionState}
                      updatePersonSectionState={updatePersonSectionState}
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />

                    <DependentSection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'dependent'
                          ? ''
                          : 'hidden'
                      }
                      dependentSectionState={dependentSectionState}
                      updateDependentSectionState={updateDependentSectionState}
                      removeDependentSectionState={removeDependentSectionState}
                      addDependentSectionState={addDependentSectionState}
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />

                    <EducationSection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'education'
                          ? ''
                          : 'hidden'
                      }
                      educationalSectionState={educationalSectionState}
                      updateEducationalSectionState={
                        updateEducationalSectionState
                      }
                      removeEducationalSectionState={
                        removeEducationalSectionState
                      }
                      addEducationalSectionState={addEducationalSectionState}
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />
                    <JobHistorySection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'jobHistory'
                          ? ''
                          : 'hidden'
                      }
                      jobHistorySectionState={jobHistorySectionState}
                      addJobHistorySectionState={addJobHistorySectionState}
                      updateJobHistorySectionState={
                        updateJobHistorySectionState
                      }
                      removeJobHistorySectionState={
                        removeJobHistorySectionState
                      }
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />

                    <TrainingSection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'training'
                          ? ''
                          : 'hidden'
                      }
                      trainingSectionState={trainingSectionState}
                      updateTrainingSectionState={updateTrainingSectionState}
                      removeTrainingSectionState={removeTrainingSectionState}
                      addTrainingSectionState={addTrainingSectionState}
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />

                    <ComputerProficiencySection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'computerProficiency'
                          ? ''
                          : 'hidden'
                      }
                      computerProficiencySectionState={
                        computerProficiencySectionState
                      }
                      updateComputerProficiencySectionState={
                        updateComputerProficiencySectionState
                      }
                      removeComputerProficiencySectionState={
                        removeComputerProficiencySectionState
                      }
                      addComputerProficiencySectionState={
                        addComputerProficiencySectionState
                      }
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />

                    <LanguageProficiencySection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'languageProficiency'
                          ? ''
                          : 'hidden'
                      }
                      languageProficiencySectionState={
                        languageProficiencySectionState
                      }
                      updateLanguageProficiencySectionState={
                        updateLanguageProficiencySectionState
                      }
                      removeLanguageProficiencySectionState={
                        removeLanguageProficiencySectionState
                      }
                      addLanguageProficiencySectionState={
                        addLanguageProficiencySectionState
                      }
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />

                    <OtherInformationSection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'otherInformation'
                          ? ''
                          : 'hidden'
                      }
                      otherInfoSectionState={otherInfoSectionState}
                      updateOtherInfoSectionState={updateOtherInfoSectionState}
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />

                    <ReferenceSection
                      viability={
                        jobApplicationSectionMenus[menuIndex].fieldName ===
                        'reference'
                          ? ''
                          : 'hidden'
                      }
                      referenceSectionState={referenceSectionState}
                      updateReferenceSectionState={updateReferenceSectionState}
                      removeReferenceSectionState={removeReferenceSectionState}
                      addReferenceSectionState={addReferenceSectionState}
                      forwardHandler={forwardHandler}
                      backwardHandler={backwardHandler}
                      onSubmitHandler={onSubmitHandler}
                    />
                  </div>
                </LocalizationProvider>
              </form>
            </div>
          </div>
        </PageContainer>
      </motion.div>
    </>
  );
}
export default JobApplication;
