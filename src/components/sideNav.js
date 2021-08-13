import { Avatar, Box, IconButton, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Add, Dashboard, Person } from "@material-ui/icons";
import { GlowingTab, SideTabs } from "./style";

const SideNav = ({
  boardValue,
  setBoardValue,
  selectedBoard,
  setSelectedBoard,
}) => {
  const [IndexController, setIndexController] = useState(0);
  const changeBoardContent = (selectedIndex) => {
    const newValue = [...boardValue];
    newValue.splice(IndexController, 1, selectedBoard);

    setSelectedBoard(boardValue[selectedIndex]);
    setIndexController(selectedIndex);
    setBoardValue(newValue);
  };

  const handleAddBoard = () => {
    const allBoards = [...boardValue];
    const newBoard = [
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
    ];
    allBoards.push(newBoard);
    allBoards.splice(IndexController, 1, selectedBoard);

    setSelectedBoard(boardValue[boardValue.length - 1]);
    setIndexController(boardValue.length);
    setBoardValue(allBoards);
  };

  const handleNav = (event, newTab) => {
    setIndexController(newTab);
  };

  return (
    <Paper square elevation={2}>
      <Box textAlign="center">
        <IconButton aria-label="adicionar">
          <Avatar>
            <Person color="primary" />
          </Avatar>
        </IconButton>
      </Box>
      <SideTabs
        orientation="vertical"
        value={IndexController}
        onChange={handleNav}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        {boardValue.map((item, index) => {
          return (
            <GlowingTab
              onClick={() => changeBoardContent(index)}
              icon={<Dashboard />}
            />
          );
        })}
      </SideTabs>
      <Box textAlign="center">
        <IconButton
          aria-label="adicionar"
          color="primary"
          onClick={() => handleAddBoard()}
        >
          <Add />
        </IconButton>
      </Box>
    </Paper>
  );
};
export default SideNav;
