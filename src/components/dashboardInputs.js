import { Box, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";

const DashboardInputs = () => {
  const [currency, setCurrency] = useState(0);

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

  return (
    <>
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
        <Box pr={2} />
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
    </>
  );
};
export default DashboardInputs;
