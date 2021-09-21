import {
  Box,
  Button,
  FormGroup,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
} from "@material-ui/core";
import { ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { setCardColor } from "../helpers/styleHelpers";

export const SideTabs = styled(Tabs)`
  .MuiTab-root {
    min-width: 0px;
  }
`;

export const GlowingTab = styled(Tab)``;

export const DarkerPaper = styled(Paper)`
  background: ${(props) => props.theme.palette.background.darkerPaper};
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  transform: translateX(-32px);
`;

export const CardColorBox = styled(Box)`
  background: ${(props) => setCardColor(props)};
`;

export const CustomFormGroup = styled(FormGroup)`
  .MuiCheckbox-root {
    padding: 4px;
  }
`;

export const ColoredCardTextField = styled(TextField)`
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => setCardColor(props)};
  }
  & .MuiFormLabel-filled.Mui-focused {
    color: ${(props) => setCardColor(props)};
  }
`;

export const ColoredCardIconButton = styled(IconButton)`
  &.MuiIconButton-colorPrimary {
    color: ${(props) => setCardColor(props)} !important;
  }
`;

export const DemoGraphButton = styled(Button)`
  min-width: 116px;
  justify-content: flex-start;
  .MuiSvgIcon-root {
    transform: ${(props) =>
      props.color === "primary" ? "scaleX(1)" : "scaleX(-1)"};
  }
`;
