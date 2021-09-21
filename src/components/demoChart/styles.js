import styled from "styled-components";

export const StyledSVG = styled.svg`
  -webkit-filter: drop-shadow(
    0px 0px 3px
      ${(props) => (props.color === "primary" ? "#37efbac2" : "#f50057c2")}
  );
  filter: drop-shadow(
    0px 0px 3px
      ${(props) => (props.color === "primary" ? "#37efbac2" : "#f50057c2")}
  );
`;
