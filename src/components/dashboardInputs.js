import { Box, Fade, MenuItem, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { TransitionContext } from "../providers/transitionController";
import { UserBoardsContext } from "../providers/userBoards";

const DashboardInputs = () => {
  const { boardValue, setBoardValue, selectedBoardIndex } =
    useContext(UserBoardsContext);
  const { cardBoardTransitions } = useContext(TransitionContext);

  const handleChange = (keyName, inputValue) => {
    let oldBoardValues = [...boardValue];
    oldBoardValues[selectedBoardIndex][keyName] = inputValue;
    setBoardValue(oldBoardValues);
  };

  const currencies = [
    {
      value: 0,
      label: "Suporte",
    },
    {
      value: 1,
      label: "Resistência",
    },
  ];

  const papers = [
    {
      value: 0,
      label: "Selecione...",
    },
    {
      value: 1,
      label: "BOVA11",
    },
    {
      value: 2,
      label: "PETR4",
    },
  ];

  return (
    <>
      <Box px={2} display="flex">
        <Fade in={cardBoardTransitions.general}>
          <TextField
            variant="outlined"
            size="small"
            select
            label="Tipo"
            value={boardValue[selectedBoardIndex].type}
            onChange={(e) => handleChange("type", e.target.value)}
            helperText="Selecione o tipo de dashboard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Fade>
        <Box pr={2} />
        <Fade in={cardBoardTransitions.general}>
          <TextField
            variant="outlined"
            size="small"
            select
            label="Papel"
            value={boardValue[selectedBoardIndex].paper}
            onChange={(e) => handleChange("paper", e.target.value)}
            helperText="Seleciona um ativo"
          >
            {papers.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Fade>
      </Box>
    </>
  );
};
export default DashboardInputs;
