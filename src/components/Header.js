import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');

    const onlineStatus = useOnlineStatus();

    const contextData = useContext(UserContext);

    const cartItems = useSelector((store) => {
        console.log(store);
        return store.cart.items
    });
    console.log(cartItems)

    return (
        <div className="flex justify-between items-center bg-slate-200 shadow-lg">
            <div className="logo-container">
                <img className="w-28" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 gap-4">
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/cart">🛒({cartItems.length})</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link>
                            <button onClick={() => {
                                btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                            }}>{btnName}</button>
                        </Link>
                    </li>
                    <li>{contextData.loggedInUser}</li>
                </ul>
            </div>
        </div>)
}

export default Header;