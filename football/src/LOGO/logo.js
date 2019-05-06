import React from 'react';
import logo from './premier-logo.jpg';
import './logo.css'
class Logo extends React.Component {
  render() {
 
    return(
      <div>
    <img className='pic' src={logo}/>
 
    </div>

    )
  }
}
    

export default Logo