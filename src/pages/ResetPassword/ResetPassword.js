import React, { Component } from 'react';
import './ResetPassword.scss';
import { Link } from 'react-router-dom';

class ResetPassword extends Component {

    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="login-title">
                        <img src="logo.svg" alt="logo" />
                    </div>
                    <div className="login-message">
                        <div className="welcome">Oh No.</div>
                        <div className="welcome-sub">Input email for password reset.</div>
                    </div>
                    <div className="login-form-container">
                        <div className="reset-form-links">
                            <Link className="register-link" to="/register">Need an Account?</Link>
                            <Link className="login-link" to="/login">Login?</Link>
                        </div>
                        <form>
                            <div className="email-login-input-container">
                                <div className="email-input-label">Email</div>
                                <input className="email-input-field" placeholder="you@email.com"></input>
                            </div>
                            
                            <div className="login-button-container">
                                <input type="submit" className="login-button" value="Send Reset Email" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword;