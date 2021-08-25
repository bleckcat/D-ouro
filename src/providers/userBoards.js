import { createContext, useState } from "react";

const cardDefaultValues = {
  scale: 0,
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

const mainJSON = {
  title: "",
  paper: "",
  type: "",
  cardValues: [cardDefaultValues],
};

export const UserBoardsContext = createContext({});

export const UserBoardProvider = (props) => {
  const [boardValue, setBoardValue] = useState([mainJSON]);

  const handleAddNewBoard = () => {
    let oldBoards = [...boardValue];
    oldBoards[oldBoards.length] = mainJSON;

    setBoardValue(oldBoards);
  };

  return (
    <UserBoardsContext.Provider
      value={{
        boardValue,
        setBoardValue,
        handleAddNewBoard,
      }}
    >
      {props.children}
    </UserBoardsContext.Provider>
  );
};
