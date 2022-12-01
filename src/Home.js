import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  console.log(location, window.location);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>HOST - {window?.location?.host}</h1>
      <h1>SUBDOMAIN - {window.location.host.split(".")[0]}</h1>
    </div>
  );
};

export default Home;
