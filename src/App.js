import React, { Component } from 'react';
import './App.css';

import DATA from './data.js';

class App extends Component {
  render() {
    const routeData = DATA.routes.map(route => (
      <tr key={`${route.airline}: ${route.src}-${route.dest}`}>  
        <td>{DATA.getAirlineById(route.airline).name}</td>
        <td>{DATA.getAirportByCode(route.src).name}</td>
        <td>{DATA.getAirportByCode(route.dest).name}</td>
      </tr>
    ));

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>Airline</th>
                <th>src</th>
                <th>dest</th>
              </tr>  
            </thead>
            <tbody>
              {routeData}  
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default App;