import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, className }) {
  return (
    <S.Button className={className} onClick={handleClick} color={color}>
      {children}
    </S.Button>
  );
}

export default Button;
