import { Box } from "@material-ui/core";
import React from "react";
import SideNav from "../../components/sideNav";
import DashboardInputs from "../../components/dashboardInputs";
import DashboardTitle from "../../components/dashboardTitle";
import DashboardCard from "../../components/dashboardCard";

const DashBoard = () => {
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
      <SideNav />
      <Box width="100%" display="block">
        <DashboardTitle />
        <DashboardInputs />
        <DashboardCard />
      </Box>
    </>
  );
};
export default DashBoard;
