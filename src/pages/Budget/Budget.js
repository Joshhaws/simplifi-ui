import React, { Component } from 'react';
import './Budget.scss';

class Budget extends Component {
    render() {
        return(
            <div className="budget-container">
                <div className="item budget-header">Header</div>
                <div className="item budget-content">Content</div>
                <div className="item budget-sidebar">Sidebar</div>
            </div>
        )
    }
}

export default Budget;