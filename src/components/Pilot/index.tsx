import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "antd";
import request from "../../util/request";

interface IPilot {
  name: string;
  hair_color: string;
  height: string;
}

const Pilot: React.FC = () => {
  const location = useLocation();

  const [pilot, setPilot] = useState<IPilot>({
    name: "",
    hair_color: "",
    height: "",
  });

  useEffect(() => {
    request({
      method: "get",
      url: `/people/${location.state.id}`,
    }).then((resp: React.SetStateAction<IPilot>) => {
      console.log(resp);
      setPilot(resp);
    });
  }, []);

  return (
    <div>
      <Card title={pilot.name}></Card>
    </div>
  );
};

export default Pilot;
