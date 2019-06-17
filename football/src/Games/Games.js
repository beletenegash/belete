import React ,{useState, useEffect} from 'react';
import './games.css'

function Games() {

    const [inputs, setInput] = useState({})

    useEffect(()=>{ console.dir(inputs)})

    return (
        <div  >
            <div>
                <form id className="adrs" onSubmit>
                    <h1 >
                        כתובת פרטים
  למשלוח כתובת </h1>
                    <p> <input type="text" placeholder="fullname" onKeyUp={(e)=>{setInput({...inputs,fullname:e.target.value })}}></input>full Name</p>
                    <p> <input type="text" placeholder="adress" onKeyUp={(e)=>{setInput({...inputs,fullname:e.target.value })}}></input>Adress</p>
                    <p> <input type="text" placeholder="city"></input>City</p>
                    <p> <input type="text" placeholder="countery"></input>Countery</p>
                    <p> <input type="text" placeholder="phonenumber"></input>Phone Number</p>
                    <input type="submit" value="send"></input>
                </form>
            </div>
            <div>
                <form id className="cardes">
                    <h1>פרטים של כרטיס אשראי</h1>
                    <p> <input type="text" placeholder="name on carde"></input>name on carde</p>
                    <p> <input type="number" placeholder="number on carde"></input>number on carde</p>
                    <p> <input type="date" placeholder="date"></input>date</p>
                    <input type="submit" value="send"></input>
                </form>
            </div>

        </div>
    )

}
export default Games;

