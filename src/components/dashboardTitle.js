import { Box, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { UserBoardsContext } from "../providers/userBoards";

const DashboardTitle = () => {
  const { boardValue, setBoardValue, selectedBoardIndex } =
    useContext(UserBoardsContext);

  const handleChange = (keyName, inputValue) => {
    let oldBoardValues = [...boardValue];
    oldBoardValues[selectedBoardIndex][keyName] = inputValue;
    setBoardValue(oldBoardValues);
  };

  return (
    <Box pt={2} textAlign="center">
      <TextField
        value={boardValue[selectedBoardIndex].title}
        label="Nome do estudo"
        variant="outlined"
        size="small"
        onChange={(e) => handleChange("title", e.target.value)}
      />
    </Box>
  );
};
export default DashboardTitle;
