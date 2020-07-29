import React, { useState } from 'react'
import {Link } from "react-router-dom";

export default function SingUp(props) {
    const [worker, setWorker] = useState({ workerNum: '', workerName: '', forkLift: false, entries: '' });

    let setData = (e) => {
        let data=e.target.value
        if (e.target.id === "number") {
            
           
            setWorker({...worker,workerNum:data})
        }
        else if (e.target.id === "fullName") {
            setWorker({...worker,workerName:data})
        }
        else {
            setWorker({...worker,forkLift:data})
        }
    }

    let addWorker =()=>{
        props.addWorkerToList(worker)
    }






    return (
        <div>
            <p>no.</p>
            <input type="text" id="number" onChange={setData} />
            <p>FullName</p>
            <input type="text" id="fullName" onChange={setData} />
            <br />
            <p>forklift truck:</p>
            <input type="radio" name="fork" id="yes" value={true} onChange={setData} />
            <label htmlFor="yes">yes</label>
            <input type="radio" name="fork" id="no" value={false} checked="checked" onChange={setData} />
            <label htmlFor="no">no</label>
            <br />
            <br />
            <Link to={'/'}><button onClick={addWorker}>Create</button></Link>
        </div>
    )
}
