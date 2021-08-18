import react, { createContext, useState } from "react";

export const UserBoardsContext = createContext({});

export const UserBoardProvider = (props) => {
  const mainJSON = {
    title: "",
    scale: "",
    type: "",
    spread: 0,
    inputValues: {
      alpha: 0,
      bravo: 0,
      charlie: 0,
      delta: 0,
      echo: 0,
      foxtrot: 0,
    },
    graphValues: [],
  };
  const [boardValue, setBoardValue] = useState([[mainJSON]]);

  const handleAddCard = (selectedBoard, setSelectedBoard) => {
    const baseCards = [...selectedBoard];

    baseCards.push(mainJSON);

    setSelectedBoard(baseCards);
  };

  return (
    <UserBoardsContext.Provider
      value={{
        boardValue,
        setBoardValue,
        handleAddCard,
      }}
    >
      {props.children}
    </UserBoardsContext.Provider>
  );
};
