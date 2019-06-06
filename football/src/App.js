import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import Games from './Games/Games';
import SignIn from './Sigin/sigin';
import Hooxs from './Hooxs/Hooxs';
import pic from './pic1/pic';
import pic2 from './pic2/pic2'


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
          <Route exact={true} path='/pic' component={pic2} /> 
          <Route exact={true} path='/pic2' component={pic} />
        </div>
  
      </div>

    </Router>

      )
    }
    
    
    
    
    
export default App;