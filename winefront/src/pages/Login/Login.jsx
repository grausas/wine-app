import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Section, Button, InputField } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Login.style";

function signUser(data, auth, history) {
  fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        auth.setToken(data.token);
        history.push("/");
      } else {
        console.log("Error");
      }
    })
    .catch((err) => console.log(err));
}

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const auth = useContext(AuthContext);
  const history = useHistory();

  return (
    <Section>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUser(data, auth, history);
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
            handleChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </S.InputWrapper>

        <Button type="submit">Login</Button>
      </form>
    </Section>
  );
}

export default Login;
