import React, { useEffect, useContext, useState } from "react";
import * as S from "./WineTypes.style";
import { Section, Notification } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function WineTypes() {
  const auth = useContext(AuthContext);
  const [wineType, setWineType] = useState();
  const [error, setError] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/view-wine-types", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setWineType(data));
  }, [auth.token]);

  function deleteButton(e, setError, setType) {
    const wineId = Number(e.target.value);
    const wineName = e.target.name;
    fetch(`http://localhost:8080/delete/${wineId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        setError("An error occured deleting the item");
        setType("error");
        throw response;
      } else {
        setError(`${wineName} was successfully deleted`);
        setType("");
        setWineType(wineType.filter((item) => wineId !== item.id));
      }
    });
  }
  return (
    <Section>
      {error && <Notification type={type}>{error}</Notification>}
      <S.Title>Wine Types</S.Title>
      <S.TableBox>
        <S.TableTitle>All wine types</S.TableTitle>
        <S.Table>
          <thead>
            <tr>
              <th>Wine Name</th>
              <th>Region</th>
              <th>Wine Type</th>
              <th>Year</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wineType &&
              wineType.map((wine) => (
                <tr key={wine.id}>
                  <td>{wine.winename}</td>
                  <td>{wine.region}</td>
                  <td>{wine.winetype}</td>
                  <td>{wine.year}</td>
                  <td>
                    <S.DeleteButton
                      className="far fa-trash-alt"
                      value={wine.id}
                      name={wine.winename}
                      handleClick={(e) => deleteButton(e, setError, setType)}
                    ></S.DeleteButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </S.Table>
      </S.TableBox>
    </Section>
  );
}

export default WineTypes;
