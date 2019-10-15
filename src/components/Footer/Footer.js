import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render(){
        return(
            <div className="footer-nav">
                <Link to="/about" className="footer-nav-item">About</Link>
                <Link to="/contact" className="footer-nav-item">Contact</Link>
            </div>
        )
    }
}

export default Footer;