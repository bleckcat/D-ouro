import { Suspense, useContext } from "react";
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

function App() {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const choosenTheme = createTheme(theme ? darkTheme : lightTheme, [ptBR]);
  
  return (
    <Suspense fallback="loading">
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={choosenTheme}>
          <ThemeProvider theme={choosenTheme}>
            <CssBaseline />
            <DashBoard />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Suspense>
  );
}

export default App;
