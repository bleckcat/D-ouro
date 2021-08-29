import { Avatar, Box, IconButton, Paper } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Add, Brightness4, Dashboard, Person } from "@material-ui/icons";
import { GlowingTab, SideTabs } from "./style";
import { UserBoardsContext } from "../providers/userBoards";
import { ThemeContext } from "../providers/theme";

const SideNav = () => {
  const { boardValue, handleAddNewBoard, setSelectedBoardIndex } =
    useContext(UserBoardsContext);
  const { changeTheme } = useContext(ThemeContext);
  const [tabIndex, setTabIndex] = useState(0);
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
        value={tabIndex}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        {boardValue.map((item, index) => {
          return (
            <GlowingTab
              onClick={() => {
                setTabIndex(index);
                setSelectedBoardIndex(index);
              }}
              icon={<Dashboard />}
            />
          );
        })}
      </SideTabs>
      <Box textAlign="center">
        <IconButton
          disabled={boardValue.length === 5}
          aria-label="adicionar"
          color="primary"
          onClick={() => {
            handleAddNewBoard();
            setTabIndex(boardValue.length);
            setSelectedBoardIndex(boardValue.length);
          }}
        >
          <Add />
        </IconButton>
      </Box>
      <Box textAlign="center">
        <IconButton
          aria-label="adicionar"
          color="primary"
          onClick={changeTheme}
        >
          <Brightness4 />
        </IconButton>
      </Box>
    </Paper>
  );
};
export default SideNav;
