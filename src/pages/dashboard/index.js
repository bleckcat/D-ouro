import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import SideNav from "../../components/sideNav";
import DashboardTitle from "../../components/dashboardTitle";
import DashboardCardContainer from "../../components/dashboardCardContainer";
import { TypeColorBox } from "./style";
import { UserBoardsContext } from "../../providers/userBoards";
import AlertDialog from "../../components/Dialog";

const DashBoard = () => {
  const { boardValue, selectedBoardIndex } = useContext(UserBoardsContext);
  return (
    <>
      <SideNav />
      <Box width="100%" display="flex" flexDirection="column">
        <AlertDialog />
        <TypeColorBox
          width="100%"
          p={0.1}
          boardType={boardValue[selectedBoardIndex].boardType}
        />
        <DashboardTitle />
        <DashboardCardContainer />
      </Box>
    </>
  );
};
export default DashBoard;
