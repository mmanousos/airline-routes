import React, { Component } from 'react';
import './App.css';

import DATA from './data.js';

class App extends Component {
  render() {
    const routeData = DATA.routes.map(route => (
      <tr>
        <td>{route.airline}</td>
        <td>{route.src}</td>
        <td>{route.dest}</td>
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
              <th>Airline</th>
              <th>src</th>
              <th>dest</th>
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

// for each entry in the routes array, iterate over and create a table row with airline, src & dest