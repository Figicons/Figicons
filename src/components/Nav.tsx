import * as React from 'react';
import { Link } from 'react-router-dom';
import logotype from '../assets/logotype.svg';
import * as pkg from '../../package.json';

const Nav = () => (
    <nav>
        <div className="mw8 center">
            <Link to={'/'} className="logo">
                <img src={logotype} height="22" />
                <code className="tiny">{(pkg as any).version}</code>
            </Link>
            <div className="options">
                <Link to={'/building-icons'}>Building custom icons</Link>
                <Link to={'/usage'}>Usage</Link>
                <Link to={'/'}>FAQ</Link>
                <div className="button small grey">Designer Pack</div>
            </div>
        </div>
    </nav>
);

export default Nav;
