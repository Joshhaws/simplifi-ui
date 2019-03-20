import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <div className="main-nav">
                <div className="main-nav-left">
                    <img className="nav-logo" src="logo.svg" alt="logo" />
                    <Link to ="/" className="main-nav-title">Command Center</Link>
                    <Link to="/about" className="main-nav-about">About</Link>
                    <Link to="/contact" className="main-nav-contact">Contact</Link>
                </div>
                <div className="main-nav-right">
                    <Link to="/register" className="main-nav-about">Sign Up</Link>
                    <Link to="/login" className="main-nav-contact">Login</Link>
                </div>
            </div>
        )
    }
}

export default Nav;