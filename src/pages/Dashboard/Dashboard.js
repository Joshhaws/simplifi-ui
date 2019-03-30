import React, { Component } from 'react';
import './Dashboard.scss';
import { Link, Route, Switch } from 'react-router-dom';
import PlaidLink from 'react-plaid-link';

import Budget from '../Budget/Budget';
import Reports from '../Reports/Reports';
import Accounts from '../Accounts/Accounts';

class Dashboard extends Component {
    handleOnSuccess(token, metadata) {
        console.log('success ya nerd');
        // send token to client server
    }
    handleOnExit() {
        console.log('exit ya nerd');
        // handle the case when your user exits Link
    }
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
                        {/* here at simplifi we hard code our public keys, that's how we roll */}
                        <PlaidLink
                            clientName="Simpli to the fi"
                            env="development"
                            product={["transactions"]}
                            publicKey="343927daae82a5f17369b559b66a02"
                            onExit={this.handleOnExit}
                            onSuccess={this.handleOnSuccess}
                        >
                            Connect your friggin account nerd
                        </PlaidLink>
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