import React, { useState, useEffect } from 'react';
import './home.css'

function Home() {
  const [text, setText] = useState('');
    let tempText = '';

  useEffect(() => {
   
 
  });

  return (
    <div>     

       <p>{text}</p> 
      <img className="pic" src="data:image/jpeg;base64,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" alt="pic"></img>
      
       
    </div>
  );
}
export default Home;