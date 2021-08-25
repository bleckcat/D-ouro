import { Box, Grid, IconButton, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { Add } from "@material-ui/icons";
import CardBody from "./dashboardCard";
import CardConsolidated from "./cardConsolidated";
import { UserBoardsContext } from "../providers/userBoards";

const DashboardCardContainer = () => {
  const { boardValue } = useContext(UserBoardsContext);

  return (
    <Box p={2} flex={1}>
      <Grid container spacing={2}>
        {boardValue[0].cardValues.map((value, index) => (
          <CardBody cardValue={value} cardIndex={index} />
        ))}
        {boardValue[0].cardValues.length < 3 && (
          <Grid item xs={3}>
            <Paper style={{ height: "100%" }}>
              <Box display="flex" height="100%" justifyContent="center">
                <Box alignSelf="center">
                  <IconButton
                    aria-label="adicionar"
                    size="small"
                    color="primary"
                  >
                    <Add fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
        )}
        <CardConsolidated selectedBoardValue={boardValue[0]} />
      </Grid>
    </Box>
  );
};
export default DashboardCardContainer;
