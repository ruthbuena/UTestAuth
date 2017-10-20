import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">HTML</Link>
    </li>
    <li className={window.location.pathname === "/CSS" ? "active" : ""}>
      <Link to="/CSS">CSS</Link>
    </li>
    <li className={window.location.pathname === "/JavaScript" ? "active" : ""}>
      <Link to="/JavaScript">JavaScript</Link>
    </li>
    <li className={window.location.pathname === "/Node" ? "active" : ""}>
      <Link to="/Node">Node</Link>
    </li>
    <li
      className={window.location.pathname === "/ReactJs" ? "active" : ""}>
      <Link to="/ReactJs">React</Link>
    </li>
    <li
      className={window.location.pathname === "/Mongo" ? "active" : ""}>
      <Link to="/Mongo">Mongo</Link>
    </li>
    <li
      className={window.location.pathname === "/SQL" ? "active" : ""}>
      <Link to="/SQL">SQL</Link>
    </li>
    <li
      className={window.location.pathname === "/ES" ? "active" : ""}>
      <Link to="/ES">ES6</Link>
    </li>
  </ul>;

export default Navpills;
