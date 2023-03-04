import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);
  console.log(pathnames);
  return (
    <div>
      <Breadcrumb>
        <Link to="/">Spaceships</Link>
      </Breadcrumb>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Breadcrumb>{path}</Breadcrumb>
        ) : (
          <Breadcrumb>
            <Link to={routeTo}>{path}</Link>
          </Breadcrumb>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
