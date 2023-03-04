import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import { Breadcrumb } from "antd";

import Pilot from "./components/Pilot";
import Spaceships from "./components/Spaceships";
import Spaceship from "./components/Spaceship";

function App() {
  // const location = useLocation();
  let params = useParams();

  console.log(params);
  return (
    <div className="App">
      <Router>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Spaceships</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/spaceship/:id">Spaceship</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/pilot/:pilotId">Pilot</Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Routes>
            <Route path="/pilot/:pilotId" element={<Pilot />}></Route>
            <Route path="/spaceship/:id" element={<Spaceship />}></Route>
            <Route path="/" element={<Spaceships />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
