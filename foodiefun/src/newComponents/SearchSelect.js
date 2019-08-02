import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";







export default class SearchSelect extends Component {

  state = {
    dropdownSelection: []
  };

  handleChange = (e, { value }) => {
    this.setState({ dropdownSelection: value });
    this.props.updateHandler(value);
  };

  render() {
    //console.log("state", this.state.dropdownSelection)

    var options = [];
    //check for restuarant type
    this.props.data.map(restaurant =>
      options.push({
        key: restaurant.restaurantType,
        text: restaurant.restaurantType,
        value: restaurant.restaurantType
      })
    );

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
