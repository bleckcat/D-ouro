import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";
import { UserBoardProvider } from "./providers/userBoards";
import { ThemeProvider } from "./providers/theme";
import { TransitonProvider } from "./providers/transitionController";
import { ModalProvider } from "./providers/dialogModal";

ReactDOM.render(
  <UserBoardProvider>
    <ThemeProvider>
      <TransitonProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </TransitonProvider>
    </ThemeProvider>
  </UserBoardProvider>,
  document.getElementById("root")
);
