import React, { useState, useEffect } from 'react';
import './sigin.css'


function SignIn (props) {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const kos = (e) => {
        e.preventDefault();
        alert(`${email},${password}`)
    }

    return (
        
        <div className="useres">
            <form onSubmit={kos}>
                <input type="text" placeholder="email" onChange ={(e) => setEmail(e.target.value)}/><br />
                <input type="text" placeholder="password" onChange ={(e) => setPassword(e.target.value)}/><br />
                <input type="submit" value="login" /><br />
            </form>
        </div>
    )

}


export default SignIn;