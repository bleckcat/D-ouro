import {
  Box,
  Fade,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, { useContext } from "react";
import { getTimeStamp } from "../helpers/timeHelpers";
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

  const types = [
    {
      value: 0,
      label: "Suporte",
    },
    {
      value: 1,
      label: "Resistência",
    },
  ];

  const papers = ["Selecione...", "BOVA11", "PETR4"];

  const handleNameTimeStamp = () => {
    let oldBoardValues = [...boardValue];
    const selectedType = boardValue[selectedBoardIndex].boardType;
    oldBoardValues[selectedBoardIndex].title = `${
      types[selectedType].label
    }-${getTimeStamp(new Date()).split(":").join("-")}`;
    setBoardValue(oldBoardValues);
  };

  return (
    <Box pt={2} px={2} display="flex">
      <Fade in={cardBoardTransitions.general}>
        <TextField
          value={boardValue[selectedBoardIndex].title}
          label="Nome do estudo"
          variant="outlined"
          size="small"
          onChange={(e) => handleChange("title", e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title="Gerar nome" arrow placement="right">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleNameTimeStamp}
                    size="small"
                  >
                    <Autorenew />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      </Fade>
      <Box pr={2} />
      <Fade in={cardBoardTransitions.general}>
        <TextField
          variant="outlined"
          size="small"
          select
          label="Tipo"
          style={{ width: "180px" }}
          value={boardValue[selectedBoardIndex].boardType}
          onChange={(e) => handleChange("boardType", e.target.value)}
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Fade>
      <Box pr={2} />
      <Fade in={cardBoardTransitions.general}>
        <Autocomplete
          style={{ width: "180px" }}
          options={papers}
          onChange={(event, newValue) => handleChange("paper", newValue)}
          value={boardValue[selectedBoardIndex].paper}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Papel"
              size="small"
              variant="outlined"
            />
          )}
        />
      </Fade>
    </Box>
  );
};

export default DashboardTitle;
