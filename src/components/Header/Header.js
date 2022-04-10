import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header bg-dark d-flex'>
            <img src={logo} alt='' />
            <div className='menuItem'>
            <a className="nav-link" href="/shop">Shop</a>
            <a className="nav-link" href="/order">Orders</a>
            <a className="nav-link" href="/inventory">Inventory</a>
            <a className="nav-link" href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;