import React from "react";
import { Section } from "../";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import logoImg from "../../assets/wine.svg";

function Header({ isLoggedIn, logOut }) {
  return (
    <Section>
      <S.Header>
        <Link to="/">
          <S.Logo src={logoImg} alt="Logo" />
        </Link>
        <S.Actions>
          {isLoggedIn && (
            <>
              <S.StyledLink to="/">Home</S.StyledLink>
              <S.StyledLink to="/winetypes">Wine Types</S.StyledLink>
              <S.StyledLink to="/addwinetypes">Add Wine</S.StyledLink>
              <S.StyledLink onClick={logOut} to="/login">
                Logout
              </S.StyledLink>
            </>
          )}
          {!isLoggedIn && (
            <>
              <S.StyledLink to="/register">Register</S.StyledLink>
              <S.StyledLink to="/login">Login</S.StyledLink>
            </>
          )}
        </S.Actions>
      </S.Header>
    </Section>
  );
}

export default Header;
