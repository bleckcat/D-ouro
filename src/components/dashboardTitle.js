import { Box, TextField } from "@material-ui/core";
import React from "react";

const DashboardTitle = () => {
  return (
    <Box pt={2} textAlign="center">
      <TextField label="Nome do estudo" variant="outlined" size="small" />
    </Box>
  );
};
export default DashboardTitle;
