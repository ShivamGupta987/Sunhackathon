// NavBar.js
import React from 'react';
import {Link} from 'react-router-dom'
import './index.css';  // Import specific CSS for the NavBar

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" >
            <h1 className="logo">JobApp</h1>
            </Link>
               
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                        Home 
                        </Link>
                    </li> 
                    <li>
                        <Link to="/jobs">
                        Jobs 
                        </Link>
                    </li> 
                    <li>
                        <Link to="/about">
                        About us
                        </Link>
                    </li> 
                    <li>
                        <Link to="/contact">
                        Contact us
                        </Link>
                    </li> 
                </ul>
            </div>
        </nav>
    );
}

export default Header;
