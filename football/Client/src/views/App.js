import React from 'react';
import './app.css';
import Header from './common/header/header';
import Order from './pages/Orderpage/order';
import login from './pages/Loginpage/login';
import Home from './pages/Homepage/home';
import Card from './pages/Cardpage/card'
import Sing from './pages/Singpage/sing'
import Cart from './pages/cart/cart'


import { BrowserRouter as Router, Route } from 'react-router-dom';






function App() {


  return (
    <Router>
      <div className="page">       
        <Header/>
        <div className='pageWrapper'>
          <Route exact={true} path='/Login' component={login} />
          <Route exact={true} path='/Order' component={Order} />
          <Route exact={true} path='/Card' component={Card} /> 
          <Route exact={true} path='/home' component={Home} /> 
          <Route exact={true} path='/sing' component={Sing} /> 
          <Route exact={true} path='/cart' component={Cart} /> 

          
          
        </div>  
      </div>

    </Router>

      )
    }
    
    
    
    
    
export default App;