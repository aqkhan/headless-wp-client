import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header" className="alt">
                <Link to="/" className="logo"><strong>Headless WP</strong> <span>by AQ KHAN</span></Link>
            </header>
        );
    }
}

export default Header;