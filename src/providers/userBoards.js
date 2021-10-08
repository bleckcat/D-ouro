import React from "react";
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
      alpha: null,
      bravo: null,
      charlie: null,
      delta: null,
      echo: null,
      foxtrot: null,
    },
    graphValues: [],
  };

  const mainJSON = {
    title: "",
    paper: "Selecione...",
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
