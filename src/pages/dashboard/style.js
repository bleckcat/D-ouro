import { Box } from "@material-ui/core";
import styled from "styled-components";

export const TypeColorBox = styled(Box)`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background: linear-gradient(-45deg, #57ffd7, #69d7ff, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;
`;
