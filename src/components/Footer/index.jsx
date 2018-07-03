import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    <ul className="copyright">
                        <li>&copy; Headless WP</li><li>By: <a href="http://aqkhan.ninja/" target="_blank">AQ KHAN</a></li><li>LOGIN: <a href="http://52.10.168.93/wp-admin" target="_blank">WP ADMIN</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;