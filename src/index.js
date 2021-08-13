import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';

import './i18n';
import { UserBoardProvider } from "./providers/userBoards";

ReactDOM.render(
  <UserBoardProvider>
    <App />
  </UserBoardProvider>,
  document.getElementById("root")
);