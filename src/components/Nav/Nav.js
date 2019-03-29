import React, { Component } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
class Nav extends Component {

    state = {
        windowWidth : window.innerWidth,
        toggle : false,
        closing : false
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    
    handleResize = () => {
        this.setState({windowWidth: window.innerWidth});
    }
    
    handleToggle = () => {
        const { toggle } = this.state
        if(toggle){
            this.setState({ closing : true }, () => {
                setTimeout(()=> {
                    this.setState(prevState => ({ 
                        toggle : !prevState.toggle,
                        closing : false
                    }))
                }, 300)
            })
        }
        else{
            this.setState(prevState => ({ toggle : !prevState.toggle }))
        }
    }

    mobileNavigationLinks = () => {
        const { toggle, closing } = this.state
        return (
            <div className='mobile-nav'>
                <div className='mobile-nav__left'>
                    <Link to ="/" className="mobile-nav__left-title">
                        <img className="mobile-nav__left-title-logo" src="logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className='mobile-nav__right'>
                    <div class={`hamburger hamburger--slider ${toggle ? ' is-active': ''}`} onClick={this.handleToggle}>
                        <div class='hamburger-box'>
                            <div class='hamburger-inner'></div>
                        </div>
                    </div>
                    { toggle && 
                        <div className={`mobile-nav__right-links ${closing ? ' closing' : ''}`}>
                            <Link to='/about' className='mobile-nav__right-links-link'>About</Link>
                            <Link to='/contact' className='mobile-nav__right-links-link'>Contact</Link>
                            <Link to='/register' className='mobile-nav__right-links-link'>Register</Link>
                            <Link to='/login' className='mobile-nav__right-links-link' onClick={this.handleToggle}>Login</Link>
                        </div>
                    }
                </div>
            </div>
        )
    }

    mainNavigationLinks = () => {
        return(
            <div className="main-nav">
                <div className="main-nav-left">
                    <Link to ="/" className="main-nav-title">
                        <img className="nav-logo" src="logo.svg" alt="logo" />
                    </Link>
                    <Link to="/about" className="main-nav-about">About</Link>
                    <Link to="/contact" className="main-nav-contact">Contact</Link>
                </div>
                <div className="main-nav-right">
                    <Link to="/register" className="main-nav-sign-up">Sign Up</Link>
                    <Link to="/login" className="main-nav-login">Login</Link>
                </div>
            </div>
        )
    }

    render(){
        const { windowWidth } = this.state
        console.log(windowWidth)
        return(
            <div className='nav-container'>
                { windowWidth <= 768 ? this.mobileNavigationLinks() : this.mainNavigationLinks() }
            </div>
        )
    }
}

export default Nav;