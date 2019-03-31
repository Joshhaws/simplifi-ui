import React, { Component } from 'react';
import './Budget.scss';
import CategoryGroup from '../../components/CategoryGroup/CategoryGroup';


class Budget extends Component {
    constructor(props) {	
        super(props);
        this.state = {	
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
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        }
                    ]
                },
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
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        }
                    ]
                },
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
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        }
                    ]
                },
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
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        },
                        {
                            name: 'Groceries',
                            budgeted: 500,
                            activity: 300,
                            available: 200
                        }
                    ]
                }
            ]	
        };	
    }

    render() {
        return(
            <div className="budget-container">
                <div className="item budget-header">Budget</div>
                <div className="item budget-content">
                    <div className="category-container">
                        { this.state.category_groups.map(category_group => <CategoryGroup group={category_group} />) }
                    </div>
                </div>
                <div className="item budget-sidebar">
                    <div className="budget-sidebar-title">Budget Title</div>
                    <div className="budget-sidebar-transactions-title">Recent Transactions</div>
                    <div className="budget-sidebar-transactions-header">
                        <div>Date</div>
                        <div>Payee</div>
                        <div>Amount</div>
                    </div>
                    <div className="budget-sidebar-transaction">
                        <div>10/4</div>
                        <div>McDonalds</div>
                        <div>6.43</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Budget;