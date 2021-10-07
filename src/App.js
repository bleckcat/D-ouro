import { Suspense, useContext, useState } from "react";
import {
  createTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTranslation } from "react-i18next";
import DashBoard from "./pages/dashboard";
import { ThemeProvider } from "styled-components";
import darkTheme from "./theme/MaterialDark";
import lightTheme from "./theme/MaterialLight";
import { ptBR } from "@material-ui/core/locale";
import { ThemeContext } from "./providers/theme";
import { Route, Switch } from "react-router-dom";
import SideNav from "./components/sideNav";
import Profile from "./pages/profile";
import Login from "./pages/login";
import AlertDialog from "./components/dialog";

function App() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const choosenTheme = createTheme(theme ? darkTheme : lightTheme, [ptBR]);
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Suspense fallback="loading">
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={choosenTheme}>
          <ThemeProvider theme={choosenTheme}>
            <CssBaseline />
            {loggedIn && <SideNav setLoggedIn={setLoggedIn} />}
            <Switch>
              <Route exact path="/">
                <DashBoard />
              </Route>
              <Route exact path="/login">
                <Login setLoggedIn={setLoggedIn} />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
            <AlertDialog />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Suspense>
  );
}

export default App;
