import { Box, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const SideNavLinks = (props) => {
  const { title, linkTo } = props;
  return (
    <Box textAlign="center" pl={props.pl}>
      <Link to={`/${linkTo}`}>
        <Tooltip title={title} arrow placement="right">
          <IconButton color="primary" onClick={props.onClick}>
            {props.children}
          </IconButton>
        </Tooltip>
      </Link>
    </Box>
  );
};

export default SideNavLinks;
