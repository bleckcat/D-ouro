import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
} from "@material-ui/core";
import React from "react";
import { Delete } from "@material-ui/icons";
import SliderInput from "./Inputs/SliderInput";

const DashboardCard = () => {
  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {[0, 1, 2, 3].map((value) => (
          <Grid key={value} item xs={3}>
            <Paper>
              <Box px={1} pt={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>Card {value}</Box>
                  <Box>
                    <IconButton aria-label="adicionar" size="small">
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>
                <Paper>
                  <Box m={1} p={1}>
                    <SliderInput />
                  </Box>
                </Paper>
              </Box>
              <Divider />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default DashboardCard;
