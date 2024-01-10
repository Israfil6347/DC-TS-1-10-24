import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import DateSelect from 'global_shared/components/DateSelect';
import MyButton from 'global_shared/components/MyButton';
import MyTextInput from 'global_shared/components/MyTextInput';
import MyTextarea from 'global_shared/components/MyTextarea';
import { useEffect } from 'react';
import { ITrainingSectionState } from '../model/data/ITrainingSectionState';
import { validateTrainingSectionState } from '../validation/validateTrainingSectionState';

interface TrainingSectionProps {
  trainingSectionState: ITrainingSectionState[];
  updateTrainingSectionState: (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => void;
  removeTrainingSectionState: (id: string) => void;
  addTrainingSectionState: () => void;
  forwardHandler: () => void;
  backwardHandler: () => void;
  onSubmitHandler: () => void;
  viability: string;
}

const TrainingSection: React.FC<TrainingSectionProps> = ({
  trainingSectionState,
  updateTrainingSectionState,
  removeTrainingSectionState,
  addTrainingSectionState,
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
          Training Details
        </h6>
        <div className="w-full rounded-lg  p-2 text-onSurface">
          {trainingSectionState.map((item, index) => (
            <div className="pt-4" key={index}>
              <div className="border border-dashed p-2">
                <div className="flex justify-end pt-2 pb-4">
                  <MyButton
                    onClick={() => {
                      removeTrainingSectionState(item.TrainingUUId);
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
                      id={`TrainingTitle_${index}`}
                      name={`TrainingTitle`}
                      label="Training Title"
                      value={item.TrainingTitle}
                      inputType="text"
                      required={true}
                      disabled={false}
                      error={item.Errors.TrainingTitle}
                      onChangeHandler={(event) => {
                        updateTrainingSectionState(
                          event.target.name,
                          event.target.value,
                          index
                        );
                      }}
                      leftIcon={<i className="fa-solid fa-award"></i>}
                    />
                  </div>
                  <div className="">
                    <MyTextInput
                      disabled={false}
                      inputType="text"
                      label="Institute Name"
                      name={`InstituteName`}
                      id={`InstituteName_${index}`}
                      value={item.InstituteName}
                      required={true}
                      error={item.Errors.InstituteName}
                      onChangeHandler={(event) => {
                        updateTrainingSectionState(
                          event.target.name,
                          event.target.value,
                          index
                        );
                      }}
                      leftIcon={<i className="fa-solid fa-school-flag"></i>}
                    />
                  </div>
                  <div className="">
                    <DateSelect
                      label="Validity Date"
                      name={`ValidityDate`}
                      value={item.ValidityDate}
                      onChange={(fieldName, fieldValue) => {
                        updateTrainingSectionState(
                          fieldName,
                          dayjs(fieldValue).format('DD-MMM-YYYY'),
                          index
                        );
                      }}
                      error={item.Errors.ValidityDate}
                    />
                  </div>
                  <div className="">
                    <DateSelect
                      label="Date from"
                      name={`DurationFrom`}
                      value={item.DurationFrom}
                      maxDate={dayjs().add(1, 'day')}
                      onChange={(fieldName, fieldValue) => {
                        updateTrainingSectionState(
                          fieldName,
                          dayjs(fieldValue).format('DD-MMM-YYYY'),
                          index
                        );
                      }}
                      error={item.Errors.ValidityDate}
                    />
                  </div>
                  <div className=""></div>
                </div>

                <div className="mt-6">
                  <MyTextarea
                    disabled={false}
                    label="Training Details"
                    name={`TrainingDetails`}
                    rows={5}
                    cols={0}
                    value={item.TrainingDetails}
                    required={false}
                    error={item.Errors.TrainingDetails}
                    onChange={(event) => {
                      updateTrainingSectionState(
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

          <div className="flex justify-end gap-4 p-4">
            <MyButton
              onClick={addTrainingSectionState}
              type="button"
              label={`Add ${
                trainingSectionState.length !== 0 ? 'Another' : 'Training'
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
              trainingSectionState.forEach((element, index) => {
                let fieldName: keyof typeof element;
                for (fieldName in element) {
                  updateTrainingSectionState(
                    fieldName,
                    element[fieldName],
                    index
                  );
                  error =
                    error +
                    validateTrainingSectionState(fieldName, element[fieldName]);
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

export default TrainingSection;
