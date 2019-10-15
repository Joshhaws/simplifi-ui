import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Loading from '../../components/Loading/Loading'

import './Reports.scss';

const data = {
    labels: [
        'Available',
        'Used',
    ],
    datasets: [{
        data: [900, 400],
        backgroundColor: [
            '#FF6384',
            "rgba(0,0,0,0)",
        ],
        borderWidth: [
            0, 0
        ]
    }]
};

const options = {
    cutoutPercentage: 80,
}

class Reports extends Component {
    constructor(props){
        super(props);

        this.state={
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => { 
            this.setState(() => ({loading: false}))
        }, 1000)
    }

    render() {
        const { loading } = this.state

        if (loading === true) {
            return(<Loading />)
        }

        return(
            <div className="reports-container">
                <div className="item reports-header">Reports</div>
                <div className="item reports-content">
                    <Doughnut 
                        data={data} 
                        border-width={0}
                        options={options}
                    />
                    <div>http://gor181.github.io/react-chartjs-2/</div>
                </div>
                <div className="item reports-sidebar">Sidebar</div>
            </div>
        )
    }
}

export default Reports;