import { Box } from "@material-ui/core";
import React, { useState } from "react";
import SideNav from "../../components/sideNav";
import DashboardInputs from "../../components/dashboardInputs";
import DashboardTitle from "../../components/dashboardTitle";
import DashboardCardContainer from "../../components/dashboardCard";

const DashBoard = () => {
  const [cardValue, setCardValue] = useState([
    {
      title: "",
      scale: "",
      type: "",
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
      title: "",
      scale: "",
      type: "",
      spread: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
      graphValues: [],
    },
  ]);

  return (
    <>
      <SideNav />
      <Box width="100%" display="block">
        <DashboardTitle />
        <DashboardInputs />
        <DashboardCardContainer cardValue={cardValue} setCardValue={setCardValue} />
      </Box>
    </>
  );
};
export default DashBoard;
