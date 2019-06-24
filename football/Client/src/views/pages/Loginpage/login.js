import React, { useState, useEffect } from 'react';
import './login.css'
import { Link } from 'react-router-dom';



function Login(props) {

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
                props.history.push("/home")
            }
            if (res.failed) {
                console.log('not logged')
            }

        }))
            .catch(error => console.error('error', error))
    }

    return (

        <div className="useres">
        <h1>Sign-In </h1>
            <form className='usercss' onSubmit={kos}>
                <input type="text" className="inpu" placeholder="email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="text" className="inpu" placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" value="login" className="inpu" /><br />
            </form>

            <div className="inpus"> <Link to={`/Sing`}>
                craet account
    </Link></div>


        </div>
    )

}


export default Login;