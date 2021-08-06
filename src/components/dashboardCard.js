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
import { Delete, ExpandLess, ExpandMore, Timeline } from "@material-ui/icons";
import SliderInput from "./Inputs/SliderInput";
import { DarkerPaper } from "./style";

const CardBody = ({ cardValue, setCardValue, value, index }) => {
  const handleRemoveCard = (cardIndex) => {
    const baseCards = [...cardValue];
    baseCards.splice(cardIndex, 1);
    setCardValue(baseCards);
  };

  return (
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
            <DarkerPaper>
              <img src="images/SuporteImpulso.png" alt="SuporteImpulso" />
            </DarkerPaper>
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
          <Box flex={1}>
            <DarkerPaper style={{ height: "100%" }}>

            </DarkerPaper>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};
export default CardBody;
