import React ,{useState, useEffect} from 'react';
import './order.css'

function Order(props) {

    const [inputs, setInput] = useState({})

    useEffect(()=>{ console.dir(inputs)})


    const orders = (e) => {
        e.preventDefault();

        let inputdata={inputs}
        console.log(inputdata)
        fetch("http://localhost:4000/orderpage", {
            method: "post",
            body: JSON.stringify(inputdata),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(res => {
            console.log(res)
            // if (res.success) {
            //     console.log('good logged')
            //     props.history.push("/product")
            // }
            // if(res.failed){
            //     console.log('not logged')
            // }

        }))
            .catch(error => console.error('error', error))
    }

    

    return (
        <div  >
            <div>
                <form className="adrs" onSubmit={orders}>
                    <h1 >
                        ����� �����
  ������ ����� </h1>
                    <p> <input type="text" placeholder="fullname" onKeyUp={(e)=>{setInput({...inputs,fullname:e.target.value })}}></input>full Name</p>
                    <p> <input type="text" placeholder="adress" onKeyUp={(e)=>{setInput({...inputs,adress:e.target.value })}}></input>Adress</p>
                    <p> <input type="text" placeholder="city" onKeyUp={(e)=>{setInput({...inputs,city:e.target.value })}}></input>City</p>
                    <p> <input type="text" placeholder="countery" onKeyUp={(e)=>{setInput({...inputs,countery:e.target.value })}}></input>Countery</p>
                    <p> <input type="text" placeholder="phonenumber" onKeyUp={(e)=>{setInput({...inputs,phonenumber:e.target.value })}}></input>Phone Number</p>
                    <input type="submit" value="send"></input>
                </form>
            </div>
            <div>
                <form  className="cardes">
                    <h1>����� �� ����� �����</h1>
                    <p> <input type="text" placeholder="nameoncarde" onKeyUp={(e)=>{setInput({...inputs,nameoncarde:e.target.value })}}></input>name on carde</p>
                    <p> <input type="number" placeholder="numberoncarde" onKeyUp={(e)=>{setInput({...inputs,numberoncar:e.target.value })}}></input>number on carde</p>
                    <p> <input type="date" placeholder="date"></input>date</p>
                    <input type="submit" value="send"></input>
                </form>
            </div>

        </div>
    )
}


export default Order;

