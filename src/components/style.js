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
  & .MuiInputLabel-outlined.Mui-focused {
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

export const NavPaper = styled(Paper)`
  padding: 4px;
  display: flex;
  flex-direction: column;
`;

export const LogoImage = styled.div`
  height: 32px;
  margin: 4px;
  background-image: url("${process.env.PUBLIC_URL}/images/logo_ico.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
