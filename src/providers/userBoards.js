import react, { createContext, useState } from "react";

export const UserBoardsContext = createContext({});

export const UserBoardProvider = (props) => {
  const [boardValue, setBoardValue] = useState([
    [
      {
        title: "",
        scale: "",
        type: "",
        spread: 0,
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        graphValues: [],
      },
    ],
  ]);

  return (
    <UserBoardsContext.Provider value={{ boardValue, setBoardValue }}>
      {props.children}
    </UserBoardsContext.Provider>
  );
};
