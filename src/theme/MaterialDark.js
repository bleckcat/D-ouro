const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#f5f5f5",
      suportCard: ["#8BBBBB", "#BBD9D7", "#E4EEEF"],
      resistenceCard: ["#BB8B8B", "#D9BBBB", "#EFE4E4"],
      consolidatedCard: "#AAAAFF",
      suportColor: "#23a6d5",
      resisteColor: "#d52323",
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
