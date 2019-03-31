import React, { Component } from 'react';
// import { Doughnut } from 'react-chartjs-2';

import './Reports.scss';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
    }]
};

class Reports extends Component {
    render() {
        return(
            <div className="reports-container">
                <div className="item reports-header">Reports</div>
                <div className="item reports-content">
                    {/* <Doughnut data={data} /> */}
                    <div>http://gor181.github.io/react-chartjs-2/</div>
                </div>
                <div className="item reports-sidebar">Sidebar</div>
            </div>
        )
    }
}

export default Reports;