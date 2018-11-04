import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import GettingStarted from './components/BuildingIcons';
import Usage from './components/Usage';
import Footer from './components/Footer';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

history.listen(_ => {
    window.scrollTo(0, 0);
});

const Routes = () => (
    <Switch>
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/building-icons" render={props => <GettingStarted />} />
        <Route exact path="/usage" render={props => <Usage />} />
    </Switch>
);

ReactDOM.render(
    <Router history={history}>
        <React.Fragment>
            <Nav />
            <Routes />
            <Footer />
        </React.Fragment>
    </Router>,
    document.getElementById('app')
);
