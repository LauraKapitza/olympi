import React, { Component } from 'react';
import './App.scss';

import Homepage from './pages/home/Homepage';
import NavbarFeed from './components/navbarFeed/NavbarFeed.js';

function App(){
  return <div>
    <Homepage/>
    {/*<NavbarFeed/>*/}
  </div>
}

export default App;