import React, { Component } from 'react';
import './Dashboard.scss';
import axios from 'axios';

class Dashboard extends Component {
    render() {
        return(
            <div className="body-content">
                <div className="dashboard-container">
                    <div className="item profile">Profile</div>
                    <div className="item nav">Nav</div>
                    <div className="item accounts">Accounts</div>
                    <div className="item header">Heade</div>
                    <div className="item content">Content</div>
                    <div className="item sidebar">Side Content</div>
                </div>
            </div>
        )
    }
}

export default Dashboard;