import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pilots from "./components/Pilots";
import Spaceships from "./components/Spaceships";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Spaceships</Link>
              </li>
              <li>
                <Link to="/pilot/:id">Pilots</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/pilot/:id" element={<Pilots />}></Route>{" "}
            <Route path="/" element={<Spaceships />}></Route>{" "}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
