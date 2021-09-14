export const setTypeColor = (props) => {
  const { boardType } = props;
  const boardColorType = boardType === 0 ? "suportColor" : "resisteColor";
  return props.theme.palette.primary?.[boardColorType];
};

export const setCardColor = (props) => {
  const { cardIndex, boardType } = props;
  const boardColorType = boardType === 0 ? "suportCard" : "resistenceCard";
  return props.theme.palette.primary?.[boardColorType][cardIndex];
};
