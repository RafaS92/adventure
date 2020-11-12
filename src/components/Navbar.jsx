import React,{ useState } from 'react'
import { Link } from "react-router-dom"


function Navbar() {

    const [click,setClick] = useState(false)
    console.log(click);

    const handleClick = () => setClick(!click)
    const closeMobileMenue = () => setClick(false)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo" >
                Adv<i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={ click ? 'fas fa-bars' : 'fas fa-times'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenue}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenue}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenue}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links-mobile" onClick={closeMobileMenue}>
                            Sign Up
                        </Link>
                    </li>

                </ul>
            </div>   


        </nav>
            
        </>
    )
}

export default Navbar
