import React, { Component } from 'react';

class Table extends Component {
  render() {
    // return (
    //   <p>This is my new component</p>
    // );
    
     // const routeData = DATA.routes.map(route => (
    //   <tr key={`${route.airline}: ${route.src}-${route.dest}`}>
    //     <td>{DATA.getAirlineById(route.airline).name}</td>
    //     <td>{DATA.getAirportByCode(route.src).name}</td>
    //     <td>{DATA.getAirportByCode(route.dest).name}</td>
    //   </tr>
    // ));
    const headerCells = this.props.columns.map(row => {
      return <th key={row.name}>{ row.name }</th>
    });

    const bodyRows = this.props.rows.map(row => {
      const rows = this.props.columns.map( col => {
        const value = row[col.property];
        return (
          <td 
            key={col.property + value}
          >{ this.props.format(col.property, value) }</td>
        );
      });
      return <tr key={Object.values(row).join(':')}>
        { rows }
      </tr>
    });

    return ( 
      <div>
        <table className={this.props.className}>
          <thead>
            <tr>
              { headerCells }
            </tr>
          </thead>
          <tbody>
            { bodyRows }
          </tbody>
        </table>
      </div>
     )  
  }
}

// function formatValue(property, value) { // return a string }

// const columns = [
//   { name: 'Airline', property: 'airline' },
//   { name: 'Source Airport', property: 'src' },
//   { name: 'Destination Airport', property: 'dest' },
// ];

export default Table;