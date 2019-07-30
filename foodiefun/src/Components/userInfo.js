import React from 'react';
import UserCard from './userCard';
import SearchSelect from './SearchSelect'

export default function userInfo({data}) {


    if (!data){
        return <div>Loading Foodie Cards...</div>
    }

    else{
        return <section className = 'userCard gridview'>
            <div>
                <div>
                    <SearchSelect/>
                </div>
                {/* oneRest is the data for only one restuarant */}
                {data.map((oneRest) =>
                    <UserCard tileData = {oneRest}/>
                )}

            </div>
        </section>
    }
}