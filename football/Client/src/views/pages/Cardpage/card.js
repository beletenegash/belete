import React, { useState, useEffect } from 'react';
import './card.css'

function Card(props){
    const [inputs, setInput] = useState({})

    useEffect(()=>{ console.dir(inputs)})


    const cardes = (e) => {

        e.preventDefault();

        let cardedata={inputs}
        console.log(cardedata)
        fetch("http://localhost:4000/cardpage", {
            method: "post",
            body: JSON.stringify(cardedata),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(res => {
            console.log(res)
            if (res.success) {
                console.log('good logged')
                props.history.push("/Home")
            }
            if(res.failed){
                console.log('not logged')
            }

        }))
            .catch(error => console.error('error', error))



    }




return(

    <div>
    <form  className="card" onSubmit={cardes}>
        <h1>  הכנס פרטי האשראי לתשלום</h1>
        <p> <input type="text" placeholder="nameoncarde" onKeyUp={(e)=>{setInput({...inputs,nameoncarde:e.target.value })}}></input>name on carde</p>
        <p> <input type="text" placeholder="numberoncarde" onKeyUp={(e)=>{setInput({...inputs,numberoncar:e.target.value })}}></input>number on carde</p>
        <p> <input type="date" placeholder="date" onKeyUp={(e)=>{setInput({...inputs,date:e.target.value })}}></input>date</p>
        <input type="submit" value="send"></input>
    </form>
</div>


)
}
export default Card;