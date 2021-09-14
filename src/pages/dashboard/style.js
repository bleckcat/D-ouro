import { Box } from "@material-ui/core";
import styled from "styled-components";
import { setTypeColor } from "../../helpers/styleHelpers";

export const TypeColorBox = styled(Box)`
  background: ${(props) => setTypeColor(props)};
`;
