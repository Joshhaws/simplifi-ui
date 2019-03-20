import React, { Component } from 'react';
import './Dashboard.scss';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: []
        };
        this.getAccounts();
    }

    getAccounts() {
        axios.get('https://api.youneedabudget.com/v1/budgets/95ae0cb7-6614-4368-8a26-9e0a166ab0c4?access_token=b3e66bbc31ae2db2bc470423f088bc5d7c83b7d95150b992025997ae48cb5d05', {headers: {'Access-Control-Allow-Origin': '*'}})
        .then(res => {
            this.setState({accounts: res.data.data.budget.accounts});
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <div className="body-content">
                <div>hello1111</div>
                <div>
                    { this.state.accounts.map(account => <div>{account.name} {account.balance}</div>) }
                </div>
                
            </div>
        )
    }
}

export default Dashboard;