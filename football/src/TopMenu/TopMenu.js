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
        <div> <img className="cart" src="https://img.icons8.com/metro/26/000000/add-shopping-cart.png"></img>cart</div>
        <button>orders</button>
<div className="heder">
        <div> <Link to={`/sigin`}>
          login
    </Link></div>
        <div>
          <Link to={`/games`}>
           buynow
              </Link>
          
        </div>
        <div>home</div>

        <h1 className="pic">Shmerling</h1>
        </div>
      </div>

    )
  }
}


export default Logo