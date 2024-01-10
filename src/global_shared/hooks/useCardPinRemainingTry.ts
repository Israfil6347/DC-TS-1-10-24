import { useState } from 'react';

function useCardPinRemainingTry() {
  let [cardPinRemainingTry, setCardPinRemainingTry] = useState(2);

  const updateCardPinRemainingTry = (counter: number) => {
    setCardPinRemainingTry(cardPinRemainingTry - counter);
  };

  return {
    cardPinRemainingTry,
    setCardPinRemainingTry,
    updateCardPinRemainingTry,
  };
}

export default useCardPinRemainingTry;
