import React from 'react';
import Logo from './LOGO/logo';
import Games from './Games/Games';



class App extends React.Component {
  render() {
  
    
    return(
      <div>
      
    
    <h4 className ="pic"><Logo /></h4>
    <h1 className="matchday">match day</h1>
   <div className="button">
    <button>home</button>
    <button>tabel</button>
    <button>pl</button>
    <button>stats</button>
    </div>
    <div className="games">
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
        <Games />
    
          </div>
    </div>
     
    )
}
}


export default App;