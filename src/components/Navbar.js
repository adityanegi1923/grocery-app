import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import css from './Navbar.css'
import { useState } from 'react'
import logo from '../images/logo.png'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
               <img id="logo" src={logo} />
            </Link>
            <div class="search-container">
            <form>
                <input type="text" placeholder="Search..." />
            </form>
           </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/aboutpage">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contactpage">Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
