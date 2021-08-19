import { Avatar, Box, IconButton, Paper } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Add, Dashboard, Person } from "@material-ui/icons";
import { GlowingTab, SideTabs } from "./style";
import { UserBoardsContext } from "../providers/userBoards";

const SideNav = () => {
  const { handleAddBoard, boardValue, setSelectedBoard, changeBoardContent } =
    useContext(UserBoardsContext);

  const [IndexController, setIndexController] = useState(0);

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
              onClick={() =>
                changeBoardContent(index, IndexController, setIndexController)
              }
              icon={<Dashboard />}
            />
          );
        })}
      </SideTabs>
      <Box textAlign="center">
        <IconButton
          aria-label="adicionar"
          color="primary"
          onClick={() =>
            handleAddBoard(
              IndexController,
              setSelectedBoard,
              setIndexController
            )
          }
        >
          <Add />
        </IconButton>
      </Box>
    </Paper>
  );
};
export default SideNav;
