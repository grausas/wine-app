import React, { useState, useContext, useEffect } from "react";
import { Section, InputField, Button, Notification } from "../../components";
import * as S from "./AddWineQuantity.style";
import { AuthContext } from "../../context/AuthContext";

function addQuantity(quantity, auth, setError, setType, error) {
  fetch("http://localhost:8080/add-wine", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify(quantity),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
      } else {
        error = false;
      }
      return res.json();
    })
    .then((data) => {
      if (error) {
        setType("error");
        setError(data.msg);
      } else {
        setType("");
        setError(data.msg);
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function AddWineQuantity() {
  const auth = useContext(AuthContext);
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState();
  const [error, setError] = useState();
  const [type, setType] = useState();

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
      {error && <Notification type={type}>{error}</Notification>}
      <h2>Add wine quantity</h2>
      <S.FormBox>
        <S.FormTitle>Add wine quantity</S.FormTitle>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            addQuantity(quantity, auth, setError, setType);
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
