import React, { useState, useEffect } from 'react';
import './sing.css'

function Sing(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Name, setName ]= useState("");

    const newuser = (e) => {
        e.preventDefault();


        let newuserdata = { email, password}
        console.log(newuserdata);
        fetch("http://localhost:4000/newlogin", {
            method: "POST",
            body: JSON.stringify(newuserdata),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(res => {
            console.log(res)
            if (res.success) {
                console.log('good registerd')
                props.history.push("/login")
            }
            if(res.failed){
                console.log('not registerd')
            }

        }))
            .catch(error => console.error('error', error))
    }


return(
<div className="users"> 
<h1>Create account</h1>

<form className='usercss' onSubmit={newuser}>
                <input type="text" className="inpu" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
                <input type="text"className="inpu" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                <input type="text"className="inpu" placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" value="craet" className="inpu" /><br />
            </form>

    


</div>


)
}



export default Sing;