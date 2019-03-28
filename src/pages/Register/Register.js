import React, { Component } from 'react';
import './Register.scss';

class Register extends Component {

    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="login-title">
                        <img src="logo.svg" alt="logo" />
                    </div>
                    <div className="login-message">
                        <div className="welcome">Welcome.</div>
                        <div className="welcome-sub">Sign up for awesomeness.</div>
                    </div>
                    <div className="login-form-container">
                        <form>
                            <div className="email-login-input-container">
                                <div className="email-input-label">Email</div>
                                <input className="email-input-field" placeholder="you@email.com"></input>
                            </div>
                            
                            <div className="password-login-input-container">
                                <div className="password-input-label">Password</div>
                                <input className="password-input-field" placeholder="Password"></input>
                            </div>

                            <div className="password-login-input-container">
                                <div className="password-input-label">Confirm Password</div>
                                <input className="password-input-field" placeholder="Password"></input>
                            </div>
                            
                            <div className="login-button-container">
                                <input type="submit" className="login-button" value="Sign up for Simplifi" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;