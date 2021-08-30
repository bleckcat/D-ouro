import { Avatar, Box, IconButton, Paper, Tooltip } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Add, Brightness4, Dashboard, Person } from "@material-ui/icons";
import { GlowingTab, SideTabs } from "./style";
import { UserBoardsContext } from "../providers/userBoards";
import { ThemeContext } from "../providers/theme";
import { TransitionContext } from "../providers/transitionController";

const SideNav = () => {
  const { boardValue, handleAddNewBoard, setSelectedBoardIndex } =
    useContext(UserBoardsContext);
  const { handleCardsReload } = useContext(TransitionContext);
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
            <Tooltip title={item.title} arrow placement="right">
              <GlowingTab
                onClick={() => {
                  setTabIndex(index);
                  handleCardsReload();
                  setTimeout(() => {
                    setSelectedBoardIndex(index);
                  }, 400);
                }}
                icon={<Dashboard />}
              />
            </Tooltip>
          );
        })}
      </SideTabs>
      <Box textAlign="center">
        <Tooltip title="Adicionar estudo" arrow placement="right">
          <IconButton
            disabled={boardValue.length === 5}
            aria-label="adicionar"
            color="primary"
            onClick={() => {
              handleAddNewBoard();
              setTabIndex(boardValue.length);
              handleCardsReload();
              setTimeout(() => {
                setSelectedBoardIndex(boardValue.length);
              }, 400);
            }}
          >
            <Add />
          </IconButton>
        </Tooltip>
      </Box>
      <Box textAlign="center">
        <Tooltip title="Mudar tema" arrow placement="right">
          <IconButton
            aria-label="adicionar"
            color="primary"
            onClick={changeTheme}
          >
            <Brightness4 />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};
export default SideNav;
