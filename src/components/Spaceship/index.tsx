import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";
import { getIdFromUrl } from "../../util/getId";
import request from "../../util/request";
import { ISpaceship } from "../Spaceships/index";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const Spaceship: React.FC = () => {
  const location = useLocation();

  const [spaceship, setSpaceship] = useState<ISpaceship>({
    name: "",
    model: "",
    manufacturer: "",
    url: "",
    pilots: [],
  });
  let navigate = useNavigate();

  useEffect(() => {
    request({
      method: "get",
      url: `/starships/${location.state.id}`,
    }).then((resp: React.SetStateAction<ISpaceship>) => {
      setSpaceship(resp);
    });
  }, []);
  const handleClick = (id: string) => {
    navigate(`/pilot/${id}`, { state: { id } });
  };
  return (
    <div>
      <Card title={spaceship.name}>
        {spaceship.pilots.map((pilot) => {
          const id = getIdFromUrl(pilot);
          return (
            <Card.Grid onClick={() => handleClick(id)} style={gridStyle}>
              {pilot}
            </Card.Grid>
          );
        })}
      </Card>
    </div>
  );
};

export default Spaceship;
