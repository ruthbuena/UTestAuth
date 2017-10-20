import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navpills from './Nav';
import HTML from './HTML';
import CSS from './CSS';
import JavaScript from './Javascript';
import ReactJs from './ReactJs';
import Node from './Node';
import SQL from './SQL';
import Mongo from './Mongo';
import ES from './ES';




const Topics = () =>
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={HTML} />
      <Route exact path="/CSS" component={CSS} />
      <Route exact path="/Javascript" component={JavaScript} />
      <Route exact path="/ReactJs" component={ReactJs} />
      <Route exact path="/Node" component={Node} />
      <Route exact path="/SQL" component={SQL} />
      <Route exact path="/Mongo" component={Mongo} />
      <Route exact path="/ES" component={ES} />
    </div>
  </Router>;

export default Topics;
