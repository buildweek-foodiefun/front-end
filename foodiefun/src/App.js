import React from 'react';
import logo from './logo.svg';
import './App.css';

import UserInfo from './Components/UserInfo';

function App() {
  const mockarray = [
    {id: '3',
    restaurantName: 'Mcdonalds',
    restaurantType: 'Fast Food',
    menuItem: 'McDouble',
    comments: 'Greasy american classic!',
    waitTime: '5',
    photoOfOrder: 'https://2.bp.blogspot.com/-mVo2J0TfPKs/Uqo1ccZo9sI/AAAAAAAAZ0s/qPKvVRvk6SY/s1600/mcdonalds-bacon-mcdouble-02.JPG',
    price: '$1.39',
    foodRating: '3',
    dataOfVisit: '7/29/2019'},

    {id: '4',
    restaurantName: 'Umaido',
    restaurantType: 'Japanese',
    menuItem: 'Ramen',
    comments: 'Amazing ramen with plentiful toppings',
    waitTime: '25',
    photoOfOrder: 'https://lh3.googleusercontent.com/1Tnd6sl_yA2U10Nc3GbGjQYfk_Yi0FDb9MkD_b97pSRk52LNIFBvoa4hA8-bwFU3qv755NYS=w600-h0',
    price: '$7.99',
    foodRating: '5',
    dataOfVisit: '7/11/2019'},

    {id: '5',
    restaurantName: 'Escorpion',
    restaurantType: 'Mexican',
    menuItem: 'Carne Asada Tacos',
    comments: 'The meat was a little dry and service was slow, but tasted good overall!',
    waitTime: '30',
    photoOfOrder: 'https://www.eatingonadime.com/wp-content/uploads/2018/05/easy-street-tacos.jpg',
    price: '$6.40',
    foodRating: '4',
    dataOfVisit: '6/05/2019'}
  ]

  return (
    <div className="App">
      <UserInfo data = {mockarray} />
    </div>
  );
}

export default App;
