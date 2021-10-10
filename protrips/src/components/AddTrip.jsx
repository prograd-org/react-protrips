import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddTrip extends Component {
    render() {
        return (
            <div className="trip">
                <p className="headAT">Add a Trip</p>
                <label htmlFor="">Date:</label>
                <input type="date" name="" id="" />
                <label htmlFor="">Place:</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Type:</label>
                <select name="" id="">
                    <option value="">Trek</option>
                    <option value="">Club</option>
                    <option value="">Tropic</option>
                </select>
                <Link to="/display" className="submitAT">Submit</Link>
            </div>
        )
    }
}
