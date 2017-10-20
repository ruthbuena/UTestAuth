import React from "react";
import { Link } from "react-router-dom";

const Channels = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/BostonCode" ? "active" : ""}>
      <Link to="/BostonCode">BostonCode</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Channel2</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Channel3</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Channel4</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Channel5</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Channel6</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Channel7</Link>
    </li>
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Channel8</Link>
    </li>
  </ul>;

export default Channels;
