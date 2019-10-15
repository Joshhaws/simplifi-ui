import React, { Component } from 'react';
import './Dashboard.scss';
import { Link, Route, Switch } from 'react-router-dom';
import PlaidLink from 'react-plaid-link';

import Budget from '../Budget/Budget';
import Reports from '../Reports/Reports';
import Accounts from '../Accounts/Accounts';
import { MdAddCircleOutline } from 'react-icons/md';
import PlaidService from '../../Services/PlaidService';
import Loading from '../../components/Loading/Loading'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      accounts: [
          {
            name: 'ally',
            balance: 1000
          }
      ]
    };
  }
    handleOnSuccess(token, metadata) {
        // console.log(token);
        // console.log(metadata);
        // console.log('success ya nerd');
        PlaidService.get_access_token(token, metadata).then(response => {
            if(response.status === 200) {
                console.log(response);
            }
            else {
                return this.setState({ 
                    error : 'some plaid error.',
                    loading : false
                })
            }
        })
        // send token to client server
        // on succces we get back public token from plaid
        // when we get public token we then send it to plaid
        // plaid will send back an access token
        // also will return item id
        
        // /item/public_token/exchange -- to exchange public for access token

        // function to make api call to plaid
    }
    handleOnExit() {
        console.log('exit ya nerd');
        // handle the case when your user exits Link
    }
    componentDidMount() {
      setTimeout(() => { 
        this.setState(() => ({loading: false}))
      }, 1000)
    }
    render() {
      const { loading } = this.state


      if (loading === true) {
        return(<Loading />)
      }

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
              <div className="accounts-header">Accounts</div>
              <div className="accounts-sidebar-container">
                {
                  this.state.accounts.length > 0 ? this.state.accounts.map(account => 
                    <Link to="/Dashboard/Accounts" className="account-container">
                      <div className="account-name">{account.name}</div>
                      <div className="account-balance">{account.balance}</div>
                    </Link>
                  ) : <div className="no-accounts">No accounts synced</div>
                }
              </div>
              <PlaidLink className="plaid-button"
                clientName="Simplifi"
                env="sandbox"
                product={["transactions"]}
                publicKey="343927daae82a5f17369b559b66a02"
                webhook="https://webhooks.test.com"
                onExit={this.handleOnExit}
                onSuccess={this.handleOnSuccess}
              >
                <MdAddCircleOutline className="plaid-button-icon"/>
                <span className="plaid-button-text">Add Account</span>
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