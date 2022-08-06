import React, { Component } from 'react';

import './ListComponent.css'
let trips = {};
class ListComponent extends Component {
    constructor(props) {
        super(props);
        trips = props.data;
    }
    render() {
        return (
            <div className="list-component">
                <div className='head-text'>All Trips</div>
                <table>
                    <tbody>
                        <tr><th>Date</th><th>Place</th><th>Type</th></tr>
                        {
                            Object.keys(trips).map(function (key) {
                                return (
                                    <tr><td>{key}</td><td>{trips[key].place}</td><td>{trips[key].type}</td></tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <span className='filter'>Filter by: All • Treks • Clubs • Tropics</span>
            </div>
        );
    }
}

export default ListComponent;