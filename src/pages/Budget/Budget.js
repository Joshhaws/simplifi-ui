import React, { Component } from 'react';
import './Budget.scss';
import CategoryGroup from '../../components/CategoryGroup/CategoryGroup';
import { Doughnut } from 'react-chartjs-2';

class Budget extends Component {
    constructor(props) {	
        super(props);
        // this is mock data and this will eventually be populated with api call, good to work through this and figure out what we need to make
        // api response reflec this
        this.state = {
            sidebarData: {
                datasets: [{
                    data: [900, 400],
                    backgroundColor: [
                        '#3ec556',
                        "rgba(0,0,0,0)",
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
            },
            sidebarOptions: {
                cutoutPercentage: 80,
            },
            selected: {
                name: 'test',
                budgeted: 4000,
                activity: 2500,
                available: 1500,
                transactions: []
            },
            category_groups: [
                {
                    name: 'Monthly Obligations',
                    budgeted: 4000,
                    activity: 2500,
                    available: 1500,
                    categories: [
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        }
                    ],
                    transactions: [
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        }
                    ]
                },
                {
                    name: 'Non-Monthly',
                    budgeted: 4000,
                    activity: 3500,
                    available: 1500,
                    categories: [
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        }
                    ],
                    transactions: [
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        }
                    ]
                },
                {
                    name: 'The Future (Goals)',
                    budgeted: 4000,
                    activity: 2500,
                    available: 1100,
                    categories: [
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        }
                    ],
                    transactions: [
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        }
                    ]
                },
                {
                    name: 'The Future (Long Term Saving)',
                    budgeted: 4000,
                    activity: 500,
                    available: 175,
                    categories: [
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ],
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200,
                            transactions: [
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                },
                                {
                                    date: '10/4',
                                    payee: 'Mcdonalds',
                                    amount: 789
                                }
                            ]
                        }
                    ],
                    transactions: [
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        },
                        {
                            date: '10/4',
                            payee: 'Mcdonalds',
                            amount: 789
                        }
                    ]
                }
            ]	
        };	
    }

    // I'm wondering if we call this to set the state, so we aren't hard coding the initial values
    // The default selected entity for the sidebar should be an aggregate of the entire budget, so you can see overall recent transactions
    // selected a category group row will show you aggregate information about that category group
    // single category will show you information for that category
    // wondering if data should all get pulled in one initial call - or how to breakdown api calls
    selectCategory(selected) {
        console.log('fire it up');
        this.setState({
            sidebarData: {
                datasets: [{
                    data: [selected.available, selected.activity],
                    backgroundColor: [
                        '#3ec556',
                        "rgba(0,0,0,0)",
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
            },
            selected: {
                name: selected.name,
                budgeted: selected.budgeted,
                activity: selected.activity,
                available: selected.available,
                transactions: selected.transactions
            }
        });
    }
    
    render() {
        return(
            <div className="budget-container">
                <div className="item budget-header">Budget</div>
                <div className="item budget-content">
                    <div className="category-container">
                        { this.state.category_groups.map(category_group => <CategoryGroup selectCategory={this.selectCategory.bind(this)} group={category_group} />) }
                    </div>
                </div>
                <div className="item budget-sidebar">
                    <div className="budget-sidebar-title">{this.state.selected.name}</div>
                    <div className="arc-series-container">
                        <Doughnut 
                            data={this.state.sidebarData} 
                            border-width={0}
                            options={this.state.sidebarOptions}
                        />
                    </div>
                    <div className="budget-sidebar-transactions-container">
                        <div className="budget-sidebar-transactions-title">Recent Transactions</div>
                        <div className="budget-sidebar-transactions-header">
                            <div>Date</div>
                            <div>Payee</div>
                            <div>Amount</div>
                        </div>
                        {
                            this.state.selected.transactions.length > 0 ? this.state.selected.transactions.map(transaction => 
                                <div className="budget-sidebar-transaction">
                                    <div>{transaction.date}</div>
                                    <div>{transaction.payee}</div>
                                    <div>{transaction.amount}</div>
                                </div>
                            ) : <div className="no-transactions">No transaction Available</div>
                        }
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Budget;