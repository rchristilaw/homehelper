import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
