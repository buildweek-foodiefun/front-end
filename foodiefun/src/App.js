import React from 'react';
import './App.css';
import UserInfo from './Components/UserInfo';
import mockarray from './Components/mockarray';


function App() {

  return (
    <div className="App">
      <UserInfo data = {mockarray} />
    </div>
  );
}

export default App;
