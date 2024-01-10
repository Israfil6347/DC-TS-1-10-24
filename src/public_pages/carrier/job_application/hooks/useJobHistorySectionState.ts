import { useState } from 'react';
import uuid from 'react-uuid';
import { IJobHistorySectionState } from '../model/data/IJobHistorySectionState';
import { validateJobHistorySectionState } from '../validation/validateJobHistorySectionState';

function useJobHistorySectionState() {
  const [jobHistorySectionState, setJobHistorySectionState] = useState<
    IJobHistorySectionState[]
  >([]);

  // Begin Update Models
  const updateJobHistorySectionState = (
    fieldName: string,
    fieldValue: any,
    index: number
  ) => {
    jobHistorySectionState[index] = {
      ...jobHistorySectionState[index],
      [fieldName]: fieldValue,
      Errors: {
        ...jobHistorySectionState[index].Errors,
        [fieldName]: validateJobHistorySectionState(fieldName, fieldValue),
      },
    };
    setJobHistorySectionState([...jobHistorySectionState]);
  };
  // End Update Models

  // Begin Remove Models
  const removeJobHistorySectionState = (id: string) => {
    const newJobHistory = jobHistorySectionState.filter((item) => {
      return item.JobHistoryUUId !== id;
    });
    setJobHistorySectionState(newJobHistory);
  };
  // End Remove Models

  // Begin Add Models
  const addJobHistorySectionState = () => {
    setJobHistorySectionState((JobHistory) => {
      return [
        ...JobHistory,
        {
          JobHistoryId: 0,
          JobHistoryUUId: uuid(),
          OrganizationName: '',
          OrganizationAddress: '',
          Position: '',
          DurationFrom: '',
          DurationTo: '',
          Responsibilities: '',
          ReasonForLeaving: '',
          NoOfEmployeeSupervisedByYou: '',
          Salary: '',
          Errors: {
            JobHistoryId: '',
            JobHistoryUUId: '',
            OrganizationName: '',
            OrganizationAddress: '',
            Position: '',
            DurationFrom: '',
            DurationTo: '',
            Responsibilities: '',
            ReasonForLeaving: '',
            NoOfEmployeeSupervisedByYou: '',
            Salary: '',
          },
        },
      ];
    });
  };
  // End Add Models

  return {
    jobHistorySectionState,
    updateJobHistorySectionState,
    removeJobHistorySectionState,
    addJobHistorySectionState,
    setJobHistorySectionState,
  };
}

export default useJobHistorySectionState;
