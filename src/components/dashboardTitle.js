import { Box, Fade, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { TransitionContext } from "../providers/transitionController";
import { UserBoardsContext } from "../providers/userBoards";

const DashboardTitle = () => {
  const { boardValue, setBoardValue, selectedBoardIndex } =
    useContext(UserBoardsContext);
  const { cardBoardTransitions } = useContext(TransitionContext);

  const handleChange = (keyName, inputValue) => {
    let oldBoardValues = [...boardValue];
    oldBoardValues[selectedBoardIndex][keyName] = inputValue;
    setBoardValue(oldBoardValues);
  };

  return (
    <Fade in={cardBoardTransitions.general}>
      <Box pt={2} textAlign="center">
        <TextField
          value={boardValue[selectedBoardIndex].title}
          label="Nome do estudo"
          variant="outlined"
          size="small"
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </Box>
    </Fade>
  );
};
export default DashboardTitle;
