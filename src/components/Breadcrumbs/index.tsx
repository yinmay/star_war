import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const Breadcrumbs = ({}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);
  console.log(pathnames);
  return (
    <Breadcrumb>
      <Link to="/">Spaceships</Link>
      {pathnames && <Link to={pathname}>{pathname}</Link>}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
