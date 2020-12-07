import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0 1em;
  /* font-size: 1.2em; */
  border: none;
  background: #ccc;
  height: ${(props) => props.theme.standard.height};
  border-radius: 5px;
  color: ${(props) => props.theme.secondary.color};
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${(props) => props.theme.secondary.focus.background};
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0 1em;
  /* font-size: 1.2em; */
  height: ${(props) => props.theme.standard.height};
  color: #111;
  border: none;
  background: #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  text-transform: capitalize;

  &:focus {
    border: 1px solid ${(props) => props.theme.primary.focus.background};
    outline: none;
  }
`;

export const Label = styled.label`
  &:not(:last-child) {
    margin-right: 15px;
  }
  font-size: 1.2em;
`;
