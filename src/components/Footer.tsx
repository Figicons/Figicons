import * as React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="mw7 center">
            <p>Made with L by Stefan</p>
            <div className="options">
                <Link to={'/getting-started'}>Getting started</Link>
                <Link to={'/usage'}>Usage</Link>
                <a>Download Designer Pack</a>
            </div>
        </div>
    </footer>
);

export default Footer;
