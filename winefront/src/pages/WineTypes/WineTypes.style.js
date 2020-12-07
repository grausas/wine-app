import styled from "styled-components";
import { Button } from "../../components";

export const TableBox = styled.div`
  width: 100%;
  padding: 2em;
  background-color: #292f38;
  border-radius: 5px;
  margin: 3em 0 6em 0;
  box-sizing: border-box;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const TableTitle = styled.span`
  font-weight: 300;
  text-align: center;
  font-size: 1.3em;
  color: #ccc;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: #ccc;
  && tr,
  th {
    padding: 10px 20px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  td {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    text-transform: capitalize;
  }
`;

export const Title = styled.h2`
  font-weight: 300;
  text-align: center;
  font-size: 2em;
`;

export const DeleteButton = styled(Button)`
  background: none;
  padding: 0 1em;
  color: #ccc;
  &:hover {
    color: red;
    background: none;
  }
  &:focus {
    background: none;
  }
`;
