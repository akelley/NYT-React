import React from "react";
import "../styles/Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div style={{ height: 125 }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
