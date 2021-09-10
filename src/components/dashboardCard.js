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
import { DarkerPaper } from "./style";
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
import { DemonstrationCard } from "./demoGraphs/graphs";
import { impulseSuport } from "./demoGraphs/graphsData";

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

  const renderLabel = (props) => {
    const { x, y, value } = props;
    if (props.index !== 1) {
      return null;
    }
    return (
      <>
        <svg x={x} y={y - 7} width="80" height="14" viewBox="0 0 80 14">
          <g fill="#37EFBA">
            <polygon points="0,7 7,0 7,14" />
            <rect x={7} width={50} height="14" />
            <text x={7} y={10} fill="#424242" fontSize={9}>
              {value[1]}
            </text>
            <Star x={-9} style={{ fill: "#424242" }} />
          </g>
        </svg>
      </>
    );
  };

  return (
    <Fade in={cardBoardTransitions?.[cardIndex]}>
      <Grid item xs={3}>
        <Paper>
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
                style={{ textAlign: "center", height: "120px", padding: "8px 4px 4px 4px" }}
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
                <ResponsiveContainer width="99%" height="100%">
                  <AreaChart
                    width={200}
                    height={520}
                    data={rangeData}
                    margin={{ right: 40 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#37EFBA"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="100%"
                          stopColor="#37EFBA"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <YAxis
                      tick={{ fill: "#efefef", fontSize: 9 }}
                      domain={[0, "dataMax + 100"]}
                      width={32}
                      interval="preserveStartEnd"
                      scale="linear"
                      stroke="#efefef"
                    />
                    <Area
                      name="card1"
                      dataKey="market_values"
                      stroke="#95a29f"
                      fill="url(#colorValue)"
                    >
                      <LabelList
                        dataKey="market_values"
                        content={renderLabel}
                      />
                    </Area>
                    <Area
                      name="card1"
                      dataKey="market_values2"
                      stroke="#95a29f"
                      fill="url(#colorValue)"
                    >
                      <LabelList
                        dataKey="market_values2"
                        content={renderLabel}
                      />
                    </Area>
                    <Tooltip />
                    <ReferenceLine
                      y={75}
                      label={{
                        position: "top",
                        value: "75",
                        fill: "#FFF",
                        fontSize: 10,
                      }}
                      stroke="#37EFBA"
                      strokeDasharray="3 3"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </DarkerPaper>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Fade>
  );
};
export default CardBody;
