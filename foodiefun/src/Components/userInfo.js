import React from 'react';
import userCard from './userCard';

export default function userInfo() {

    if (! dataname){
        return <div>Loading Foodie Cards...</div>
    }

    else{
        return <section className = 'userCard gridview'>
            <h2>
                {/* oneRest is the data for only one restuarant */}
                {dataname.map((oneRest) =>
                    <UserCard tiledata = {oneRest}/>
                )}



            </h2>
        </section>
    }
}