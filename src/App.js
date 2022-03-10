import React from 'react';
import './App.css';
import * as api from './services/api';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>
    </Router>
  );
}
export default App;
