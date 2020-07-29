import React, { useState } from 'react'
import Welcom from './Welcom'
import { Link } from "react-router-dom";

export default function LogIn(props) {

    const [flag, setFlag] = useState(false);
    const [currentWorker, setCurrentWorker] = useState('')
    const [pathLink, setpathLink] = useState("/login")


    const showWelcom = () => {//tried to change the flag and pass worker num on same onClick but couldent do so.

        if (flag === false) {

            return (
                <div>
                    <h1>Login</h1>
                    <p>no.</p>
                    <input type="text" placeholder="Worker Number" onChange={(e) => { passCurrentWorker(e.target.value) }} />
                    <Link to={pathLink} > <button onClick={() => { setFlag(!flag) }}>Log In</button></Link>
                </div>
            )
        }
        else {

            return <Welcom currentWorker={currentWorker} products={props.products} removeProdFromList={props.removeProdFromList} />
        }
    }

    const passCurrentWorker = (num) => {
        for (let i = 0; i < props.workers.length; i++) {
            
            if (num === "99999") {
                setpathLink("/manager")
            }
            else if (props.workers[i].workerNum === num) {
                props.countEntries(i)
                setCurrentWorker(props.workers[i])
                break
            }

        }

    }

    //---------------------------------------------------------------------------------
    return (
        <div>

            {showWelcom()}



        </div>
    )
}
