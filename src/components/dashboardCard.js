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
import React, { useContext } from "react";
import { Delete, Timeline } from "@material-ui/icons";
import SliderInput from "./Inputs/SliderInput";
import { DarkerPaper } from "./style";
import { captalizeWord } from "../helpers/stringHelpers";
import { TransitionContext } from "../providers/transitionController";

const CardBody = ({ cardValue, cardIndex, changeCardValue, removeCard }) => {
  const { cardBoardTransitions } = useContext(TransitionContext);
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
              <Typography>Card</Typography>
              {cardIndex !== 0 && (
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
                  Impulso Correção
                </Button>
              </Box>
              <DarkerPaper style={{ textAlign: "center" }}>
                <img src="images/SuporteImpulso.png" alt="SuporteImpulso" />
              </DarkerPaper>
              <DarkerPaper>
                <Box p={1} mt={1}>
                  {Object.keys(cardValue.inputValues).map((keyName) => {
                    return (
                      <Box pt={1}>
                        <TextField
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
                    );
                  })}
                </Box>
              </DarkerPaper>
            </Box>
            <Box flex={1}>
              <DarkerPaper style={{ height: "100%" }}></DarkerPaper>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Fade>
  );
};
export default CardBody;
