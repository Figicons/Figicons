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
                <Link to={'/getting-started'}>Building custom icons</Link>
                <Link to={'/usage'}>Usage</Link>
                <Link to={'/'}>FAQ</Link>
                <div className="button small grey">Designer Pack</div>
            </div>
        </div>
    </nav>
);

export default Nav;
