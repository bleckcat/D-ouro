import { createContext, useState } from "react";

export const TransitionContext = createContext({});

export const TransitonProvider = (props) => {
  const [cardBoardTransitions, setCardBoardTransitions] = useState({
    general: true,
    0: true,
    1: true,
    2: true,
  });

  const handleCardsReload = () => {
    const falseValues = Object.keys(cardBoardTransitions).reduce(
      (result, k) => {
        return { ...result, [k]: false };
      },
      {}
    );
    setCardBoardTransitions(falseValues);
    const trueValues = Object.keys(cardBoardTransitions).reduce((result, k) => {
      return { ...result, [k]: true };
    }, {});
    setTimeout(() => {
      setCardBoardTransitions(trueValues);
    }, 400);
  };

  return (
    <TransitionContext.Provider
      value={{ cardBoardTransitions, handleCardsReload }}
    >
      {props.children}
    </TransitionContext.Provider>
  );
};
