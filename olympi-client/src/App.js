import React, { Component } from 'react';
import './App.scss';

import Homepage from './pages/home/Homepage';
import NavbarTop from './components/navbarTop/NavbarTop.js';
import NavbarFeed from './components/navbarFeed/NavbarFeed.js';

function App(){
  return <div>
    {/*<NavbarTop/>*/}
    {/*<Homepage/>*/}
 
    <NavbarFeed/>
  </div>
}

export default App;