import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Section, Button, InputField, Notification } from "../../components";
import * as S from "./Register.style";

function registerUser(data, setError, setType, error) {
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
        setType("error");
      } else {
        setType("");
        error = false;
      }
      return res.json();
    })
    .then((data) => {
      if (error) {
        setError(data.msg);
      } else {
        setError(data.msg);
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function Register() {
  const [data, setData] = useState({ email: "", password: "" });
  const history = useHistory();
  const [error, setError] = useState();
  const [type, setType] = useState();

  return (
    <Section>
      {error && <Notification type={type}>{error}</Notification>}
      <h2>Register</h2>
      <S.FormBox>
        <S.FormTitle>Enter Registration details</S.FormTitle>

        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            registerUser(data, setError, setType, history);
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
