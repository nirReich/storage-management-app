import React, { useState } from 'react'

export default function LoginForm(props) {

    const [workerNum, setWorkerNum] = useState('');

    let insertCurrentWorker = (e) => {
        props.insertCurrentWorker(e.target.value)
        
    }

    return (
        <div>
            <h1>Login</h1>
            <p>no.</p>
            <input type="text" placeholder="Worker Number" onChange={insertCurrentWorker} />
            <button onClick={()=>{return props.setFlag}}>Log In</button>
        </div>
    )
}
