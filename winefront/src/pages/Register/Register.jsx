import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Section, Button, InputField } from "../../components";
import * as S from "./Register.style";

function registerUser(data, setNotification, history) {
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })

    .catch((err) => console.log(err));
}

function Register() {
  const [data, setData] = useState({ email: "", password: "" });
  const history = useHistory();

  return (
    <Section>
      <h2>Register</h2>
      <S.FormBox>
        <S.FormTitle>Enter Registration details</S.FormTitle>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser(data, history);
          }}
        >
          <S.InputWrapper>
            <InputField
              labelText="Email"
              type="email"
              placeholder="Email"
              handleChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <InputField
              labelText="Password"
              type="text"
              placeholder="Password"
              handleChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
          </S.InputWrapper>
          <Button type="submit">Register</Button>
        </S.Form>
      </S.FormBox>
    </Section>
  );
}

export default Register;
