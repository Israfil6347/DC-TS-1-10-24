import moment from "moment";
import { useState } from "react";
import { validateEReceiptRequestState } from "../validation/validateEReceiptRequestState";

function useEReceiptRequestState() {
  const [eReceiptRequestState, setEReceiptRequestState] = useState({
    FromDate: moment(new Date()).startOf("month").format("YYYY-MM-DD"),
    ToDate: moment(new Date()).format("YYYY-MM-DD"),
    Errors: {
      FromDate: "",
      ToDate: "",
    },
  });

  const updateEReceiptRequestState = (
    fieldName: string,
    fieldValue: string
  ) => {
    setEReceiptRequestState((prevState) => {
      return {
        ...prevState,
        [fieldName]: fieldValue,
        Errors: {
          ...prevState.Errors,
          [fieldName]: validateEReceiptRequestState(fieldName, fieldValue),
        },
      };
    });
  };

  return { eReceiptRequestState, updateEReceiptRequestState };
}

export default useEReceiptRequestState;
