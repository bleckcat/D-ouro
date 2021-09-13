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
import {
  Area,
  AreaChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { CustomFormGroup, DarkerPaper } from "./style";

const CardConsolidated = ({
  boardValue,
  selectedBoardIndex,
  handleConsolidatedChange,
}) => {
  const rangeData = [
    {
      consolidado: [0, 150],
      card1: [50, 100],
      card2: [25, 200],
      card3: [25, 50],
    },
    {
      consolidado: [0, 150],
      card1: [50, 100],
      card2: [25, 200],
      card3: [25, 50],
    },
  ];
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
              <CustomFormGroup aria-label="position" row>
                {boardValue[selectedBoardIndex].cardValues.map(
                  (item, index) => {
                    return (
                      <FormControlLabel
                        value="end"
                        label={
                          <Typography
                            variant="body2"
                            color="textSecondary"
                          >{`Card ${index}`}</Typography>
                        }
                        labelPlacement="end"
                        control={
                          <Checkbox
                            size="small"
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
                      />
                    );
                  }
                )}
              </CustomFormGroup>
            </Box>
          </DarkerPaper>
        </Box>
        <Divider />
        <Box p={1} height="100%">
          <DarkerPaper style={{ height: "100%" }}>
            <ResponsiveContainer width={"99%"} height="100%">
              <AreaChart width={140} height={520} data={rangeData}>
                <YAxis domain={[0, 250]} width={32} tickCount={11} />
                <Legend verticalAlign="top" height={36} />
                <Area
                  name="Primeiro card"
                  dataKey="card1"
                  stroke="#37EFBA"
                  fill="#37EFBA52"
                />
                <Area
                  name="segundo card"
                  dataKey="card2"
                  stroke="#37efec"
                  fill="#37efec52"
                />
                <Area
                  name="terceiro card"
                  dataKey="card3"
                  stroke="#37b5ef"
                  fill="#37b5ef52"
                />
                <Area
                  name="consolidado"
                  dataKey="consolidado"
                  stroke="#8437ef"
                  fill="#8437ef52"
                />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </DarkerPaper>
        </Box>
      </Box>
    </Paper>
  );
};
export default CardConsolidated;
