import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand" href="#">DM Tools</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/spells">Spells</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/monsters">Monsters</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}