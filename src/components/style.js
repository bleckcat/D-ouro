import { Paper, Tab, Tabs, withTheme } from "@material-ui/core";
import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

export const SideTabs = styled(Tabs)`
  .MuiTab-root {
    min-width: 0px;
  }
`;

export const GlowingTab = styled(Tab)``;

export const DarkerPaper = styled(withTheme(Paper))((props) => ({
  backgroundColor: props.theme.palette.background.darkerPaper,
}));

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  transform: translateX(-32px);
`;
