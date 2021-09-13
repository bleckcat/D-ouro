import { Box, FormGroup, Paper, Tab, Tabs } from "@material-ui/core";
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
