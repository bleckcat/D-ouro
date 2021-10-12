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
  const { openModal, closeModal } = useContext(ModalContext);
  const { changeTheme } = useContext(ThemeContext);

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
