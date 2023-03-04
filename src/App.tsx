import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";
// import { Breadcrumb } from "antd";
// import useBreadcrumbs from "use-react-router-breadcrumbs";
import Breadcrumbs from "./components/Breadcrumbs";
import Pilot from "./components/Pilot";
import Spaceships from "./components/Spaceships";
import Spaceship from "./components/Spaceship";

function App() {
  let params = useParams();
  // const breadcrumbs = useBreadcrumbs();

  console.log(params);
  return (
    <div className="App">
      <Router>
        {/* {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <>
          <NavLink key={match.pathname} to={match.pathname}>
            {breadcrumb}
          </NavLink>
          {index !== breadcrumbs.length - 1 && "/"}
        </>
      ))} */}
        <div>
          {/* <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Spaceships</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/spaceship/:id">Spaceship</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/pilot/:pilotId">Pilot</Link>
            </Breadcrumb.Item>
          </Breadcrumb> */}
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
