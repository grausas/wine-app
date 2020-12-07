import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, className, value, name }) {
  return (
    <S.Button
      className={className}
      onClick={handleClick}
      color={color}
      value={value}
      name={name}
    >
      {children}
    </S.Button>
  );
}

export default Button;
