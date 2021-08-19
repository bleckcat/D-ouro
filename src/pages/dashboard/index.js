import { Box } from "@material-ui/core";
import React, { useContext, useState } from "react";
import SideNav from "../../components/sideNav";
import DashboardInputs from "../../components/dashboardInputs";
import DashboardTitle from "../../components/dashboardTitle";
import DashboardCardContainer from "../../components/dashboardCardContainer";

const DashBoard = () => {
  return (
    <>
      <SideNav />
      <Box width="100%" display="flex" flexDirection="column">
        <DashboardTitle />
        <DashboardInputs />
        <DashboardCardContainer />
      </Box>
    </>
  );
};
export default DashBoard;
