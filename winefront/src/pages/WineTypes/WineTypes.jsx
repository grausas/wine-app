import React, { useEffect, useContext, useState } from "react";
import * as S from "./WineTypes.style";
import { Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function WineTypes() {
  const auth = useContext(AuthContext);
  const [wineType, setWineType] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/view-wine-types", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setWineType(data));
  }, [auth.token]);
  return (
    <Section>
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
                </tr>
              ))}
          </tbody>
        </S.Table>
      </S.TableBox>
    </Section>
  );
}

export default WineTypes;
