//---This is where my components will be rendered to keep my index.js clean
import React from 'react';
import Table from './Table';

import {
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

const App = () => (
  <Router>
    <Redirect from='/' to='/home' />
    <Table />
  </Router>
)

export default App;