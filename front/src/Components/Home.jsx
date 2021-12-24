import React from 'react';
import {  Link } from "react-router-dom";
import  "../App.css"



export default function Home() {
    return (
        <div className='img' >
            <img src="http://tipieapp.com/www/img/tipie-logo-01.png" alt="tipie" style={{"max-width":"100%", "justify-content":"center"}}/>
            <br/>
            <br/>
            <Link to={"/login"} style={{ textDecoration: 'none' }} type="button" className="btn btn-secondary btn-lg d-grid gap-2 col-6 mx-auto" >
         Login</Link>
        </div>
    )
}
