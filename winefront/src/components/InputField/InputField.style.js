import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  font-size: 1.2em;
  border: 1px solid ${(props) => props.theme.secondary.background};
  height: ${(props) => props.theme.standard.height};
  border-radius: 5px;
  box-sizing: border-box;
  color: #ccc;
  &:focus {
    border: 1px solid ${(props) => props.theme.secondary.focus.background};
    outline: none;
  }
`;

export const Label = styled.label`
  &:not(:last-child) {
    margin-right: 15px;
  }
  font-size: 1.2em;
`;
