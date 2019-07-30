import React from 'react';
import UserCard from './userCard';
import SearchSelect from './SearchSelect'

export default function userInfo({data, deleteReview}) {


    if (!data){
        return <div>Loading Foodie Cards...</div>
    }

    else{
        return <section className = 'userCard gridview'>
            <div>
                <div>
                    Search bar goes here
                </div>
                {/* oneRest is the data for only one restuarant */}
                {data.map((oneRest) =>
                    <UserCard tileData = {oneRest} deleteReview={deleteReview} />
                )}

            </div>
        </section>
    }
}