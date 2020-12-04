import styled from "styled-components";
import { Button } from "../";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111;
  &:hover {
    text-decoration: underline;
    color: #eee;
  }
  &:not(last-child) {
    margin-left: 20px;
  }
`;

export const LogoutButton = styled(Button)`
  margin-left: 30px;
`;

export const StyledLine = styled.div`
  border-bottom: 2px solid #292f38;
`;
