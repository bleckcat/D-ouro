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
import React from "react";
import {
  Add,
  Delete,
  ExpandLess,
  ExpandMore,
  Timeline,
} from "@material-ui/icons";
import SliderInput from "./Inputs/SliderInput";
import { DarkerPaper } from "./style";

const DashboardCard = ({ cardValue, setCardValue }) => {
  const handleAddCard = () => {
    const baseCards = [...cardValue];

    const newCard = {
      title: "",
      scale: "",
      type: "",
      spread: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      graphValues: [],
    };
    baseCards.push(newCard);

    setCardValue(baseCards);
  };

  const handleRemoveCard = (cardIndex) => {
    const baseCards = [...cardValue];
    baseCards.splice(cardIndex, 1);
    setCardValue(baseCards);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        {console.log(cardValue)}
        {cardValue.map((value, index) => (
          <Grid key={index} item xs={3}>
            <Paper>
              <Box px={1} pt={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography>Card {index}</Typography>
                  <IconButton
                    aria-label="adicionar"
                    size="small"
                    onClick={() => handleRemoveCard(index)}
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
                  <DarkerPaper>gráfico</DarkerPaper>
                  <DarkerPaper>
                    <Box p={1} mt={1}>
                      <Box pt={1}>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          placeholder="000.000"
                          fullWidth
                          label="A"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Box pt={2}>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          placeholder="000.000"
                          fullWidth
                          label="B"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Box pt={2}>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          placeholder="000.000"
                          fullWidth
                          label="C"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Box pt={1} textAlign="center">
                        <IconButton
                          aria-label="adicionar"
                          size="small"
                          color="primary"
                        >
                          <ExpandLess />
                        </IconButton>
                      </Box>
                      <Box pt={1}>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          placeholder="000.000"
                          fullWidth
                          label="D"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Box pt={2}>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          placeholder="000.000"
                          fullWidth
                          label="E"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Box pt={2}>
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          placeholder="000.000"
                          fullWidth
                          label="F"
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                    </Box>
                  </DarkerPaper>
                </Box>
                <Box flex={1}>jorginho</Box>
              </Box>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Paper style={{ height: "100%" }}>
            <Box display="flex" height="100%" justifyContent="center">
              <Box alignSelf="center">
                <IconButton
                  aria-label="adicionar"
                  size="small"
                  color="primary"
                  onClick={handleAddCard}
                >
                  <Add fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default DashboardCard;
