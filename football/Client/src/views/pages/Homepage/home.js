import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import './home.css'

function Home() {
  const [count, setCount] = useState(0);

 
  return (
 
      

   
    <div >
      <div className="buyit1">
         <p> quantity {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      +
      </button>
      </div>
     
     <h1 className="buy"> buy now = 39.90 $</h1>
    <h2> shmerling to buy click on Buy now</h2>
       
    <a class="lightbox" href="#dog">
   <img className="pic" src="https://www.foodappeal.co.il/images/itempics/7290014828995.jpg"/>
</a> 
<div class="lightbox-target" id="dog">
   <img src="https://www.foodappeal.co.il/images/itempics/7290014828995.jpg"/>
   <a class="lightbox-close" href="#"></a>
</div>
      <div className="buyit"> <Link to={`/order`}>
          Buy now
    </Link></div>
    <p className="lorem">is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the
printing and typesetting industry.
 Lorem Ipsum has been
 the industry's standard dummy text 
 ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
 PageMaker including versions of Lorem Ipsum.</p>
 
    </div>
  )
}
export default Home;