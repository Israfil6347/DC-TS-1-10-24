import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import { languageSkillLevels } from 'global_shared/data/languageSkillLevels';
import { useEffect } from 'react';
import { ILanguageProficiencySectionState } from '../model/data/ILanguageProficiencySectionState';
import { validateLanguageProficiencySectionState } from '../validation/validateLanguageProficiencySectionState';

interface LanguageProficiencySectionProps {
  languageProficiencySectionState: ILanguageProficiencySectionState[];
  updateLanguageProficiencySectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;
  removeLanguageProficiencySectionState: (id: string) => void;
  addLanguageProficiencySectionState: () => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const LanguageProficiencySection: React.FC<LanguageProficiencySectionProps> = ({
  languageProficiencySectionState,
  updateLanguageProficiencySectionState,
  removeLanguageProficiencySectionState,
  addLanguageProficiencySectionState,
  forwardHandler,
  backwardHandler,
  onSubmitHandler,
  viability,
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

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
          Language Proficiency
        </h6>
        <div className="w-full rounded-lg  p-2 text-onSurface">
          {languageProficiencySectionState.map((item, index) => (
            <div
              className="mt-4 w-full rounded-lg border border-dashed p-2 text-onSurface"
              key={index}
            >
              <div className="flex justify-end pt-2 pb-4">
                <MyButton
                  onClick={() => {
                    removeLanguageProficiencySectionState(
                      item.LanguageProficiencyUUId
                    );
                  }}
                  type="button"
                  styleClass="cursor-pointer text-primary hover:text-error"
                  label={''}
                  name={''}
                >
                  <i className="fa-solid fa-trash-can text-2xl"></i>
                </MyButton>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-8">
                <div className="grid grid-cols-1">
                  <MyTextInput
                    disabled={false}
                    inputType="text"
                    label="Language Name"
                    name={`LanguageName`}
                    id={`LanguageName_${index}`}
                    value={item.LanguageName}
                    required={true}
                    error={item.Errors.LanguageName}
                    onChangeHandler={(event) => {
                      updateLanguageProficiencySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-language"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyDropdown
                    disabled={false}
                    label="Select Reading Level"
                    dropDownData={languageSkillLevels}
                    value={item.ReadingProficiency}
                    required={true}
                    error={item.Errors.ReadingProficiency}
                    name={`ReadingProficiency`}
                    id={`ReadingProficiency_${index}`}
                    onChange={(event) => {
                      updateLanguageProficiencySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-book-open-reader"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyDropdown
                    disabled={false}
                    label="Select Writing Level"
                    dropDownData={languageSkillLevels}
                    value={item.WritingProficiency}
                    required={true}
                    error={item.Errors.WritingProficiency}
                    name={`WritingProficiency`}
                    id={`WritingProficiency_${index}`}
                    onChange={(event) => {
                      updateLanguageProficiencySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-pen-nib"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyDropdown
                    disabled={false}
                    label="Select Speaking Level"
                    dropDownData={languageSkillLevels}
                    value={item.SpeakingProficiency}
                    required={true}
                    error={item.Errors.SpeakingProficiency}
                    name={`SpeakingProficiency`}
                    onChange={(event) => {
                      updateLanguageProficiencySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-brands fa-teamspeak"></i>}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end gap-4 p-4">
            <MyButton
              onClick={() => {
                addLanguageProficiencySectionState();
              }}
              type="button"
              label={`Add ${
                languageProficiencySectionState.length !== 0
                  ? 'Another'
                  : 'Language'
              } `}
              styleClass="cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-sm font-bold uppercase text-onPrimary hover:bg-background hover:text-primary hover:shadow"
              name={''}
            />
          </div>
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
              languageProficiencySectionState.forEach((element, index) => {
                let fieldName: keyof typeof element;
                for (fieldName in element) {
                  updateLanguageProficiencySectionState(
                    fieldName,
                    element[fieldName],
                    index
                  );
                  error =
                    error +
                    validateLanguageProficiencySectionState(
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

export default LanguageProficiencySection;
