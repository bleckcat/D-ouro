import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Delete, ExpandLess, ExpandMore, Timeline } from "@material-ui/icons";
import SliderInput from "./Inputs/SliderInput";
import { DarkerPaper } from "./style";
import { captalizeWord } from "../helpers/stringHelpers";
import { UserBoardsContext } from "../providers/userBoards";

const mainTypes = {
  _NUMBER_INPUT: 0,
  _SLIDER: 1,
  _BUTTON: 2,
};

const CardBody = ({ cardValue, cardIndex, handleCardChangesInBoard }) => {
  const { handleRemoveCard } = useContext(UserBoardsContext);

  const handleInformationChange = (key, value, type) => {
    let oldValue = { ...cardValue };
    let newValue = null;
    const addedValue = { [key]: value };

    if (type === mainTypes._NUMBER_INPUT) {
      const newInputValue = { ...oldValue.inputValues, ...addedValue };
      newValue = { ...oldValue, inputValues: { ...newInputValue } };
    } else {
      newValue = { ...oldValue, ...addedValue };
    }

    handleCardChangesInBoard(newValue, cardIndex);
  };

  return (
    <Grid item xs={3}>
      <Paper>
        <Box px={1} pt={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>Card</Typography>
            <IconButton
              aria-label="adicionar"
              size="small"
              onClick={() => handleRemoveCard(cardIndex)}
            >
              <Delete />
            </IconButton>
          </Box>
          <DarkerPaper>
            <Box m={1} p={1}>
              <SliderInput />
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
                        onChange={(event) =>
                          handleInformationChange(
                            keyName,
                            parseFloat(event.target.value),
                            mainTypes._NUMBER_INPUT
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
  );
};
export default CardBody;
