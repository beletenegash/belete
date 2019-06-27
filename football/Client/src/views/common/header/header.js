import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

function header(){

    return (
      <div className="header" >
        <div> 

        <div className="click"> <Link to={`/login`}>
          login
    </Link></div>
        <div  className="click" >
          <Link to={`/order`}>
           buynow
              </Link>
          
        </div >
        <div  className="click" >
          <Link to={`/home`}>
         Home
              </Link>

        </div>
        <div  className="click" >
          <Link to={`/card`}>
          
              </Link>

        </div>
        <div  className="click" >
          <Link to={`/cart`}>
          <img src="https://img.icons8.com/metro/26/000000/add-shopping-cart.png"></img>
              </Link>

        </div>
       

        <h1 className="hader">Shmerling</h1>
        </div>
        
      </div>


    )
  }



export default header