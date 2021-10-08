import {
  Avatar,
  Box,
  Button,
  IconButton,
  Tab,
  Tooltip,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import {
  Add,
  Brightness4,
  Dashboard,
  ExitToApp,
  Person,
  SquareFoot,
  ViewCarousel,
} from "@material-ui/icons";
import { LogoImage, NavPaper, SideTabs } from "./style";
import { UserBoardsContext } from "../providers/userBoards";
import { ThemeContext } from "../providers/theme";
import { TransitionContext } from "../providers/transitionController";
import { Link } from "react-router-dom";
import SideNavButtons from "./buttons/sideNavButtons";
import { ModalContext } from "../providers/dialogModal";
import SideNavLinks from "./buttons/sideNavLinks";

const SideNav = (props) => {
  const { setLoggedIn } = props;
  const { boardValue, handleAddNewBoard, setSelectedBoardIndex } =
    useContext(UserBoardsContext);
  const { handleCardsReload } = useContext(TransitionContext);
  const { changeTheme } = useContext(ThemeContext);
  const { openModal, closeModal } = useContext(ModalContext);
  const [tabIndex, setTabIndex] = useState(0);

  const SecondaryButton = () => {
    return (
      <Link to="/login">
        <Button
          onClick={() => {
            setLoggedIn(false);
            closeModal();
          }}
          color="secondary"
        >
          Sair
        </Button>
      </Link>
    );
  };

  return (
    <NavPaper square elevation={2}>
      <LogoImage />
      <SideNavLinks linkTo="profile" title="Perfil">
        <Person fontSize="small" />
      </SideNavLinks>
      <SideNavLinks linkTo="" title="DashBoard">
        <ViewCarousel fontSize="small" />
      </SideNavLinks>
      <SideNavLinks linkTo="tradingView" title="Trading View">
        <SquareFoot fontSize="small" />
      </SideNavLinks>
      {/* <SideTabs
        orientation="vertical"
        value={tabIndex}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        {boardValue.map((item, index) => {
          return (
            <Tooltip title={item.title} arrow placement="right">
              <Tab
                onClick={() => {
                  setTabIndex(index);
                  handleCardsReload();
                  setTimeout(() => {
                    setSelectedBoardIndex(index);
                  }, 400);
                }}
                icon={<Dashboard />}
              />
            </Tooltip>
          );
        })}
      </SideTabs>
      <SideNavButtons
        title="Adicionar estudo"
        onClick={() => {
          handleAddNewBoard();
          setTabIndex(boardValue.length);
          handleCardsReload();
          setTimeout(() => {
            setSelectedBoardIndex(boardValue.length);
          }, 400);
        }}
        disabled={boardValue.length === 5}
      >
        <Add />
      </SideNavButtons> */}
      {/* Botão de mudar o tema */}
      {/* <SideNavButtons title="Mudar tema" onClick={changeTheme}>
        <Brightness4 fontSize="small" />
      </SideNavButtons> */}
      <SideNavButtons
        title="Sair"
        onClick={() =>
          openModal(
            "Deseja mesmo realizar o logout?",
            "Logout",
            <SecondaryButton />
          )
        }
        logOut
      >
        <ExitToApp fontSize="small" />
      </SideNavButtons>
    </NavPaper>
  );
};
export default SideNav;
