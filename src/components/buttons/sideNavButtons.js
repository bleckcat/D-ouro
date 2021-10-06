import { Box, IconButton, Tooltip } from "@material-ui/core";
import React from "react";

const SideNavButtons = (props) => {
  const { title, disabled, onClick, logOut } = props;
  return (
    <Box textAlign="center" marginTop={logOut && "auto"}>
      <Tooltip title={title} arrow placement="right">
        <IconButton
          disabled={disabled}
          color={logOut ? "secondary" : "primary"}
          onClick={onClick}
        >
          {props.children}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SideNavButtons;
