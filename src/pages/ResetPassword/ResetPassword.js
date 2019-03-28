import React, { Component } from 'react';
import './ResetPassword.scss';
import axios from 'axios';

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        axios.get('https://api.youneedabudget.com/v1/budgets/95ae0cb7-6614-4368-8a26-9e0a166ab0c4?access_token=b3e66bbc31ae2db2bc470423f088bc5d7c83b7d95150b992025997ae48cb5d05', {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(res => {
                console.log(res['data']);
                // if (this.state.username === 'josh' && this.state.password === 'example1') {
                //     console.log('testestsetestes');
                //     window.location = "/Dashboard";
                // };
            })
            .catch(err => {
                console.log(err);
            });
        event.preventDefault();
    }

    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="left-section">
                        <div className="left-section-content">
                            <div className="left-top">
                                <div className="login-title">Forgot Password</div>
                            </div>
                            
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" className="input-field" value={this.state.username} onChange={this.handleUsernameChange}></input>
                                    <div className="input-label">Email</div>
                                    <input type="submit" className="login-button" value="Send Reset Instructions"/>
                                </form>
                            </div>        
                        </div>
                    </div>
                    <div className="right-section">
                        <img className="right-section-logo" src="logo.svg" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword;