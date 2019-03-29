import React, { Component } from 'react';
import './Reports.scss';

class Reports extends Component {
    render() {
        return(
            <div className="reports-container">
                <div className="item reports-header">Header</div>
                <div className="item reports-content">Content</div>
                <div className="item reports-sidebar">Sidebar</div>
            </div>
        )
    }
}

export default Reports;