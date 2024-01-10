import moment from "moment";
import { useState } from "react";
import { validateLeaveHistoriesRequestState } from "../validation/validateLeaveHistoriesRequestState";

function useLeaveHistoriesRequestState() {
  const date = new Date();
  const [leaveHistoriesRequestState, setLeaveHistoriesRequestState] = useState({
    ToDate: moment(date).format(),
    FromDate: moment(new Date(date.getFullYear(), date.getMonth(), 1)).format(),
    Errors: {
      ToDate: "",
      FromDate: "",
    },
  });

  const updateLeaveHistoriesRequestState = (
    fieldName: string,
    fieldValue: any
  ) => {
    setLeaveHistoriesRequestState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateLeaveHistoriesRequestState(
            fieldName,
            fieldValue
          ),
        },
      };
    });
  };

  return { leaveHistoriesRequestState, updateLeaveHistoriesRequestState };
}

export default useLeaveHistoriesRequestState;
