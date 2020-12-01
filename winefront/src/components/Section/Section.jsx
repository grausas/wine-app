import React from "react";
import * as S from "./Section.style";

function Section({ children, fullWidth, background }) {
  return (
    <S.Section background={background}>
      {!fullWidth && <S.Container>{children}</S.Container>}
      {fullWidth && children}
    </S.Section>
  );
}

export default Section;
