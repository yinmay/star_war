import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Breadcrumbs from "./components/Breadcrumbs";
import Pilot from "./components/Pilot";
import Spaceships from "./components/Spaceships";
import Spaceship from "./components/Spaceship";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Breadcrumbs />
          <Routes>
            <Route path="/:id/:pilotId" element={<Pilot />}></Route>
            <Route path="/:id" element={<Spaceship />}></Route>
            <Route path="/" element={<Spaceships />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
