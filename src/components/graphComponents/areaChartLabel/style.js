import styled from "styled-components";
import { setCardColor } from "../../../helpers/styleHelpers";

export const VectorGroup = styled.g`
  fill: ${(props) => setCardColor(props)};
`;
