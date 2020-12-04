import React, { useState, useContext } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./AddWineType.style";
import { AuthContext } from "../../context/AuthContext";

function addWine(data, auth) {
  fetch("http://localhost:8080/add-wine-type", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify(data),
  });
}

function AddWineType() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState({
    winename: "",
    region: "",
    winetype: "",
    year: "",
  });

  return (
    <Section>
      <h2>Add wine type</h2>
      <S.FormBox>
        <S.FormTitle>Add wine type</S.FormTitle>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            addWine(data, auth);
          }}
        >
          <S.InputWrapper>
            <InputField
              labelText="Wine Name"
              type="text"
              placeholder="Wine name"
              handleChange={(e) =>
                setData({ ...data, winename: e.target.value })
              }
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Region"
              type="text"
              placeholder="Region"
              handleChange={(e) => setData({ ...data, region: e.target.value })}
            />
          </S.InputWrapper>
          <S.TwoInputsWrapper>
            <S.InputWrapper>
              <InputField
                labelText="Wine Type"
                type="dropdown"
                placeholder="Wine type"
                options={[
                  { id: 0, name: "Select Wine Type" },
                  { id: 1, value: "White", name: "White" },
                  { id: 2, value: "Red", name: "Red" },
                  { id: 3, value: "Rose", name: "Rose" },
                  { id: 4, value: "Sparkling", name: "Sparkling" },
                ]}
                handleChange={(e) =>
                  setData({ ...data, winetype: e.target.value })
                }
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <InputField
                labelText="Year"
                type="number"
                placeholder="Year"
                handleChange={(e) => setData({ ...data, year: e.target.value })}
              />
            </S.InputWrapper>
          </S.TwoInputsWrapper>
          <Button>Add Wine</Button>
        </S.Form>
      </S.FormBox>
    </Section>
  );
}

export default AddWineType;
