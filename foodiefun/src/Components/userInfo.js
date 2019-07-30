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


                    {/* oneRest is the data for only one restuarant */}
                    {this.props.data.map((oneRest) =>
                        <UserCard tileData = {oneRest}/>
                    )}

                </div>
            </section>
        }
    }
}