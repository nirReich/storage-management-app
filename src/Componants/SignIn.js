import React from 'react'
import { Link } from "react-router-dom";


export default function SignIn(props) {
    return (
        <div style={{backgroundColor:"lightgray"}}>
            <h2>Logistical Management</h2>
            <br/>
            
            <Link to={'/singup'}><button style={{backgroundColor:"blue",color:"white", borderRadius:"5px"}}>Sign Up</button></Link>
            <br/>
            <Link to={'/login'}><button style={{backgroundColor:"blue",color:"white", borderRadius:"5px"}} >Log In</button></Link>
            
        </div>
    )
}
