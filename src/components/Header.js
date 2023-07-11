import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');

    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Orders</li>
                <li>Cart</li>
                <li>
                    <button onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                    }}>{btnName}</button>
                </li>
            </ul>
        </div>
    </div>)
}

export default Header;