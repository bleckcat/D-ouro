const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#37EFBA",
      suportCard: ["#8fd8ff", "#4ba5d6", "#1ea3eb"],
      resistenceCard: ["#ff8f8f", "#d64b4b", "#ff4545"],
      consolidatedCard: "#AAAAFF",
      suportColor: "#23a6d5",
      resisteColor: "#d52323",
    },
    background: {
      darkerPaper: "#33333D",
      paper: "#373740",
      default: "#33333D",
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
