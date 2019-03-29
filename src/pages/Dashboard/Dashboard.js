import React, { Component } from 'react';
import './Dashboard.scss';
import { Link, Route, Switch } from 'react-router-dom';

import Budget from '../Budget/Budget';
import Reports from '../Reports/Reports';
import Accounts from '../Accounts/Accounts';

class Dashboard extends Component {
    render() {
        return(
            <div className="body-content">
                <div className="dashboard-container">
                    <div className="item profile">
                        <Link to="/Profile">Profile</Link>
                    </div>
                    <div className="item nav">
                        <Link to="/Dashboard/Budget">Budget</Link>
                        <Link to="/Dashboard/Reports">Reports</Link>
                        <Link to="/Dashboard/Accounts">All Accounts</Link>
                    </div>
                    <div className="item accounts">
                        <div>Accounts</div>
                    </div>
                    <div className="item page-content">
                        <Switch>
                            <Route exact path="/Dashboard/Budget" component={Budget} />
                            <Route exact path="/Dashboard/Reports" component={Reports} />
                            <Route exact path="/Dashboard/Accounts" component={Accounts} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;