import { Box, Grid, IconButton, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { Add } from "@material-ui/icons";
import CardBody from "./dashboardCard";
import CardConsolidated from "./cardConsolidated";
import { UserBoardsContext } from "../providers/userBoards";

const DashboardCardContainer = () => {
  const { handleAddCard, selectedBoard, setSelectedBoard } =
    useContext(UserBoardsContext);

  const handleCardChangesInBoard = (cardNewValue, cardIndex) => {
    const oldCardValues = [...selectedBoard];
    oldCardValues.splice(cardIndex, 1, cardNewValue);
    setSelectedBoard(oldCardValues);
  };

  return (
    <Box p={2} flex={1}>
      <Grid container spacing={2}>
        {selectedBoard.map((value, index) => (
          <CardBody
            cardValue={value}
            cardIndex={index}
            handleCardChangesInBoard={handleCardChangesInBoard}
          />
        ))}
        {selectedBoard.length < 3 && (
          <Grid item xs={3}>
            <Paper style={{ height: "100%" }}>
              <Box display="flex" height="100%" justifyContent="center">
                <Box alignSelf="center">
                  <IconButton
                    aria-label="adicionar"
                    size="small"
                    color="primary"
                    onClick={() =>
                      handleAddCard(selectedBoard, setSelectedBoard)
                    }
                  >
                    <Add fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
        )}
        <CardConsolidated selectedBoard={selectedBoard} />
      </Grid>
    </Box>
  );
};
export default DashboardCardContainer;
