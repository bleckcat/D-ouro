import { Avatar, Box, IconButton, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Add, Looks3, LooksOne, LooksTwo, Person } from "@material-ui/icons";
import { GlowingTab, SideTabs } from "./style";

const SideNav = () => {
  const [tab, setTab] = useState(0);

  const handleNav = (event, newTab) => {
    setTab(newTab);
  };

  return (
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
        value={tab}
        onChange={handleNav}
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
  );
};
export default SideNav;
