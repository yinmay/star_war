import React from "react";
import { useLocation } from "react-router-dom";

const Spaceship: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return <div></div>;
};

export default Spaceship;
