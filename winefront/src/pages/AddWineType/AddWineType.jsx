import React from "react";
import { Section, InputField } from "../../components";
import * as S from "./AddWineType.style";

function AddWineType() {
  return (
    <Section>
      <S.Title>Add wine type</S.Title>
      <S.Form>
        <S.InputWrapper>
          <InputField
            labelText="Wine Name"
            type="text"
            placeholder="Wine name"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputField labelText="Region" type="text" placeholder="Region" />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputField
            labelText="Wine Type"
            type="text"
            placeholder="Wine type"
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <InputField labelText="Year" type="text" placeholder="Year" />
        </S.InputWrapper>
      </S.Form>
    </Section>
  );
}

export default AddWineType;
