import React, { useContext } from "react";
import { Box, Fade, Grid, IconButton, Paper } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import CardBody from "./dashboardCard";
import CardConsolidated from "./cardConsolidated";
import { UserBoardsContext } from "../providers/userBoards";
import { TransitionContext } from "../providers/transitionController";
import { getTimeStamp } from "../helpers/timeHelpers";

const DashboardCardContainer = () => {
  const { boardValue, setBoardValue, selectedBoardIndex, cardDefaultValues } =
    useContext(UserBoardsContext);
  const { cardBoardTransitions } = useContext(TransitionContext);

  const addNewCard = () => {
    let oldBoardValues = [...boardValue];
    const newCardIndex = oldBoardValues[selectedBoardIndex].cardValues.length;
    oldBoardValues[selectedBoardIndex].cardValues[newCardIndex] =
      cardDefaultValues;
    oldBoardValues[selectedBoardIndex].cardValues[newCardIndex].timeStamp =
      getTimeStamp(new Date());
    setBoardValue(oldBoardValues);
  };

  const removeCard = (cardIndex) => {
    let oldBoardValues = [...boardValue];
    oldBoardValues[selectedBoardIndex].cardValues.splice(cardIndex, 1);
    setBoardValue(oldBoardValues);
  };

  const changeCardValue = (keyName, inputValue, cardIndex) => {
    let oldBoardValues = [...boardValue];
    if (Object.keys(cardDefaultValues.inputValues).includes(keyName)) {
      oldBoardValues[selectedBoardIndex].cardValues[cardIndex].inputValues[
        keyName
      ] = inputValue;
    } else {
      oldBoardValues[selectedBoardIndex].cardValues[cardIndex][keyName] =
        inputValue;
    }
    setBoardValue(oldBoardValues);
  };

  const handleConsolidatedChange = (keyName, inputValue, cardIndex) => {
    let oldBoardValues = [...boardValue];
    oldBoardValues[selectedBoardIndex].cardValues[cardIndex][keyName] =
      inputValue;
    setBoardValue(oldBoardValues);
  };

  return (
    <Box p={2} flex={1}>
      <Grid container spacing={2}>
        {boardValue[selectedBoardIndex].cardValues.map((value, index) => (
          <CardBody
            boardType={boardValue[selectedBoardIndex].boardType}
            cardsLength={boardValue[selectedBoardIndex].cardValues.length}
            cardValue={value}
            cardIndex={index}
            changeCardValue={changeCardValue}
            removeCard={removeCard}
          />
        ))}
        {boardValue[selectedBoardIndex].cardValues.length < 3 && (
          <Fade in={cardBoardTransitions.general}>
            <Grid item xs={3}>
              <Paper style={{ height: "100%" }}>
                <Box display="flex" height="100%" justifyContent="center">
                  <Box alignSelf="center">
                    <IconButton
                      aria-label="adicionar"
                      size="small"
                      color="primary"
                      onClick={addNewCard}
                    >
                      <Add fontSize="large" />
                    </IconButton>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Fade>
        )}
        <Fade in={cardBoardTransitions.general}>
          <Grid item xs={3}>
            <CardConsolidated
              boardValue={boardValue}
              selectedBoardIndex={selectedBoardIndex}
              handleConsolidatedChange={handleConsolidatedChange}
            />
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
};
export default DashboardCardContainer;
