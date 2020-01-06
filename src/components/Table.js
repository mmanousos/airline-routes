import React, { Component } from 'react';

class Table extends Component {
  state = {
    firstRow: 0,
  };

  lastRow = () => {
    return this.state.firstRow + Number(this.props.perPage);
  };

  nextPage = () => {
    let newFirstRow = this.state.firstRow;
    this.setState({ firstRow: newFirstRow + Number(this.props.perPage) });
  };

  previousPage = () => {
    let newFirstRow = this.state.firstRow;
    this.setState({ firstRow: newFirstRow - Number(this.props.perPage) });
  };

  render() {
    const headerCells = this.props.columns.map(row => {
      return <th key={row.name}>{ row.name }</th>
    });

    const bodyRows = this.props.rows.slice(this.state.firstRow, this.lastRow()).map(row => { 
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

    const prevButton = () => {
      if (this.state.firstRow === 0) {
        return (
          <button disabled>Previous Page</button >
        );
      } else {
        return (
          <button
            onClick={this.previousPage}
          >
            Previous Page
          </button >
      )}
    };

    const nextButton = () => {
      if (this.lastRow() + Number(this.props.perPage) > this.props.rows.length) {
        return (
          <button disabled>Next Page</button >
        );
      } else {
        return (
          <button
            onClick={this.nextPage}
          >
            Next Page
          </button >
      )}
    };

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
        <p>
          Showing {this.state.firstRow + 1} - {this.lastRow()} of {this.props.rows.length} routes.
        </p>
        { prevButton() }
        { nextButton() }
      </div>
     )  
  }
}

export default Table;