import React, { useState, useEffect } from 'react';
import './order.css'

function Order(props) {

    const [inputs, setInput] = useState({})

    useEffect(() => { console.dir(inputs) })


    const orders = (e) => {
        e.preventDefault();

        let inputdata = { inputs }

        console.log(inputdata)
        fetch("http://localhost:4000/orderpage", {
            method: "post",
            body: JSON.stringify(inputdata),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(res => {
            console.log(res)
            if (res.success) {
                console.log('good logged')
                props.history.push("/Card")
            }
            if (res.failed) {
                console.log('not logged')
            }

        }))
            .catch(error => console.error('error', error))

    }



    return (

        <div>
            <form className="orders" onSubmit={orders}>
                <h1 >Enter Your Adress</h1>
                <p> <input type="text" className="orde" placeholder="fullname" onKeyUp={(e) => { setInput({ ...inputs, fullname: e.target.value }) }}></input>full Name</p>
                <p> <input type="text" className="orde" placeholder="adress" onKeyUp={(e) => { setInput({ ...inputs, adress: e.target.value }) }}></input>Adress</p>
                <p> <input type="text"  className="orde"  placeholder="city" onKeyUp={(e) => { setInput({ ...inputs, city: e.target.value }) }}></input>City</p>
                <p> <input type="text"  className="orde"  placeholder="countery" onKeyUp={(e) => { setInput({ ...inputs, countery: e.target.value }) }}></input>Countery</p>
                <p> <input type="text"  className="orde"  placeholder="phonenumber" onKeyUp={(e) => { setInput({ ...inputs, phonenumber: e.target.value }) }}></input>Phone Number</p>
                <input type="submit" value="send"  className="orde" ></input>
            </form>
        </div>
    )
}


export default Order;

