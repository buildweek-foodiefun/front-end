import React, { Component } from 'react';
import UserCard from './userCard';
import SearchSelect from './SearchSelect'



export default class  userInfo extends Component{
  constructor(props) {
    super(props);
    this.state = { selectedFilterThingies: [] }
    this.searchSelectHandler = this.searchSelectHandler.bind(this);
  }

  searchSelectHandler(value) {
    this.setState({ selectedFilterThingies: value });
    console.log("searched array", value)
  }

  // ["Fast Food", "Japanese", "Mexican" ]

  render(){

    //console.log("updatehandler", {this.searchSelectHandler})

    if (!this.props.data){
      return <div>Loading Foodie Cards...</div>
    }
    
    else{


      if (this.state.selectedFilterThingies.length < 1){
        return <section className = 'userCard gridview'>
          <div>

            <div>
              <SearchSelect updateHandler={this.searchSelectHandler} />
            </div>

            <div>
              {this.props.data.map(oneRest => (
                <UserCard tileData={oneRest} setReviews={this.props.setReviews} />
              ))}
            </div>
            

          </div>
        </section>
      }
    
    
      else{
        let newarray = []

        newarray = (this.props.data.filter(item => 
          this.state.selectedFilterThingies.some(filter => filter === item.restaurantType)))



        return <section className = 'userCard gridview'>
          <div>

            <div>
              <SearchSelect updateHandler={this.searchSelectHandler} />
            </div>

            <div>
              {newarray.map(oneRest => (
                <UserCard tileData={oneRest} setReviews={this.props.setReviews} />
               ))}
            </div>
            

          </div>
        </section>

      }


    }
  }
}



// // ( example value -is and array 
//     ["Fast Food", "Japanese", "Mexican" ])








/*
OLDDDDD
 {this.props.data.map(oneRest => (
            <UserCard tileData={oneRest} setReviews={this.props.setReviews} />
          ))}



else{
  for each item in value, 
      newarray= this.props.data.filter(item => this.props.data.restuarantType === item)

      {newarray((oneRest) =>
      <UserCard tileData = {oneRest}/>
)}
}

*/
