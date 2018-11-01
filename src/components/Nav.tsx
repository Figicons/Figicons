import * as React from 'react';
import { Link } from 'react-router-dom';
import logotype from '../assets/logotype.svg';

const Nav = () => (
    <nav>
        <div className="mw8 center">
            <Link to={'/'} className="logo">
                <img src={logotype} height="22" />
                <code className="tiny">1.0.0</code>
            </Link>
            <div className="options">
                <Link to={'/'}>Icons</Link>
                <Link to={'/getting-started'}>Getting started</Link>
                <Link to={'/usage'}>Usage</Link>
                <div className="button small grey">Designer Pack</div>
            </div>
        </div>
    </nav>
);

export default Nav;
