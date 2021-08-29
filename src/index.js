import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n";
import { UserBoardProvider } from "./providers/userBoards";
import { ThemeProvider } from "./providers/theme";

ReactDOM.render(
  <UserBoardProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserBoardProvider>,
  document.getElementById("root")
);
