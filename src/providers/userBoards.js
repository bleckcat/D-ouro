import { createContext, useState } from "react";
import { getTimeStamp } from "../helpers/timeHelpers";

export const UserBoardsContext = createContext({});

export const UserBoardProvider = (props) => {
  const cardDefaultValues = {
    timeStamp: getTimeStamp(new Date()),
    isEnabled: true,
    scale: 0,
    spread: 0,
    graphType: true,
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
    paper: 0,
    boardType: 0,
    cardValues: [cardDefaultValues],
  };

  const [boardValue, setBoardValue] = useState([mainJSON]);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  const handleAddNewBoard = () => {
    let oldBoards = [...boardValue];
    oldBoards[boardValue.length] = mainJSON;
    setBoardValue(oldBoards);
  };

  return (
    <UserBoardsContext.Provider
      value={{
        boardValue,
        setBoardValue,
        handleAddNewBoard,
        selectedBoardIndex,
        setSelectedBoardIndex,
        cardDefaultValues,
      }}
    >
      {props.children}
    </UserBoardsContext.Provider>
  );
};
