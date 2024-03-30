import React, { useState } from "react";
import { Link } from "react-router-dom";
import './gptNavbar.css'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Beste klubben i verden!
                </Link>
                <div
                    className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
                    onClick={toggleMobileMenu}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={toggleMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/publicnews"
                            className="nav-links"
                            onClick={toggleMobileMenu}
                        >
                            Public News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/tariffavtalen"
                            className="nav-links"
                            onClick={toggleMobileMenu}
                        >
                            Tariffavtalen
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/members"
                            className="nav-links"
                            onClick={toggleMobileMenu}
                        >
                            Members
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className="nav-links"
                            onClick={toggleMobileMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;