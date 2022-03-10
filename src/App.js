import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <Router>
      <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/carrinho" component={ Carrinho } />
      </Switch>
    </Router>
  );
}
export default App;
