import React from 'react'
import { Link } from "react-router-dom";

export default function Manager(props) {
    return (
        <div>
            <h1>Manager</h1>
            <table>
                <tr>
                    <th>NO</th>
                    <th>Full Name</th>
                    <th>Counter</th>
                </tr>
                {props.workers.map((e,i)=>{
                    return(
                        <tr>
                        <td>{e.workerNum}</td>
                        <td>{e.workerName}</td>
                        <td>{e.entries}</td>
                    </tr>
                    )
                })}
                <br/>
                <br/>
                <Link to={'/'}><button>Log Out</button></Link>

            </table>
        </div>
    )
}
