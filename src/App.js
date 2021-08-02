import { Suspense } from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useTranslation } from "react-i18next";
import DashBoard from "./pages/dashboard";

function App() {
  const { t, i18n } = useTranslation();
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#37EFBA",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            WebkitFontSmoothing: "auto",
          },
        },
      },
    },
  });

  return (
    <Suspense fallback="loading">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <DashBoard />
      </MuiThemeProvider>
    </Suspense>
  );
}

export default App;
