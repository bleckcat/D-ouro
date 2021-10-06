import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";
import { UserBoardProvider } from "./providers/userBoards";
import { ThemeProvider } from "./providers/theme";
import { TransitonProvider } from "./providers/transitionController";
import { ModalProvider } from "./providers/dialogModal";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <UserBoardProvider>
      <ThemeProvider>
        <TransitonProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </TransitonProvider>
      </ThemeProvider>
    </UserBoardProvider>
  </Router>,
  document.getElementById("root")
);
