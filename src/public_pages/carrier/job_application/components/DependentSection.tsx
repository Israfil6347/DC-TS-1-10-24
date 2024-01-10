import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyDropdown from 'global_shared/components/MyDropdown';
import MyTextInput from 'global_shared/components/MyTextInput';
import useCommand from 'global_shared/hooks/useCommand';
import { useEffect } from 'react';
import { IDependentSectionState } from '../model/data/IDependentSectionState';
import { IRelationshipTypeModel } from '../model/data/IRelationshipTypeModel';
import { validateDependentSectionState } from '../validation/validateDependentSectionState';

interface DependentSectionProps {
  dependentSectionState: IDependentSectionState[];
  updateDependentSectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;
  removeDependentSectionState: (id: string) => void;
  addDependentSectionState: () => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const DependentSection: React.FC<DependentSectionProps> = ({
  dependentSectionState,
  updateDependentSectionState,
  removeDependentSectionState,
  addDependentSectionState,
  forwardHandler,
  backwardHandler,
  viability,
}) => {
  const { data, executeCommand } = useCommand<IRelationshipTypeModel[]>();

  console.log(dependentSectionState);

  useEffect(() => {
    executeCommand(
      process.env.REACT_APP_BASE_URL + '/recrutements_v1/GetRelationTypes'
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
          Dependents Information
        </h6>
        <div className="">
          <div className="flex items-center">
            <label className="mr-6">
              Do you have any dependents? If yes, please add information below:
            </label>
          </div>

          <div className={`grid grid-cols-1 gap-6  md:gap-5`}>
            <div className="text-onSurface">
              {dependentSectionState.map((item, index) => (
                <div
                  className="mt-6 w-full rounded-lg border border-dashed p-2 text-onSurface"
                  key={index}
                >
                  <div className="flex justify-end">
                    <MyButton
                      onClick={() => {
                        removeDependentSectionState(item.DependentUUId);
                      }}
                      type="button"
                      styleClass="cursor-pointer text-primary hover:text-error"
                      label={''}
                      name={''}
                    >
                      <i className="fa-solid fa-trash-can text-2xl"></i>
                    </MyButton>
                  </div>

                  <div className="my-4 grid w-full gap-6 md:grid-cols-3 md:gap-4">
                    <div className="grid grid-cols-1">
                      <MyTextInput
                        label="Dependent's Name"
                        name={`DependentName`}
                        id={`DependentName_${index}`}
                        value={item.DependentName}
                        inputType="text"
                        required={true}
                        error={item.Errors.DependentName}
                        onChangeHandler={(event) => {
                          updateDependentSectionState(
                            event.target.name,
                            event.target.value,
                            index
                          );
                        }}
                        leftIcon={<i className="fa-solid fa-baby"></i>}
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <MyTextInput
                        disabled={false}
                        label="Dependent's Age"
                        name={`DependentAge`}
                        id={`DependentAge_${index}`}
                        value={item.DependentAge}
                        inputType="number"
                        required={false}
                        error={item.Errors.DependentAge}
                        onChangeHandler={(event) => {
                          updateDependentSectionState(
                            event.target.name,
                            event.target.value,
                            index
                          );
                        }}
                        leftIcon={<i className="fa-solid fa-baby"></i>}
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <MyDropdown
                        disabled={false}
                        label="Select Relation"
                        name={`DependentRelationship`}
                        id={`DependentRelationshipId_${index}`}
                        required={false}
                        value={item.DependentRelationshipId}
                        error={item.Errors.DependentRelationshipId}
                        dropDownData={data?.map((obj, index) => {
                          return {
                            id: index,
                            value: obj?.RelationTypeCode,
                            label: obj?.RelationName,
                          };
                        })}
                        onChange={(event) => {
                          // updateDependentSectionState(
                          //   event.target.name,
                          //   event.target.value,
                          //   index
                          // );
                          const selected = data?.find((obj) => {
                            if (
                              parseInt(event.target.value) ===
                              obj.RelationTypeId
                            )
                              return {
                                value: obj?.RelationTypeId,
                                label: obj?.RelationName,
                              };
                          });
                          updateDependentSectionState(
                            'DependentRelationshipId',
                            event.target.value,
                            index
                          );
                          updateDependentSectionState(
                            'DependentRelationName',
                            selected?.RelationName,
                            index
                          );
                        }}
                        leftIcon={<i className="fa-solid fa-people-arrows"></i>}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end gap-4 p-4">
                <MyButton
                  onClick={addDependentSectionState}
                  type="button"
                  label={`Add ${
                    dependentSectionState.length !== 0 ? 'Another' : 'Dependant'
                  } `}
                  styleClass="cursor-pointer rounded-md border border-primary bg-primary py-2 px-4 text-sm font-bold uppercase text-onPrimary hover:bg-background hover:text-primary hover:shadow"
                  name={''}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6"></hr>
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
              dependentSectionState.forEach((element, index) => {
                let fieldName: keyof typeof element;
                for (fieldName in element) {
                  updateDependentSectionState(
                    fieldName,
                    element[fieldName],
                    index
                  );
                  error =
                    error +
                    validateDependentSectionState(
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

export default DependentSection;
