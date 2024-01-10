import { useState } from 'react';

export const useToggle = (defaultValue: boolean) => {
  const [openState, setOpenState] = useState(defaultValue);

  function toggleState() {
    setOpenState((previousState) => !previousState);
  }

  function changeOpenState(state: boolean) {
    setOpenState(state);
  }

  return [openState, toggleState, changeOpenState];
};
