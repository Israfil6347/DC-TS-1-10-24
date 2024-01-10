import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import { computerAppSkillLevels } from 'global_shared/data/computerAppSkillLevels';
import useCommand from 'global_shared/hooks/useCommand';
import { useEffect } from 'react';
import { IComputerApplicationModel } from '../model/data/IComputerApplicationModel';
import { IComputerProficiencySectionState } from '../model/data/IComputerProficiencySectionState';
import { validateComputerProficiencySectionState } from '../validation/validateComputerProficiencySectionState';

interface ComputerProficiencySectionProps {
  computerProficiencySectionState: IComputerProficiencySectionState[];
  updateComputerProficiencySectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;

  removeComputerProficiencySectionState: (id: string) => void;
  addComputerProficiencySectionState: () => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const ComputerProficiencySection: React.FC<ComputerProficiencySectionProps> = ({
  computerProficiencySectionState,
  updateComputerProficiencySectionState,
  removeComputerProficiencySectionState,
  addComputerProficiencySectionState,
  forwardHandler,
  backwardHandler,
  onSubmitHandler,
  viability,
}) => {
  const { data: computerApplicationsResponseData, executeCommand } =
    useCommand<IComputerApplicationModel[]>();

  useEffect(() => {
    executeCommand(
      process.env.REACT_APP_BASE_URL +
        '/recrutements_v1/GetComputerApplications',
      {},
      {}
    );
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
          Computer Skills
        </h6>

        <div className="w-full rounded-lg  p-2 text-onSurface">
          {computerProficiencySectionState.map((computerProficiency, index) => (
            <div className="mt-4 border border-dashed" key={index}>
              <div className="flex justify-end px-2 pb-4 pt-2">
                <MyButton
                  onClick={() => {
                    removeComputerProficiencySectionState(
                      computerProficiency.ComputerProficiencyUUId
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

              <div className=" grid w-full grid-cols-1 gap-5 rounded-lg  p-2 md:grid-cols-2 md:gap-8">
                <div className="grid grid-cols-1">
                  <MyDropdown
                    label="Select Computer Application"
                    name="ComputerApplicationName"
                    id={`ComputerApplicationId_${index}`}
                    value={computerProficiency.ComputerApplicationId}
                    error={computerProficiency.Errors.ComputerApplicationId}
                    required={true}
                    disabled={false}
                    dropDownData={computerApplicationsResponseData?.map(
                      (computerApplication, index) => {
                        return {
                          id: index,
                          label: computerApplication?.ComputerApplicationName,
                          value: computerApplication?.ComputerApplicationId,
                        };
                      }
                    )}
                    onChange={(event) => {
                      const selected = computerApplicationsResponseData?.find(
                        (obj) => {
                          if (
                            parseInt(event.target.value) ===
                            obj.ComputerApplicationId
                          )
                            return {
                              value: obj?.ComputerApplicationId,
                              label: obj?.ComputerApplicationName,
                            };
                        }
                      );
                      updateComputerProficiencySectionState(
                        'ComputerApplicationId',
                        event.target.value,
                        index
                      );
                      updateComputerProficiencySectionState(
                        'ComputerApplicationName',
                        selected?.ComputerApplicationName,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-computer"></i>}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <MyDropdown
                    disabled={false}
                    label="Select Proficiency"
                    dropDownData={computerAppSkillLevels}
                    name={`ExpertiseLevel`}
                    value={computerProficiency.ExpertiseLevel}
                    error={computerProficiency.Errors.ExpertiseLevel}
                    required={true}
                    onChange={(event) => {
                      updateComputerProficiencySectionState(
                        event.target.name,
                        event.target.value,
                        index
                      );
                    }}
                    leftIcon={<i className="fa-solid fa-gauge-simple-high"></i>}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end gap-4 p-4">
            <MyButton
              onClick={() => {
                addComputerProficiencySectionState();
              }}
              type="button"
              label={`Add ${
                computerProficiencySectionState.length !== 0
                  ? 'Another'
                  : 'Skill'
              } `}
              styleClass="cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-sm font-bold uppercase text-onPrimary hover:bg-background hover:text-primary hover:shadow"
              name={''}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-6 px-2">
          <MyButton
            onClick={backwardHandler}
            type="button"
            label="Back"
            styleClass="inline-block cursor-pointer rounded  py-2 w-full text-sm font-bold uppercase bg-primary text-onPrimary hover:shadow disabled:bg-gray-400 transition duration-150 ease-out hover:scale-105 hover:ease-in"
            name={''}
          />
          <MyButton
            onClick={() => {
              var error = '';

              computerProficiencySectionState.forEach((element, index) => {
                let fieldName: keyof typeof element;
                for (fieldName in element) {
                  updateComputerProficiencySectionState(
                    fieldName,
                    element[fieldName],
                    index
                  );
                  error =
                    error +
                    validateComputerProficiencySectionState(
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

export default ComputerProficiencySection;
