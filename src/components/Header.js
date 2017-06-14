import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './../selectors';
import Events from './Events';
import { Link } from 'react-router-dom';
import { Button } from 'react-lightning-design-system';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <ul className="legend">
                    <li className="legend__item legend__item--webinar">webinar</li>
                    <li className="legend__item legend__item--event">event</li>
                    <li className="legend__item legend__item--deadline">deadline</li>
                    <li className="legend__item legend__item--lecture">lecture</li>
                    <li className="legend__item legend__item--workshop">workshop</li>
                </ul>
                <div className="header__btn-wrapper">
                    <Link to="/weekevents" className="header__btn">show week events</Link>
                    {
                        window.location.pathname !== '/' ? <Link to="../" className="header__btn">Back to calendar</Link> : null
                    }
                </div>
            </header>
        );
    }
}

export default connect(mapStateToProps)(Header);
