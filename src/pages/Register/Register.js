import React, { Component } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

class Register extends Component {

    render() {
        return(
            <div className="body-content">
                <div className="register-container">
                    <div className="register-title">
                        <img src="logo.svg" alt="logo" />
                    </div>
                    <div className="register-message">
                        <div className="welcome">Welcome.</div>
                        <div className="welcome-sub">Sign up for awesomeness.</div>
                    </div>
                    <div className="register-form-container">
                        <div className="register-form-links">
                            <Link className="login-link" to="/login">Login?</Link>
                        </div>
                        <form>
                            <div className="email-register-input-container">
                                <div className="email-input-label">Email</div>
                                <input className="email-input-field" placeholder="you@email.com"></input>
                            </div>
                            
                            <div className="password-register-input-container">
                                <div className="password-input-label">Password</div>
                                <input className="password-input-field" placeholder="Password"></input>
                            </div>

                            <div className="password-register-input-container">
                                <div className="password-input-label">Confirm Password</div>
                                <input className="password-input-field" placeholder="Password"></input>
                            </div>
                            
                            <div className="register-button-container">
                                <input type="submit" className="register-button" value="Sign up for Simplifi" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;