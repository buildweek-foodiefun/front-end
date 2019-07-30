import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import mockarray from './mockarray'


var arrTypes = []

mockarray.map(restaurant => ( 
  arrTypes.push({
    key: restaurant.restaurantType,
    text : restaurant.restaurantType,
    value : restaurant.restaurantType
  })

));

console.log("types", arrTypes);



const SearchSelect = () => (
  <Dropdown
    placeholder='Restaurant Type'

    fluid
    multiple
    search
    selection
    options={arrTypes}
    value
  />
)

export default SearchSelect
