import React from 'react';
// import logo from './premier-logo.jpg';
import './logo.css'
class Logo extends React.Component {
  componentDidMount(){
    console.log("ddmount")
  }
  render() {
 
    return(
      <div>
<a className="pic">הליגה האנגלית בישראל</a>
 
    </div>

    )
  }
}
    

export default Logo