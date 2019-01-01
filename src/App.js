import React, { Component } from 'react';
import './App.css';
import RavenDb from './assets/RavenDB.png';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <img className="NavLogo" src={RavenDb} alt="" />
        </div>
        <Dashboard />
      </div>
    );
  }
}
export default App;
