import React from 'react';
import { FaBars } from 'react-icons/fa';
import './nav-main.css';

const NavMain = () => {
    return (
        <div className="nav-main">
            <div className="container-fluid d-flex">
                <div className="nav-left">
                    <div className="nav-hamburger-menu">
                        <i className="hm-icon">
                            <FaBars />
                        </i>
                        <span className="hm-icon-label">All</span>
                    </div>
                </div>
                <div className="nav-fill">
                    <div className="nav-shop-container">
                        <div className="nav-shop">
                            <a href="/" className="nav-a">Today's Deals</a>
                            <a href="/" className="nav-a">Customer Service</a>
                            <a href="/" className="nav-a">Registry</a>
                            <a href="/" className="nav-a">Gift Cards</a>
                            <a href="/" className="nav-a">Sell</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMain