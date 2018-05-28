import React, { Component } from 'react';

import Routes from '../../Routes';

class PageError extends Component {

    validateRender = (currentPathname) => {
        const index = Routes.findIndex(el => el.path === currentPathname);
        return index === -1;
    }

    render() {
        const content = this.validateRender(this.props.location.pathname) ? (
            <div>
                <button onClick={() => this.props.history.goBack()}>Return</button>
            </div>
        ) : '';
        return content;
    }
}

export default PageError;