import React, { Component } from 'react';
import { NavLink, Route, HashRouter } from 'react-router-dom';

import Routes from '../../Routes';
import PageError from '../../pages/Error/Error';

class Navbar extends Component {
    render() {
        return (
            <HashRouter>
                <React.Fragment>
                    <ul>
                        <NavLink activeClassName="link--active" to="/comics">Comics</NavLink>
                        <NavLink activeClassName="link--active" to="/series">Series</NavLink>
                    </ul>
                    <div className="main-container">
                        {Routes.map((route, index) => (
                            <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                        ))}
                        <Route component={PageError} />
                    </div>
                </React.Fragment>
            </HashRouter>
        );
    }
}

export default Navbar;