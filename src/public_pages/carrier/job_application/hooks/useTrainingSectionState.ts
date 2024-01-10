import { useState } from 'react';
import uuid from 'react-uuid';
import { ITrainingSectionState } from '../model/data/ITrainingSectionState';
import { validateTrainingSectionState } from '../validation/validateTrainingSectionState';

function useTrainingSectionState() {
  const [trainingSectionState, setTrainingSectionState] = useState<
    ITrainingSectionState[]
  >([]);

  // Begin Update Models
  const updateTrainingSectionState = (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => {
    trainingSectionState[index] = {
      ...trainingSectionState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...trainingSectionState[index].Errors,
        [fieldName]: validateTrainingSectionState(fieldName, fieldValue),
      },
    };

    setTrainingSectionState([...trainingSectionState]);
  };

  // End Update Models

  // Begin Remove Models
  const removeTrainingSectionState = (id: string) => {
    const newTraining = trainingSectionState.filter((item) => {
      return item.TrainingUUId !== id;
    });
    setTrainingSectionState(newTraining);
  };
  // End Remove Models

  // Begin Add Models
  const addTrainingSectionState = () => {
    setTrainingSectionState((training) => {
      return [
        ...training,
        {
          TrainingId: 0,
          TrainingUUId: uuid(),
          TrainingTitle: '',
          TrainingDetails: '',
          InstituteName: '',
          DurationFrom: '',
          DurationTo: '',
          ValidityDate: '',
          Errors: {
            TrainingId: '',
            TrainingUUId: '',
            TrainingTitle: '',
            TrainingDetails: '',
            InstituteName: '',
            DurationFrom: '',
            DurationTo: '',
            ValidityDate: '',
          },
        },
      ];
    });
  };
  // End Add Models

  return {
    trainingSectionState,
    updateTrainingSectionState,
    removeTrainingSectionState,
    addTrainingSectionState,
    setTrainingSectionState,
  };
}

export default useTrainingSectionState;
