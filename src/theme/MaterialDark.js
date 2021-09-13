const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#f5f5f5",
      suportCard: ["#8BBBBB", "#BBD9D7", "#E4EEEF"],
      resistenceCard: ["#BB8B8B", "#D9BBBB", "#EFE4E4"],
      consolidatedCard: "#AAAAFF",
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
