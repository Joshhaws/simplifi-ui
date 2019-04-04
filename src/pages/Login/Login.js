import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import AuthService from '../../Services/AuthService';


class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading : false
    };

    dismissError = () => {
        this.setState({ error: '' });
    }
    
    handleSubmit = (evt) => {
        evt.preventDefault();

        const { email, password } = this.state
        

        if (!email) {
            return this.setState({ error: 'Email is required' });
        }

        if (!password) {
            return this.setState({ error: 'Password is required' });
        }
        this.setState({ loading : true })
        AuthService.login(email, password).then(response => {
            if(response.status === 200){
                this.setState({ loading : false }, () => {
                    this.props.history.push("/dashboard/budget");
                })
            }
            else{
                return this.setState({ 
                    error : 'Invalid Username or Password dingus.',
                    loading : false
                })
            }
        })
    }

    handleUserChange = (evt) => {
        this.setState({
            email: evt.target.value,
        });
    };

    handlePassChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    }
    
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
                        <div className="login-form-links">
                            <Link className="register-link" to="/register">Need an Account?</Link>
                            <Link className="reset-link" to="/resetpassword">Forgot Password?</Link>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            {
                                this.state.error &&
                                <h3 data-test="error" onClick={this.dismissError}>
                                <button onClick={this.dismissError}>✖</button>
                                {this.state.error}
                                </h3>
                            }
                            <div className="email-login-input-container">
                                <div className="email-input-label">Email</div>
                                <input className="email-input-field" data-test="username" value={this.state.email} onChange={this.handleUserChange} placeholder="you@email.com"></input>
                            </div>
                            
                            <div className="password-login-input-container">
                                <div className="password-input-label">Password</div>
                                <input className="password-input-field" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="Password"></input>
                            </div>
                            
                            <div className="login-button-container">
                                <input type="submit" className="login-button" data-test="submit" value="Login to Simplifi" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;