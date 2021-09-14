import { Star } from "@material-ui/icons";
import { VectorGroup } from "./style";

export const renderLabel = (props, cardIndex, boardType) => {
  const { x, y, value } = props;
  if (props.index !== 1) {
    return null;
  }
  return (
    <>
      <svg x={x} y={y - 7} width="80" height="14" viewBox="0 0 80 14">
        <VectorGroup cardIndex={cardIndex} boardType={boardType}>
          <polygon points="0,7 7,0 7,14" />
          <rect x={7} width={50} height="14" />
          <text x={7} y={10} fill="#424242" fontSize={9}>
            {value[1]}
          </text>
          <Star x={-9} style={{ fill: "#424242" }} />
        </VectorGroup>
      </svg>
    </>
  );
};
