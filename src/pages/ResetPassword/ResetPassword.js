import React, { Component } from 'react';
import './ResetPassword.scss';
import axios from 'axios';

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