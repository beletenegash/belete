import React, { useState, useEffect } from 'react';
import './sigin.css'
import { METHODS } from 'http';


function SignIn(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const kos = (e) => {
        e.preventDefault();


        let userdata = { email, password }
        fetch("http://localhost:4000/login", {
            method: "post",
            body: JSON.stringify(userdata),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(res => {
            console.log(res)
            if (res.success) {
                console.log('good logged')
                props.history.push("/games")
            }
            if(res.failed){
                console.log('not logged')
            }

        }))
            .catch(error => console.error('error', error))
    }

    return (

        <div className="useres">
            <form onSubmit={kos}>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" value="login" /><br />
            </form>
        </div>
    )

}


export default SignIn;