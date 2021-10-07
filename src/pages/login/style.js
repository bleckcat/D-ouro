import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginImage = styled.div`
  height: 75px;
  margin: 4px;
  background-image: url("${process.env.PUBLIC_URL}/images/logo_no_bg_full.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.palette.primary.main};
  width: 100%;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
