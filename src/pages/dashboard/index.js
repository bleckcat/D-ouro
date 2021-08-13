import { Box } from "@material-ui/core";
import React, { useContext, useState } from "react";
import SideNav from "../../components/sideNav";
import DashboardInputs from "../../components/dashboardInputs";
import DashboardTitle from "../../components/dashboardTitle";
import DashboardCardContainer from "../../components/dashboardCardContainer";
import { UserBoardsContext } from "../../providers/userBoards";

const DashBoard = () => {
  const { boardValue, setBoardValue } = useContext(UserBoardsContext);
  const [selectedBoard, setSelectedBoard] = useState(boardValue[0]);

  return (
    <>
      <SideNav
        boardValue={boardValue}
        setBoardValue={setBoardValue}
        selectedBoard={selectedBoard}
        setSelectedBoard={setSelectedBoard}
      />
      <Box width="100%" display="block">
        <DashboardTitle />
        <DashboardInputs />
        <DashboardCardContainer
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
        />
      </Box>
    </>
  );
};
export default DashBoard;
