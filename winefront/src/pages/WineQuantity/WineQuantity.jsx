import React, { useEffect, useContext, useState } from "react";
import * as S from "./WineQuantity.style";
import { Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";

function WineQuantity() {
  const auth = useContext(AuthContext);
  const [wineQuantity, setWineQuantity] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/view-wines", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setWineQuantity(data));
  }, [auth.token]);
  return (
    <Section>
      <S.Title>Wine Quantity</S.Title>
      <S.TableBox>
        <S.TableTitle>All wines</S.TableTitle>
        <S.Table>
          <thead>
            <tr>
              <th>Wine Name</th>
              <th>Region, Year</th>
              <th>Wine Type</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {wineQuantity &&
              wineQuantity.map((wine) => (
                <tr key={wine.id}>
                  <td>{wine.winename}</td>
                  <td>
                    {wine.region}, {wine.year}
                  </td>
                  <td>{wine.winetype}</td>
                  <td>{wine.total}</td>
                </tr>
              ))}
          </tbody>
        </S.Table>
      </S.TableBox>
    </Section>
  );
}

export default WineQuantity;
