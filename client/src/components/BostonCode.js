import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topics from './Topics';


const BostonCode = () =>
  <Router>
    <div>
      <Topics />
    </div>
  </Router>;

export default BostonCode;
