import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMountain, faBeer } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {
    render() {
        return (
            <>
                <p className="home"><span className="total">4</span>trips</p>
                <div className="trips">
                    <span>1<FontAwesomeIcon icon={faSun} /></span>
                    <span>2<FontAwesomeIcon icon={faMountain} /></span>
                    <span>1<FontAwesomeIcon icon={faBeer} /></span>
                </div>
            </>
        )
    }
}
