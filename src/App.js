import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <Router>
      <Link to="/carrinho" data-testid="shopping-cart-button">Carrinho</Link>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carrinho" component={ Carrinho } />
      </Switch>
    </Router>
  );
}
export default App;
