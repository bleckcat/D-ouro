import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Delete, ExpandLess, ExpandMore, Timeline } from "@material-ui/icons";
import SliderInput from "./Inputs/SliderInput";
import { DarkerPaper } from "./style";

const CardConsolidated = ({ cardValue, setCardValue, value, index }) => {
  const handleRemoveCard = (cardIndex) => {
    const baseCards = [...cardValue];
    baseCards.splice(cardIndex, 1);
    setCardValue(baseCards);
  };

  const [checkboxState, setCheckboxState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });
  const handleCheckBoxChange = (event) => {
    setCheckboxState({
      ...checkboxState,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Grid key={index} item xs={3}>
      <Paper style={{ height: "100%" }}>
        <Box display="flex" flexDirection="column" height="100%">
          <Box px={1} pt={1}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>Consolidado</Typography>
            </Box>
            <DarkerPaper>
              <Box m={1} p={1}>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        color="primary"
                        onChange={handleCheckBoxChange}
                        checked={checkboxState.checkedA}
                        name="checkedA"
                      />
                    }
                    label="End"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        color="primary"
                        onChange={handleCheckBoxChange}
                        checked={checkboxState.checkedB}
                        name="checkedB"
                      />
                    }
                    label="End"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        color="primary"
                        onChange={handleCheckBoxChange}
                        checked={checkboxState.checkedC}
                        name="checkedC"
                      />
                    }
                    label="End"
                    labelPlacement="end"
                  />
                </FormGroup>
              </Box>
            </DarkerPaper>
          </Box>
          <Divider />
          <Box p={1} height="100%">
            <DarkerPaper style={{ height: "100%" }}>a</DarkerPaper>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
export default CardConsolidated;
