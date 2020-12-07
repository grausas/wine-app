import styled from "styled-components";

export const NotificationText = styled.h3`
  color: ${(props) => (props.type === "error" ? "red" : "green")};
  background-color: #292f38;
  text-align: center;
  margin: 0;
  border-radius: 10px;
  padding: 1em 0.5em;
`;
