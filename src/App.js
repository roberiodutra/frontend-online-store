import React from 'react';
import './App.css';
import * as api from './services/api';

class App extends React.Component {
  render() {
    api.getCategories();
    return (
      <div className="App">
        olá
      </div>
    );
  }
}

export default App;
