import React,{useState} from 'react'
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo" >
                <i className="fab fa-accessible-icon"></i>
                </Link>
                
            </div>   


        </nav>
            
        </>
    )
}

export default Navbar
