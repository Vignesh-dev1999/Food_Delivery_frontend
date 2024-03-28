import "./navbar.scss"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useState } from "react";
import NoFoodIcon from '@mui/icons-material/NoFood';
// import imgs from "../../images/wepik-export-20240306121500IXzB.png"

import imgss from "../../images/FREE_DELIVERY_POST_TEMPLATE__1_-removebg-preview.png"

function Navbar() {

    const [cart, setcart ] =useState(0)
    return <div className="navbar">
        <div className="logo">
        <Link to="/">
            {/* <NoFoodIcon className="icons" /> */}
            <img  src={imgss}/>
        </Link>
        </div>
        <div className="navbar-list">
            <Link to="/">
                <p>Home</p>

            </Link>
            <Link to="/profile">
            <p>Orders</p>
            </Link>
            <Link to= "/login">

            <p>Sign In</p>
            </Link>
            <Link to="/cart">
            <p> {cart} Cart</p>
            
            </Link>
            {/* <p>Profile</p> */}
            <Link to="/profile">
                <AccountCircleIcon className="icon" />
            </Link>
        </div>
    </div>
}

export default Navbar;