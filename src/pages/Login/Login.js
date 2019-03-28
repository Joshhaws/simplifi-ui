import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="login-title">
                        <img src="logo.svg" alt="logo" />
                    </div>
                    <div className="login-message">
                        <div className="welcome">Hello.</div>
                        <div className="welcome-sub">Log in to view your stuff.</div>
                    </div>
                    <div className="login-form-container">
                        <div className="form-links">
                            <Link className="register-link" to="/register">Need an Account?</Link>
                            <Link className="reset-link" to="/resetpassword">Forgot Password?</Link>
                        </div>
                        <form>
                            <div className="email-login-input-container">
                                <div className="email-input-label">Email</div>
                                <input className="email-input-field" placeholder="you@email.com"></input>
                            </div>
                            
                            <div className="password-login-input-container">
                                <div className="password-input-label">Password</div>
                                <input className="password-input-field" placeholder="Password"></input>
                            </div>
                            
                            <div className="login-button-container">
                                <input type="submit" className="login-button" value="Login to Simplifi" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;