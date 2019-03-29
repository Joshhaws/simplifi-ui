import React, { Component } from 'react';
import './Budget.scss';

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    name: 'Monthly Obligations',
                    budgets: [
                        {
                            name: 'grocery',
                            amount: 500

                        },
                        {
                            name: 'transporation',
                            amount: 150
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
                    <div>
                        { this.state.categories.map(category => <div>{category.name}</div>) }
                    </div>
                </div>
                <div className="item budget-sidebar">Sidebar</div>
            </div>

        )
    }
}

export default Budget;