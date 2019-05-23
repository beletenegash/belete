import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import Games from './Games/Games';
import SignIn from './Sigin/sigin';
import Hooxs from './Hooxs/Hooxs';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.css'




function App() {


  return (
    <Router>
      <div className="page">
        <Hooxs />

        <TopMenu />
        <div className='wrapperRouter'>
          <Route exact={true} path='/sigin' component={SignIn} />
          <Route exact={true} path='/games' component={Games} />
          <Route path='/hooks' component={Hooxs} />         
          
        </div>
  
      </div>

    </Router>

      )
    }
    
    
    
    
    
export default App;