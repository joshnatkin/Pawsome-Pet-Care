import React, { useState } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/FooterHeader/pawsome-logo.png";

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    // Toggle function to change the visibility state
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };
    
    return (
        <div id="home-content">
            <header id="main-header">
                <nav id="home-login-nav">
                    <ul>
                        <li><h1>Pawsome Pet Care</h1></li>
                        <li><a href="#"><img id="logo" src={logo} alt="Pawsome logo"/></a></li>
                    </ul>
                </nav>
            </header>
            <div id="home-main-nav">
                <div id="toggle-nav" onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav>
                    <ul id="nav-items" className={isNavVisible ? "show" : ""}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/supplies">Supplies</Link></li>
                        <li><Link to="/adopt">Adopt</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
