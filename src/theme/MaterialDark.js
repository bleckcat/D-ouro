const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#f5f5f5",
    },
    background: {
      darkerPaper: "#303030",
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
};
export default darkTheme;
