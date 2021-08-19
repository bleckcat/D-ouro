import react, { createContext, useState } from "react";

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

export const UserBoardsContext = createContext({});

export const UserBoardProvider = (props) => {
  const [boardValue, setBoardValue] = useState([[mainJSON]]);
  const [selectedBoard, setSelectedBoard] = useState(boardValue[0]);

  const handleAddCard = (selectedBoard, setSelectedBoard) => {
    const baseCards = [...selectedBoard];

    baseCards.push(mainJSON);

    setSelectedBoard(baseCards);
  };

  const handleRemoveCard = (cardIndex) => {
    const baseCards = [...selectedBoard];
    baseCards.splice(cardIndex, 1);
    setSelectedBoard(baseCards);
  };

  const handleAddBoard = (
    IndexController,
    setSelectedBoard,
    setIndexController
  ) => {
    const allBoards = [...boardValue];
    allBoards.push([mainJSON]);
    allBoards.splice(IndexController, 1, selectedBoard);

    setSelectedBoard(boardValue[boardValue.length - 1]);
    setIndexController(boardValue.length);
    setBoardValue(allBoards);
  };

  const changeBoardContent = (
    selectedIndex,
    IndexController,
    setIndexController
  ) => {
    const newValue = [...boardValue];
    newValue.splice(IndexController, 1, selectedBoard);
    console.log(boardValue[selectedIndex]);
    setSelectedBoard(boardValue[selectedIndex]);
    setIndexController(selectedIndex);
    setBoardValue(newValue);
  };

  return (
    <UserBoardsContext.Provider
      value={{
        boardValue,
        setBoardValue,
        selectedBoard,
        handleAddCard,
        handleRemoveCard,
        setSelectedBoard,
        handleAddBoard,
        changeBoardContent,
      }}
    >
      {props.children}
    </UserBoardsContext.Provider>
  );
};
