import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Card, Space, Descriptions } from "antd";
import { getIdFromUrl } from "../../util/getId";
import request from "../../util/request";
import { ISpaceship } from "../Spaceships/index";

const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
};

const Spaceship: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const [spaceship, setSpaceship] = useState<ISpaceship>({
    name: "",
    model: "",
    manufacturer: "",
    url: "",
    pilots: [],
    MGLT: "",
    cargo_capacity: "",
    consumables: "",
    cost_in_credits: "",
    crew: "",
    hyperdrive_rating: "",
    length: "",
    passengers: "",
    max_atmosphering_speed: "",
    starship_class: "",
  });
  let navigate = useNavigate();
  console.log(spaceship);
  useEffect(() => {
    request({
      method: "get",
      url: `/starships/${params.id || location.state.id}`,
    }).then((resp: React.SetStateAction<ISpaceship>) => {
      setSpaceship(resp);
    });
  }, []);
  const handleClick = (pilotId: string) => {
    navigate(`/${location.state.id}/${pilotId}`, { state: { pilotId } });
  };
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Descriptions title="Spaceship Info" bordered>
          <Descriptions.Item label="Name">{spaceship.name}</Descriptions.Item>
          <Descriptions.Item label="Model">{spaceship.model}</Descriptions.Item>
          <Descriptions.Item label="MGLT">{spaceship.MGLT}</Descriptions.Item>
          <Descriptions.Item label="Cargo Capacity">
            {spaceship.cargo_capacity}
          </Descriptions.Item>
          <Descriptions.Item label="consumables">
            {spaceship.consumables}
          </Descriptions.Item>
          <Descriptions.Item label="length">
            {spaceship.length}
          </Descriptions.Item>
          <Descriptions.Item label="passengers">
            {spaceship.passengers}
          </Descriptions.Item>
          <Descriptions.Item label="starship_class">
            {spaceship.starship_class}
          </Descriptions.Item>
          <Descriptions.Item label="max_atmosphering_speed">
            {spaceship.max_atmosphering_speed}
          </Descriptions.Item>
        </Descriptions>

        {spaceship.pilots.map((pilot) => {
          const id = getIdFromUrl(pilot);
          console.log(pilot);
          return (
            <Card onClick={() => handleClick(id)} style={gridStyle}>
              {pilot}
            </Card>
          );
        })}
      </Space>
    </div>
  );
};

export default Spaceship;
