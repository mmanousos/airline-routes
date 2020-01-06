import React, { Component } from 'react';

class Select extends Component {
  static defaultProps = {
    options: [],
    title: 'Please select',
    valueKey: '',
    titleKey: '',
    routes: [],
    value: 'all',
    allTitle: 'All',
    onSelect: (value) => null,
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.onSelect(event.target.value);
  }

  render() {
    const disable = (option) => {
      let airlineIds = [];
      let airportCodes = [];
      this.props.routes.forEach(route => {
        if (!(airlineIds).includes(route.airline)) airlineIds.push(route.airline);
        if (!airportCodes.includes(route.src)) airportCodes.push(route.src);
        if (!airportCodes.includes(route.dest)) airportCodes.push(route.dest);
      });

      if (this.props.valueKey === 'id') {        
        return !airlineIds.includes(option[this.props.valueKey]);
      } else {
        return !airportCodes.includes(option[this.props.valueKey]);
      }
    };

    let options = this.props.options.map( (option) => {
      const value = option[this.props.valueKey];
      return <option key={value} value={value} disabled={disable(option)}>
        { option[this.props.titleKey] }
      </option>;
    });
    options.unshift(<option key="all" value="all">{this.props.allTitle}</option>);

    return (
      <select value={this.props.value} onChange={this.handleChange} >
        { options }
      </select>
    );
  }
}

export default Select;