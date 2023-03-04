import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Space, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

interface Spaceship {
  name: string;
  model: string;
  manufacturer: string;
  url: string;
  pilots: string[];
}

const { Meta } = Card;

const Spaceships: React.FC = () => {
  const [spaceships, setSpaceships] = useState<Spaceship[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships")
      .then((response) => {
        console.log(response.data.results);
        setSpaceships(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const handleClick = (id: string) => {
    navigate(`/spaceship/${id}`, { state: { id } });
  };
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {spaceships.map((ship: Spaceship) => {
          const spaceshipUrl = ship.url;
          let index = spaceshipUrl
            .substr(0, spaceshipUrl.length - 1)
            .lastIndexOf("/");
          let spaceShipId = spaceshipUrl.substring(
            index + 1,
            spaceshipUrl.length - 1
          );

          return (
            <Row gutter={16}>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                  onClick={() => handleClick(spaceShipId)}
                >
                  <Meta title={ship.name} description={ship.model} />
                </Card>
              </Col>
            </Row>
          );
        })}
      </Space>
    </div>
  );
};

export default Spaceships;
