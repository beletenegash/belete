import React from 'react';
import './logo.css'
class Logo extends React.Component {
  componentDidMount(){
    console.log("ddmount")
  }
  render() {
 
    return(
      <div className="wrapper" >
          <button> <img className="cart" src="https://img.icons8.com/metro/26/000000/add-shopping-cart.png"></img>cart</button> 
            <button>orders</button>
    <button>help</button>
    <button>sigin</button>
    <button>home</button>

<h1 className="pic">Shmerling</h1>
 
    </div>

    )
  }
}
    

export default Logo