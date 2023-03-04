import React, { useState, useEffect } from "react";
import axios from "axios";

interface Spaceship {
  name: string;
  model: string;
  manufacturer: string;
  pilots: string[];
}

export default function Spaceships() {
  const [spaceships, setSpaceships] = useState<Spaceship[]>([]);

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
  return <div>Spaceships</div>;
}
