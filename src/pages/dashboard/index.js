import { Box } from "@material-ui/core";
import React from "react";
import SideNav from "../../components/sideNav";
import DashboardTitle from "../../components/dashboardTitle";
import DashboardCardContainer from "../../components/dashboardCardContainer";
import { TypeColorBox } from "./style";

const DashBoard = () => {
  return (
    <>
      <SideNav />
      <Box width="100%" display="flex" flexDirection="column">
        <TypeColorBox width="100%" p={0.2}/>
        <DashboardTitle />
        <DashboardCardContainer />
      </Box>
    </>
  );
};
export default DashBoard;
