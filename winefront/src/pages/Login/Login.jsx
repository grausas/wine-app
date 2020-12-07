import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Section, Button, InputField, Notification } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Login.style";

function signUser(data, auth, setError, setType, history, error) {
  fetch("http://localhost:8080/login", {
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
        error = false;
        setType("error");
      }
      return res.json();
    })
    .then((data) => {
      if (error) {
        setError(data.msg || "Error!");
      } else {
        auth.setToken(data.token);
        history.push("/winetypes");
      }
    })
    .catch((err) => {
      setError(err.message);
      setType("error");
    });
}

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [error, setError] = useState();
  const [type, setType] = useState();

  return (
    <Section>
      {error && <Notification type={type}>{error}</Notification>}
      <h2>Login</h2>
      <S.FormBox>
        <S.FormTitle>Enter Login Details</S.FormTitle>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
            signUser(data, auth, setError, setType, history);
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
              type="password"
              placeholder="Password"
              handleChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
          </S.InputWrapper>

          <Button type="submit">Login</Button>
        </S.Form>
      </S.FormBox>
    </Section>
  );
}

export default Login;
