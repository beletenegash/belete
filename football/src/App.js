import React from 'react';
import Logo from './LOGO/logo';
import Games from './Games/Games';




class App extends React.Component {


  render() {


    return (
      <div className="page">
        <Logo />
        <Games />
      </div>


    )
  }


}



export default App;