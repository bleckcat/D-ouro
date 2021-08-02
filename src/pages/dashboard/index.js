import {
  Avatar,
  Box,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { Add, Looks3, LooksOne, LooksTwo, Person } from "@material-ui/icons";
import { GlowingTab, SideTabs } from "./style";

const DashBoard = () => {
  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState(0);

  const handleInput = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelect = (event) => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: 0,
      label: "Suporte",
    },
    {
      value: 1,
      label: "Resistência",
    },
  ];

  const cardsValues = [
    {
      title: "Card 1",
      scale: "S1",
      type: "impulso",
      spread: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      graphValues: [],
    },
    {
      title: "Card 2",
      scale: "S1",
      type: "impulso",
      spread: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      graphValues: [],
    },
    {
      title: "Card 3",
      scale: "S1",
      type: "impulso",
      spread: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      graphValues: [],
    },
  ];

  return (
    <>
      <Paper square elevation={2}>
        <Box textAlign="center">
          <IconButton aria-label="adicionar">
            <Avatar>
              <Person color="primary" />
            </Avatar>
          </IconButton>
        </Box>
        <SideTabs
          orientation="vertical"
          value={value}
          onChange={handleInput}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <GlowingTab icon={<LooksOne />} />
          <GlowingTab icon={<LooksTwo />} />
          <GlowingTab icon={<Looks3 />} />
        </SideTabs>
        <Box textAlign="center">
          <IconButton aria-label="adicionar" color="primary">
            <Add />
          </IconButton>
        </Box>
      </Paper>
      <Box width="100%" display="block">
        <Box pt={2} textAlign="center">
          <TextField label="Nome do estudo" variant="outlined" size="small" />
        </Box>
        <Box px={2} display="flex">
          <TextField
            label="Nome do estudo"
            variant="outlined"
            size="small"
            select
            label="Tipo"
            value={currency}
            onChange={handleSelect}
            helperText="Selecione o tipo de dashboard"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Box pr={2}/>
          <TextField
            label="Nome do estudo"
            variant="outlined"
            size="small"
            select
            label="Tipo"
            value={currency}
            onChange={handleSelect}
            helperText="Selecione o tipo de dashboard"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box p={2}>
          <Grid container spacing={2}>
            {[0, 1, 2, 3].map((value) => (
              <Grid key={value} item xs={3}>
                <Paper>Card {value}</Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default DashBoard;
