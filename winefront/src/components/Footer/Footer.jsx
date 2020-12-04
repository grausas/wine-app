import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/wine.svg";
import * as S from "./Footer.style";

function Footer() {
  return (
    <S.StyledLine>
      <S.Footer>
        <Link to="/">
          <S.Logo src={logoImg} alt="Logo" />
        </Link>
        <span>&copy; All Rights Reserved</span>
      </S.Footer>
    </S.StyledLine>
  );
}

export default Footer;
