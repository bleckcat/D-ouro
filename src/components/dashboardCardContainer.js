import { Box, Grid, IconButton, Paper } from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";
import CardBody from "./dashboardCard";
import CardConsolidated from "./cardConsolidated";

const DashboardCardContainer = ({ cardValue, setCardValue }) => {
  const handleAddCard = () => {
    const baseCards = [...cardValue];

    const newCard = {
      title: "",
      scale: "",
      type: "",
      spread: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      graphValues: [],
    };
    baseCards.push(newCard);

    setCardValue(baseCards);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {cardValue.map((value, index) => (
          <>
            <CardBody
              cardValue={cardValue}
              setCardValue={setCardValue}
              value={value}
              index={index}
            />
          </>
        ))}
        {cardValue.length < 3 && (
          <Grid item xs={3}>
            <Paper style={{ height: "100%" }}>
              <Box display="flex" height="100%" justifyContent="center">
                <Box alignSelf="center">
                  <IconButton
                    aria-label="adicionar"
                    size="small"
                    color="primary"
                    onClick={handleAddCard}
                  >
                    <Add fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
        )}
        <CardConsolidated cardValue={cardValue} setCardValue={setCardValue} />
      </Grid>
    </Box>
  );
};
export default DashboardCardContainer;
