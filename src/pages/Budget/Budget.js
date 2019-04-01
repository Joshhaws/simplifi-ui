import React, { Component } from 'react';
import './Budget.scss';
import CategoryGroup from '../../components/CategoryGroup/CategoryGroup';
import { Doughnut } from 'react-chartjs-2';

class Budget extends Component {
    constructor(props) {	
        super(props);
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
                    name: 'Non-Monthly',
                    budgeted: 4000,
                    activity: 3500,
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
                    name: 'The Future (Goals)',
                    budgeted: 4000,
                    activity: 2500,
                    available: 1100,
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
                    name: 'The Future (Long Term Saving)',
                    budgeted: 4000,
                    activity: 500,
                    available: 175,
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

    selectCategory(selected) {
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
                available: selected.available
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