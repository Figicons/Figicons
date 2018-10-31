import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import How from './components/How';
import Usage from './components/Usage';
import Footer from './components/Footer';

const Routes = () => (
    <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/how" render={props => <How />} />
        <Route exact path="/usage" render={props => <Usage />} />
    </Switch>
);

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Nav />
            <Routes />
            <Footer />
        </React.Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
