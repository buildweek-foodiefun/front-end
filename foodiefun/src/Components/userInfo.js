import React, { Component } from 'react';
import UserCard from './userCard';
import SearchSelect from './SearchSelect'
import "./userInfo.css";


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
        return <section className = 'userCard '>
          <div>

            <div>
              <SearchSelect updateHandler={this.searchSelectHandler} data = {this.props.data} />
      
            </div>

            <div class = 'gridview' >
              {this.props.data.map(oneRest => (
                <UserCard class = 'onecard' tileData={oneRest} setReviews={this.props.setReviews} />
              ))}
            </div>
            

          </div>
        </section>
      }
    
    
      else{
        let newarray = []

        //check for restuarant type and render from newarray
        newarray = (this.props.data.filter(item => 
          this.state.selectedFilterThingies.some(filter => filter === item.restaurantType)))

          console.log("newarray",newarray)


        return <section className = 'userCard '>
          <div>

            <div>
              <SearchSelect updateHandler={this.searchSelectHandler} data = {this.props.data} />
            </div>

            <div class = 'gridview'>
              {newarray.map(oneRest => (
                <UserCard class = 'onecard' tileData={oneRest} setReviews={this.props.setReviews} />
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
