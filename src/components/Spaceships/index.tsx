import React, { useState, useEffect } from "react";
import { Card, Space, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import request from "../../util/request";
import { getIdFromUrl } from "../../util/getId";
export interface ISpaceship {
  name: string;
  model: string;
  manufacturer: string;
  url: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  crew: string;
  hyperdrive_rating: string;
  length: string;
  passengers: string;
  max_atmosphering_speed: string;
  starship_class: string;
  pilots: string[];
}

const { Meta } = Card;

const Spaceships: React.FC = () => {
  const [spaceships, setSpaceships] = useState<ISpaceship[]>([]);
  let navigate = useNavigate();

  useEffect(() => {
    request({
      method: "get",
      url: "/starships",
    }).then((resp: { results: React.SetStateAction<ISpaceship[]> }) => {
      setSpaceships(resp.results);
    });
  }, []);
  const handleClick = (id: string) => {
    navigate(`/${id}`, { state: { id } });
  };
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {spaceships?.map((ship: ISpaceship) => {
          const id = getIdFromUrl(ship.url);
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
                  onClick={() => handleClick(id)}
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
