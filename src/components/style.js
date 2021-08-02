import { Paper, Tab, Tabs } from "@material-ui/core";
import styled from "styled-components";

export const SideTabs = styled(Tabs)`
  .MuiTab-root {
    min-width: 0px;
  }
`;

export const GlowingTab = styled(Tab)``;

export const DarkerPaper = styled(Paper)`
  background-color: #303030;
`;
