import React, { Component } from 'react';
import './Budget.scss';

class Budget extends Component {
    state = {
        sidebar: 'stuff'
    }
 
    selectCategory = (val) => {
        this.setState({sidebar: val});
    }

    render() {
        return(
            <div className="budget-container">
                <div className="item budget-header">Budget</div>
                <div className="item budget-content">
                    <div className="category-container">
                        {/* TODO - we should build this out as component... feeling tired so I'll do it later :) lol */}
                        <div className="category-group-title-container" onClick={() => this.selectCategory('monthly obligations')}>
                            <div className="category-group-title">Monthly Obligations</div>
                            <div className="category-group-budgeted">$4,000</div>
                            <div className="category-group-activity">$3,500</div>
                            <div className="category-group-available">$500</div>
                        </div>
                        <div className="category-item" onClick={() => this.selectCategory('friggin groceries')}>
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-group-title-container">
                            <div className="category-group-title">Monthly Obligations</div>
                            <div className="category-group-budgeted">$4,000</div>
                            <div className="category-group-activity">$3,500</div>
                            <div className="category-group-available">$500</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-group-title-container">
                            <div className="category-group-title">Monthly Obligations</div>
                            <div className="category-group-budgeted">$4,000</div>
                            <div className="category-group-activity">$3,500</div>
                            <div className="category-group-available">$500</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-group-title-container">
                            <div className="category-group-title">Monthly Obligations</div>
                            <div className="category-group-budgeted">$4,000</div>
                            <div className="category-group-activity">$3,500</div>
                            <div className="category-group-available">$500</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                        <div className="category-item">
                            <div className="category-title">Grocery</div>
                            <div className="category-budgeted">$500</div>
                            <div className="category-activity">$300</div>
                            <div className="category-available">$200</div>
                        </div>
                    </div>
                </div>
                <div className="item budget-sidebar">{this.state.sidebar}</div>
            </div>

        )
    }
}

export default Budget;