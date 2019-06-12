import React from 'react';
import './games.css'

class Games extends React.Component {
    render() {
    
      
      return(
          <div >

          
 <h1 className="pix"> 
 כתובת פרטים
  למשלוח כתובת </h1>
  <div className="adress">
 <form> 
  <p> <input type="text" placeholder="fullname"></input>full Name</p>
  <p> <input type="text" placeholder="adress"></input>Adress</p>
  <p> <input type="text" placeholder="city"></input>City</p>
  <p> <input type="text" placeholder="countery"></input>Countery</p>
  <p> <input type="phone" placeholder="phonenumber"></input>Phone Number</p>
 <input type="submit" value="send"></input>
  
 
 </form>
 </div>
 
          </div>

      )
    }
}
export default Games;

