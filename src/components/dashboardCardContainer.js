import { Box, Grid, IconButton, Paper } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Add } from "@material-ui/icons";
import CardBody from "./dashboardCard";
import CardConsolidated from "./cardConsolidated";
import { UserBoardsContext } from "../providers/userBoards";

const DashboardCardContainer = () => {
  const { boardValue, setBoardValue, selectedBoardIndex, cardDefaultValues } =
    useContext(UserBoardsContext);

  const addNewCard = () => {
    let oldBoardValues = [...boardValue];
    const newCardIndex = oldBoardValues[selectedBoardIndex].cardValues.length;
    oldBoardValues[selectedBoardIndex].cardValues[newCardIndex] =
      cardDefaultValues;
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

  return (
    <Box p={2} flex={1}>
      <Grid container spacing={2}>
        {boardValue[selectedBoardIndex].cardValues.map((value, index) => (
          <CardBody
            cardValue={value}
            cardIndex={index}
            changeCardValue={changeCardValue}
            removeCard={removeCard}
          />
        ))}
        {boardValue[selectedBoardIndex].cardValues.length < 3 && (
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
        )}
        <CardConsolidated selectedBoardValue={boardValue[selectedBoardIndex]} />
      </Grid>
    </Box>
  );
};
export default DashboardCardContainer;
