import { Box, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";

const DashboardInputs = () => {
  const [currency, setCurrency] = useState(0);
  const [paper, setPaper] = useState(0);

  const handleSelect = (event) => {
    console.log(event.target.value);
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

  const papers = [
    {
      value: 0,
      label: "Selecione...",
    },
    {
      value: 1,
      label: "BOVA11",
    },
    {
      value: 2,
      label: "PETR4",
    },
  ];

  return (
    <>
      <Box px={2} display="flex">
        <TextField
          variant="outlined"
          size="small"
          select
          label="Tipo"
          value={currency}
          onChange={handleSelect}
          helperText="Selecione o tipo de dashboard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box pr={2} />
        <TextField
          variant="outlined"
          size="small"
          select
          label="Papel"
          value={paper}
          onChange={handleSelect}
          helperText="Seleciona um ativo"
        >
          {papers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
};
export default DashboardInputs;
