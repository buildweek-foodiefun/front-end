import React, { Component } from 'react';
import {Grid, Segment,  Dropdown } from 'semantic-ui-react'

import mockarray from './mockarray'



var options = []

mockarray.map(restaurant => ( 
  options.push({
    key: restaurant.restaurantType,
    text : restaurant.restaurantType,
    value : restaurant.restaurantType
  })
))

export default class SearchSelect extends Component {
  state = {
    dropdownSelection: {},
  }
 
  handleChange = (e, { value }) => this.setState({ dropdownSelection: value })
  
  render() {

    console.log(this.state.dropdownSelection)

    return (
      <Dropdown
        placeholder = 'Choose Restuarant Type'
        onChange={this.handleChange}
        options={options}
        fluid
        multiple
        search
        selection
        value={this.state.dropdownSelection}
      />

    )
  }
}
