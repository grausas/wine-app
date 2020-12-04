import React, { useState, useContext, useEffect } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./AddWineQuantity.style";
import { AuthContext } from "../../context/AuthContext";

function addQuantity(quantity, auth) {
  fetch("http://localhost:8080/add-wine", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify(quantity),
  });
}

function AddWineQuantity() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/view-names`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(
          data.map((item) => {
            return { id: item.id, value: item.id, name: item.winename };
          })
        );
      });
  }, [auth.token]);

  return (
    <Section>
      <h2>Add wine quantity</h2>
      <S.FormBox>
        <S.FormTitle>Add wine quantity</S.FormTitle>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            addQuantity(quantity, auth);
          }}
        >
          <S.TwoInputsWrapper>
            <S.InputWrapper>
              <InputField
                labelText="Wine Name"
                type="dropdown"
                options={data}
                handleChange={(e) =>
                  setQuantity({ ...quantity, wineId: e.target.value })
                }
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <InputField
                labelText="Add Quantity"
                type="number"
                placeholder="Quantity"
                handleChange={(e) =>
                  setQuantity({ ...quantity, changeQty: e.target.value })
                }
              />
            </S.InputWrapper>
          </S.TwoInputsWrapper>
          <Button>Add Wine</Button>
        </S.Form>
      </S.FormBox>
    </Section>
  );
}

export default AddWineQuantity;
