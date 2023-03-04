import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Descriptions } from "antd";
import request from "../../util/request";

interface IPilot {
  name: string;
  hair_color: string;
  height: string;
  skin_color: string;
  birth_year: string;
  gender: string;
}

const Pilot: React.FC = () => {
  const location = useLocation();

  const [pilot, setPilot] = useState<IPilot>({
    name: "",
    hair_color: "",
    height: "",
    skin_color: "",
    birth_year: "",
    gender: "",
  });

  useEffect(() => {
    request({
      method: "get",
      url: `/people/${location.state.pilotId}`,
    }).then((resp: React.SetStateAction<IPilot>) => {
      console.log(resp);
      setPilot(resp);
    });
  }, []);

  return (
    <div>
      <Descriptions title="Pilot Info" bordered>
        <Descriptions.Item label="Name">{pilot.name}</Descriptions.Item>
        <Descriptions.Item label="Hair Color">
          {pilot.hair_color}
        </Descriptions.Item>
        <Descriptions.Item label="Height">{pilot.height}</Descriptions.Item>
        <Descriptions.Item label="Skin Color">
          {pilot.skin_color}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">{pilot.gender}</Descriptions.Item>
        <Descriptions.Item label="Birth Year">
          {pilot.birth_year}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Pilot;
