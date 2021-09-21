import styled from "styled-components";
import { setCardColor } from "../../../helpers/styleHelpers";

export const ColoredStop = styled.stop`
  stop-color: ${(props) => setCardColor(props)};
`;

export const DemoColoredStop = styled.stop`
  stop-color: ${(props) => (props.color === "primary" ? "#37EFBA" : "#f50057")};
`;
