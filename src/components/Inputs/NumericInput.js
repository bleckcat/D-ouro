import NumberFormat from "react-number-format";
import { captalizeWord } from "../../helpers/stringHelpers";
import { ColoredCardTextField } from "../style";

const NumberFormatCustom = (props) => {
  const {
    boardType,
    cardIndex,
    index,
    lockedIndex,
    cardValue,
    keyName,
    changeCardValue,
    maxValue,
    ...other
  } = props;

  const withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value <= maxValue) return true;
    return false;
  };

  return (
    <NumberFormat
      {...other}
      allowNegative={false}
      variant="outlined"
      size="small"
      boardType={boardType}
      cardIndex={cardIndex}
      customInput={ColoredCardTextField}
      disabled={index > 2 && lockedIndex}
      value={cardValue.inputValues?.[keyName]}
      InputLabelProps={{ shrink: true }}
      label={captalizeWord(keyName)}
      thousandSeparator={true}
      isAllowed={withValueCap}
      onValueChange={(v) => {
        changeCardValue(keyName, parseFloat(v.value), cardIndex);
      }}
      fullWidth
    />
  );
};

export default NumberFormatCustom;
