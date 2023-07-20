import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');

    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/cart">Cart</Link>
                <Link>
                    <button onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                    }}>{btnName}</button>
                </Link>
            </ul>
        </div>
    </div>)
}

export default Header;