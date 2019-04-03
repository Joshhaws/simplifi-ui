import React, { Component } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassConfirmChange = this.handlePassConfirmChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }
    
    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.email) {
            return this.setState({ error: 'Email is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        if (!this.state.passwordConfirmation) {
            return this.setState({ error: 'Password Confirmation is required' });
        }

        if (this.state.password !== this.state.passwordConfirmation) {
            return this.setState({ error: 'Passwords do not match' });
        }
        
        axios.post('http://localhost:4000/api/users', { headers: {'Content-Type': 'application/json'}, "user" :{"email": this.state.email, "password": this.state.password }})
            .then(res => {
                console.log('in business');
                this.props.history.push("/dashboard/budget");
            });

        return this.setState({ error: '' });
    }

    handleUserChange(evt) {
        this.setState({
            email: evt.target.value,
        });
    }

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }
    handlePassConfirmChange(evt) {
        this.setState({
            passwordConfirmation: evt.target.value,
        });
    }

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
                        <form onSubmit={this.handleSubmit}>
                            {
                                this.state.error &&
                                <h3 data-test="error" onClick={this.dismissError}>
                                <button onClick={this.dismissError}>✖</button>
                                {this.state.error}
                                </h3>
                            }
                            <div className="email-register-input-container">
                                <div className="email-input-label">Email</div>
                                <input className="email-input-field" data-test="username" value={this.state.email} onChange={this.handleUserChange} placeholder="you@email.com"></input>
                            </div>
                            
                            <div className="password-register-input-container">
                            <div className="password-input-label">Password</div>
                                <input className="password-input-field" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="Password"></input>
                            </div>

                            <div className="password-register-input-container">
                            <div className="password-input-label">Password</div>
                                <input className="password-input-field" data-test="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handlePassConfirmChange} placeholder="Password"></input>
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