import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../images/logo.png';
import { FaShoppingBasket } from "react-icons/fa";
import cartContext from './cartContext';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems, toggleCart } = useContext(cartContext);
    const cartQuantity = cartItems.length;
    return (
        <nav className='upper-nav'>
            <Link to="/" className="title">
                <img alt='' id="logo" src={logo} />
            </Link>
            <div className="search">
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
                    <NavLink to='/shoppingcart'>
                        <div
                            title="Cart"
                            className="cart_icon"
                            onClick={() => toggleCart(true)}
                        >
                            <FaShoppingBasket style={{ marginTop: "5px" }} />
                            {cartQuantity >= 1 && (
                                <span className="badge">{cartQuantity}</span>
                            )}
                        </div>
                    </NavLink>
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