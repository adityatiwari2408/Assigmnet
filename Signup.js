import React from 'react'
import { Link } from "react-router-dom"
import "./Signup.css";


function Signup(props) {
    return (
        <div className='Signin-card'>
            <div className='Sign-Container'>
                <h1>thankyou to submit </h1>
                <h1>Your submitted data is here</h1>
                <h3>Name:{localStorage.getItem("Name")}</h3>
                <h3>Lastname:{localStorage.getItem("Lastname")}</h3>
                <h3>Gender:{localStorage.getItem("Gender")}</h3>
                <h3>Contact:{localStorage.getItem("Contact")}</h3>


            </div>
        </div>
    )
}

export default Signup