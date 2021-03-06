import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header bg-dark d-flex'>
            <img src={logo} alt='' />
            <div className='menuItem'>
            <Link  to="/shop">Shop</Link>
            <Link  to="/order">Orders</Link>
            <Link  to="/inventory">Inventory</Link>
            <Link  to="/shipment">Shipment</Link>
            <Link  to="/login">Login</Link>
            <Link  to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;