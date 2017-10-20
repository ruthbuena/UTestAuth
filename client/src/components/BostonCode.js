import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topics from './Topics';


const BostonCode = () =>
    <Card className="container">
      <CardTitle title="React Application" subtitle="This is the home page." />
      </Card>
);
  // <Router>
  //   <div>
  //     <Topics />
  //   </div>
  // </Router>;

export default BostonCode;
