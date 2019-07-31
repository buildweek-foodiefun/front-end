import React, { Component } from "react";
import { Grid, Segment, Dropdown } from "semantic-ui-react";

import mockarray from "./mockarray";

var options = [];

mockarray.map(restaurant =>
  options.push({
    key: restaurant.restaurantType,
    text: restaurant.restaurantType,
    value: restaurant.restaurantType
  })
);

export default class SearchSelect extends Component {
  state = {
    dropdownSelection: []
  };

  handleChange = (e, { value }) => {
    this.setState({ dropdownSelection: value });
    this.props.updateHandler(value);
  };

  render() {
    // console.log("state", this.state.dropdownSelection)

    return (
      <Dropdown
        placeholder="Choose Restuarant Type"
        onChange={this.handleChange}
        options={options}
        fluid
        multiple
        search
        selection
        value={this.state.dropdownSelection}
      />
    );
  }
}











// import React from 'react';
// import { Dropdown } from 'semantic-ui-react'
// import mockarray from './mockarray'


// var arrTypes = []

// mockarray.map(restaurant => ( 
//     arrTypes.push(restaurant.restaurantType)
// ));

// console.log("types", arrTypes);



// console.log("faker", addressDefinitions)
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

// const SearchSelect = () => (
//   <Dropdown
//     placeholder='State'
//     fluid
//     multiple
//     search
//     selection
//     options={stateOptions}
//   />
// )

// export default SearchSelect
