import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div className="footer-nav">
                <div className="footer-nav__left">
                    <Link to="/about" className="main-nav-about">About</Link>
                    <Link to="/contact" className="main-nav-contact">Contact</Link>
                </div>
            </div>
        )
    }
}

export default Footer;