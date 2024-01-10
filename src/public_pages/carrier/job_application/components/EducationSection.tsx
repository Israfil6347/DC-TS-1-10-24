import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import { resultOutOf } from 'global_shared/data/resultOutOf';
import useCommand from 'global_shared/hooks/useCommand';
import { useEffect } from 'react';
import { IEducationDegreeModel } from '../model/data/IEducationDegreeModel';
import { IEducationLevelModel } from '../model/data/IEducationLevelModel';
import { IEducationalSectionState } from '../model/data/IEducationalSectionState';
import { validateEducationalSectionState } from '../validation/validateEducationalSectionState';
import EductionItem from './Eduction/EductionItem';

interface EducationSectionProps {
  educationalSectionState: IEducationalSectionState[];
  updateEducationalSectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;
  removeEducationalSectionState: (id: string) => void;
  addEducationalSectionState: () => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  educationalSectionState,
  updateEducationalSectionState,
  removeEducationalSectionState,
  addEducationalSectionState,
  forwardHandler,
  backwardHandler,
  viability,
}) => {
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
          Education Details
        </h6>
        {educationalSectionState.map((item, index) => (
          <EductionItem
            item={item}
            index={index}
            removeEducationalSectionState={removeEducationalSectionState}
            updateEducationalSectionState={updateEducationalSectionState}
          ></EductionItem>
        ))}

        <div className="flex justify-end gap-4 p-4">
          <MyButton
            onClick={() => {
              addEducationalSectionState();
            }}
            type="button"
            label={`Add ${
              educationalSectionState.length !== 0 ? 'Another' : 'Education'
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
              educationalSectionState.forEach((element, index) => {
                let fieldName: keyof typeof element;
                for (fieldName in element) {
                  updateEducationalSectionState(
                    fieldName,
                    element[fieldName],
                    index
                  );
                  error =
                    error +
                    validateEducationalSectionState(
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

export default EducationSection;
