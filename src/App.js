import { Suspense, useState } from "react";
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

function App() {
  const { t, i18n } = useTranslation();

  const theme = createTheme(darkTheme, [ptBR]);

  return (
    <Suspense fallback="loading">
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <DashBoard />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Suspense>
  );
}

export default App;
