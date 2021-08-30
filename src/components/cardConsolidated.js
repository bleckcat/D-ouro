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

const CardConsolidated = ({
  boardValue,
  selectedBoardIndex,
  handleConsolidatedChange,
}) => {
  return (
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
                {boardValue[selectedBoardIndex].cardValues.map(
                  (item, index) => {
                    return (
                      <FormControlLabel
                        value="end"
                        control={
                          <Checkbox
                            color="primary"
                            onChange={(e) =>
                              handleConsolidatedChange(
                                "isEnabled",
                                e.target.checked,
                                index
                              )
                            }
                            checked={item.isEnabled}
                            name="checkedA"
                          />
                        }
                        label={`Card ${index}`}
                        labelPlacement="end"
                      />
                    );
                  }
                )}
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
  );
};
export default CardConsolidated;
