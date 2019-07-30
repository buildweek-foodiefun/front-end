import React from 'react';
import './App.css';
import UserInfo from './components/userInfo';
import mockarray from './components/mockarray';


function App() {

  return (
    <div className="App">
      <UserInfo data = {mockarray} />
    </div>
  );
}

export default App;
