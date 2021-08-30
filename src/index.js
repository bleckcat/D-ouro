import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";
import { UserBoardProvider } from "./providers/userBoards";
import { ThemeProvider } from "./providers/theme";
import { TransitonProvider } from "./providers/transitionController";

ReactDOM.render(
  <UserBoardProvider>
    <ThemeProvider>
      <TransitonProvider>
        <App />
      </TransitonProvider>
    </ThemeProvider>
  </UserBoardProvider>,
  document.getElementById("root")
);
