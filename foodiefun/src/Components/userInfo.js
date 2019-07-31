import React, { Component } from 'react';
import UserCard from './userCard';
import SearchSelect from './SearchSelect'



export default class  userInfo extends Component{
  constructor(props) {
    super(props);
    //this.state = { selectedFilterThingies: [] }
    this.searchSelectHandler = this.searchSelectHandler.bind(this);
  }

  searchSelectHandler(value) {
    this.setState({ selectedFilterThingies: value });
    console.log("searched array", value)
  }

  
  render(){

    //console.log("updatehandler", {this.searchSelectHandler})

    if (!this.props.data){
      return <div>Loading Foodie Cards...</div>
    }
    
    else{
      return <section className = 'userCard gridview'>
        <div>

          <div>
            <SearchSelect updateHandler={this.searchSelectHandler} />
          </div>


          
         


          {this.props.data.map(oneRest => {
            <UserCard tileData={oneRest} setReviews={this.props.setReviews} />
          })}


        </div>
      </section>
    }
  }
}





{/*
--------------IDEA-----------
if (no items in value[],)
  {this.props.data.map((oneRest) =>
  <UserCard tileData = {oneRest}/>
)}

else{
  for each item in value, 
      newarray= this.props.data.filter(item => this.props.data.restuarantType === item)

      {newarray((oneRest) =>
      <UserCard tileData = {oneRest}/>
)}
}
( example array ["Fast Food", "Japanese", "Mexican" ])
*/}

{/* oneRest is the data for only one restuarant */}