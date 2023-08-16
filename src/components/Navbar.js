import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import { useState } from 'react'
import logo from '../images/logo.png'
import { FaShoppingBasket } from "react-icons/fa";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='upper-nav'>
            <Link to="/" className="title">
                <img alt='' id="logo" src={logo} />
            </Link>
            <div class="search">
                <input placeholder="Search..." type="text" />
                    <button type="submit">Go</button>
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to='/shoppingcart'><FaShoppingBasket style={{marginTop:"5px"}}/></NavLink>
                </li>
                <li>
                    <NavLink to="/aboutpage"><b>About</b></NavLink>
                </li>
                <li>
                    <NavLink to="/contactpage"><b>Contact</b></NavLink>
                </li>
                <li>
                    <NavLink to='/login'><b>Logout</b></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;