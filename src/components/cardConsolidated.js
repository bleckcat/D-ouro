import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { DarkerPaper } from "./style";

const CardConsolidated = ({ selectedBoard }) => {
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
    <Grid item xs={3}>
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
                    label="Card 1"
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
                    label="Card 2"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="end"
                    control={
                      <Checkbox
                        disabled
                        color="primary"
                        onChange={handleCheckBoxChange}
                        checked={checkboxState.checkedC}
                        name="checkedC"
                      />
                    }
                    label="Card 3"
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
