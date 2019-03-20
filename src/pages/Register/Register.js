import React, { Component } from 'react';
import './Register.scss';

class Register extends Component {
    ding(e) {
        console.log('test');
        e.preventDefault();
    }

    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="left-section">
                        <div className="left-section-content">
                            <div className="left-top">
                                <div className="login-title">Register</div>
                                {/* <Link to="/register" className="secondary-link">Create Account</Link> */}
                            </div>
                            
                            <div>
                                <form onSubmit={this.ding}>
                                    <input className="input-field"></input>
                                    <div className="input-label">Username</div>
                                    <input type="password" className="input-field"></input>
                                    <div className="input-label">Password</div>
                                    <input type="password" className="input-field"></input>
                                    <div className="input-label">Confirm Password</div>
                                    <input type="submit" className="login-button" value="Sign Up" />
                                </form>
                                
                                {/* <button onClick={this.ding} className="login-button">Sign Up</button> */}
                            </div>        
                        </div>
                    </div>
                    <div className="right-section">
                        <img className="right-section-logo" src="logo.svg" alt="logo" />
                        <div className="right-section-content">Command Center</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;