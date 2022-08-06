import React, { Component } from 'react';

import './ListComponent.css'
let trips = {};
class ListComponent extends Component {
    constructor(props) {
        super(props);
        trips = props.data;
        this.state = {
            filteredTrips: trips
        }
    }
    render() {
        return (
            <div className="list-component">
                <div className='head-text'>All Trips</div>
                <table>
                    <tbody>
                        <tr><th>Date</th><th>Place</th><th>Type</th></tr>
                        {
                            Object.keys(this.state.filteredTrips).map(function (key) {
                                return (
                                    <tr><td>{key}</td><td>{trips[key].place}</td><td>{trips[key].type}</td></tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <span className='filter'>Filter by: 
                <span className='filter-buttons'
                    onClick={
                        () => this.setState({filteredTrips: trips})
                    }
                >All</span> • 
                <span className='filter-buttons'
                    onClick={() => {
                        let tempFilter = {}
                        Object.keys(trips).forEach(key => {
                            if(trips[key].type === 'Trek'){
                                tempFilter[key] = trips[key]
                            }
                        })
                        this.setState(
                            {filteredTrips: tempFilter}
                        )
                    }}
                >Treks</span> • 
                <span className='filter-buttons'
                    onClick={() => {
                        let tempFilter = {}
                        Object.keys(trips).forEach(key => {
                            if(trips[key].type === 'Club'){
                                tempFilter[key] = trips[key]
                            }
                        })
                        this.setState(
                            {filteredTrips: tempFilter}
                        )
                    }}
                >Clubs</span> • 
                <span className='filter-buttons'
                    onClick={() => {
                        let tempFilter = {}
                        Object.keys(trips).forEach(key => {
                            if(trips[key].type === 'Tropic'){
                                tempFilter[key] = trips[key]
                            }
                        })
                        this.setState(
                            {filteredTrips: tempFilter}
                        )
                    }}
                >Tropics</span></span>
            </div>
        );
    }
}

export default ListComponent;