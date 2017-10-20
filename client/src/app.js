import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

// ReactDom.render(<h1>Hello from React</h1>, document.getElementById('react-app'));

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>), document.getElementById('react-app'));

  
// ReactDom.render((
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// ), document.getElementById('react-app'));
