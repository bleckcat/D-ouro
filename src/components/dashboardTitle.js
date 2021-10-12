import {
  Box,
  Fade,
  IconButton,
  InputAdornment,
  MenuItem,
  Tab,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add, ArrowForward, Autorenew, Dashboard } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import React, { useContext, useState } from "react";
import { getTimeStamp } from "../helpers/timeHelpers";
import { TransitionContext } from "../providers/transitionController";
import { UserBoardsContext } from "../providers/userBoards";
import SideNavButtons from "./buttons/sideNavButtons";
import SideNavLinks from "./buttons/sideNavLinks";
import { SideTabs } from "./style";

const DashboardTitle = () => {
  const {
    boardValue,
    setBoardValue,
    selectedBoardIndex,
    handleAddNewBoard,
    setSelectedBoardIndex,
  } = useContext(UserBoardsContext);
  const { cardBoardTransitions } = useContext(TransitionContext);
  const { handleCardsReload } = useContext(TransitionContext);
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (keyName, inputValue) => {
    let oldBoardValues = [...boardValue];
    if (keyName === "boardType") {
      switch (inputValue) {
        case 0:
          if (boardValue[selectedBoardIndex].title.includes("Resistência")) {
            oldBoardValues[selectedBoardIndex].title = oldBoardValues[
              selectedBoardIndex
            ].title.replace("Resistência", "Suporte");
          }
          console.log(boardValue[selectedBoardIndex].title);
          break;
        case 1:
          if (boardValue[selectedBoardIndex].title.includes("Suporte")) {
            oldBoardValues[selectedBoardIndex].title = oldBoardValues[
              selectedBoardIndex
            ].title.replace("Suporte", "Resistência");
          }
          console.log(boardValue[selectedBoardIndex].title);
          break;
      }
    }
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
    <Box pt={2} px={2} display="flex" justifyContent="space-between">
      <Box display="flex">
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
        <SideNavLinks linkTo="tradingView" title="Abrir no TradingView" pl={2}>
          <ArrowForward fontSize="small" />
        </SideNavLinks>
      </Box>
      <Box display="flex">
        <SideTabs
          value={tabIndex}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          {boardValue.map((item, index) => {
            return (
              <Tooltip key={index} title={item.title} arrow placement="right">
                <Tab
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
        <SideNavButtons
          title="Adicionar estudo"
          onClick={() => {
            handleAddNewBoard();
            setTabIndex(boardValue.length);
            handleCardsReload();
            setTimeout(() => {
              setSelectedBoardIndex(boardValue.length);
            }, 400);
          }}
          disabled={boardValue.length === 5}
        >
          <Add />
        </SideNavButtons>
      </Box>
    </Box>
  );
};

export default DashboardTitle;
