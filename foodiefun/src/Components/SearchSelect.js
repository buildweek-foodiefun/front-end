import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import mockarray from './mockarray'


var arrTypes = []

mockarray.map(restaurant => ( 
    arrTypes.push(restaurant.restaurantType)
));

console.log("types", arrTypes);



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
