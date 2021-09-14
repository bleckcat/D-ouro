import { ColoredStop } from "./style";

export const RangeChartGradient = ({ cardIndex, boardType }) => {
  return (
    <linearGradient
      id={`cardRangeGradient-${cardIndex}`}
      x1="0"
      y1="0"
      x2="0"
      y2="1"
    >
      <ColoredStop
        cardIndex={cardIndex}
        boardType={boardType}
        offset="0%"
        stopOpacity={1}
      />
      <ColoredStop
        cardIndex={cardIndex}
        boardType={boardType}
        offset="100%"
        stopOpacity={0}
      />
    </linearGradient>
  );
};
