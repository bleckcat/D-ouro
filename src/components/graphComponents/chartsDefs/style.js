import styled from "styled-components";
import { setCardColor } from "../../../helpers/styleHelpers";

export const ColoredStop = styled.stop`
  stop-color: ${(props) => setCardColor(props)};
`;
