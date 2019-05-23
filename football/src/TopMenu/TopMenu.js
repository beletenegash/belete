import React from 'react';
import {  Link } from 'react-router-dom';
import './TopMenu.css'

class Logo extends React.Component {
  componentDidMount() {
    console.log("ddmount")
  }
  render() {

    return (
      <div className="wrapper" >
        <div> <img className="cart" src="https://img.icons8.com/metro/26/000000/add-shopping-cart.png"></img></div>
<div className="heder">
        <div className="click"> <Link to={`/sigin`}>
          login
    </Link></div>
        <div  className="click" >
          <Link to={`/games`}>
           buynow
              </Link>
          
        </div >
        <div  className="click">
    
        home 

        </div>

        <h1 className="pic">Shmerling</h1>
        </div>
      </div>

    )
  }
}


export default Logo