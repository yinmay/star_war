import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Breadcrumbs from "./components/Breadcrumbs";
import Pilot from "./components/Pilot";
import Spaceships from "./components/Spaceships";
import Spaceship from "./components/Spaceship";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Router>
            <div>
              <Breadcrumbs />

              <div className="site-layout-content">
                <Routes>
                  <Route path="/:id/:pilotId" element={<Pilot />}></Route>
                  <Route path="/:id" element={<Spaceship />}></Route>
                  <Route path="/" element={<Spaceships />}></Route>
                </Routes>
              </div>
            </div>
          </Router>
        </div>
      </Content>
    </div>
  );
}

export default App;
