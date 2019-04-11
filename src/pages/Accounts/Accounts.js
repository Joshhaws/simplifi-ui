import React, { Component } from 'react';
import './Accounts.scss';

class Accounts extends Component {
    constructor(props) {
        super(props);

        // this should take the parameter of what is selected and query the transactions for that account(s)
        this.state = {
            accountTransactions: [
                {
                    payee: 'place',
                    date: '12/12/19',
                    amount: 10
                },
                {
                    payee: 'place',
                    date: '12/12/19',
                    amount: 10
                },
                {
                    payee: 'place',
                    date: '12/12/19',
                    amount: 10
                },
                {
                    payee: 'place',
                    date: '12/12/19',
                    amount: 10
                },
                {
                    payee: 'place',
                    date: '12/12/19',
                    amount: 10
                },
                {
                    payee: 'place',
                    date: '12/12/19',
                    amount: 10
                },
                {
                    payee: 'place',
                    date: '12/12/19',
                    amount: 10
                }
            ]
        };
    }

    render() {
        return(
            <div className="accounts-container">
                <div className="item accounts-header">Accounts</div>
                <div className="item accounts-content">
                    { 
                        this.state.accountTransactions.map(transaction => 
                            <div className="transaction-item">
                                <div>{transaction.date}</div>
                                <div>{transaction.payee}</div>
                                <div>{transaction.amount}</div>
                            </div>
                        ) 
                    }
                </div>
            </div>
        )
    }
}

export default Accounts;