import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {

    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="login-title">
                        <img src="logo.svg" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;