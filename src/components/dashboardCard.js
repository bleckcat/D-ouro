import {
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import {
  Delete,
  LockOpenOutlined,
  LockOutlined,
  Star,
  Timeline,
} from "@material-ui/icons";
import SliderInput from "./Inputs/SliderInput";
import { CardColorBox, DarkerPaper } from "./style";
import { captalizeWord } from "../helpers/stringHelpers";
import { TransitionContext } from "../providers/transitionController";
import {
  AreaChart,
  Area,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
} from "recharts";
import { DemonstrationCard } from "./demoChart/charts";
import { impulseSuport } from "./demoChart/chartsData";
import { renderLabel } from "./graphComponents/areaChartLabel";
import { RangeChartGradient } from "./graphComponents/chartsDefs";
import CardAreaChart from "./graphComponents/cardAreaChart";

const CardBody = ({
  cardsLength,
  cardValue,
  cardIndex,
  changeCardValue,
  removeCard,
}) => {
  const { cardBoardTransitions } = useContext(TransitionContext);
  const [lockedIndex, setLockedIndex] = useState(true);

  const rangeData = [
    {
      market_values: [50, 150],
      market_values2: [50, 50],
    },
    {
      market_values: [50, 150],
      market_values2: [50, 50],
    },
  ];

  return (
    <Fade in={cardBoardTransitions?.[cardIndex]}>
      <Grid item xs={3}>
        <Paper>
          <CardColorBox width="100%" p={0.1} cardIndex={cardIndex} />
          <Box px={1} pt={1}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>Card {cardValue.timeStamp}</Typography>
              {cardsLength > 1 && (
                <IconButton
                  onClick={() => removeCard(cardIndex)}
                  aria-label="adicionar"
                  size="small"
                >
                  <Delete />
                </IconButton>
              )}
            </Box>
            <DarkerPaper>
              <Box m={1} p={1}>
                <SliderInput
                  label="Ajuste de escala"
                  value={cardValue.scale}
                  onChangeCommitted={(e, value) =>
                    changeCardValue("scale", value, cardIndex)
                  }
                />
              </Box>
            </DarkerPaper>
          </Box>
          <Divider />
          <Box p={1} display="flex" alignItems="stretch">
            <Box flex={1} pr={1}>
              <Box pb={1}>
                <Button fullWidth color="primary" startIcon={<Timeline />}>
                  Impulso
                </Button>
              </Box>
              <DarkerPaper
                style={{
                  textAlign: "center",
                  height: "120px",
                  padding: "8px 4px 4px 4px",
                }}
              >
                <DemonstrationCard data={impulseSuport} />
              </DarkerPaper>
              <DarkerPaper>
                <Box p={1} mt={1}>
                  <TextField
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    placeholder="000.000"
                    fullWidth
                    value={cardValue.spread}
                    label={captalizeWord("spread")}
                    variant="outlined"
                    size="small"
                    onChange={(e) =>
                      changeCardValue(
                        "spread",
                        parseFloat(e.target.value),
                        cardIndex
                      )
                    }
                  />
                </Box>
              </DarkerPaper>
              <DarkerPaper>
                <Box p={1} mt={1}>
                  {Object.keys(cardValue.inputValues).map((keyName, index) => {
                    return (
                      <>
                        {index === 3 && (
                          <Box textAlign="center" pt={1}>
                            <IconButton
                              color="primary"
                              size="small"
                              onClick={() =>
                                setLockedIndex((oldValue) => !oldValue)
                              }
                            >
                              {lockedIndex ? (
                                <LockOutlined />
                              ) : (
                                <LockOpenOutlined />
                              )}
                            </IconButton>
                          </Box>
                        )}
                        <Box pt={1}>
                          <TextField
                            disabled={index > 2 && lockedIndex}
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            placeholder="000.000"
                            fullWidth
                            value={cardValue.inputValues?.[keyName]}
                            label={captalizeWord(keyName)}
                            variant="outlined"
                            size="small"
                            onChange={(e) =>
                              changeCardValue(
                                keyName,
                                parseFloat(e.target.value),
                                cardIndex
                              )
                            }
                          />
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </DarkerPaper>
            </Box>
            <Box flex="1 1 35%">
              <DarkerPaper style={{ height: "100%" }}>
                <CardAreaChart cardIndex={cardIndex} rangeData={rangeData} />
              </DarkerPaper>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Fade>
  );
};
export default CardBody;
