import React from 'react';

import Menu from '../layout/Menu';

class NotFound extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
        };
    }

    render () {
        return (
            <div>
                <Menu/>              
                <h3>Página no se encuentra</h3>>
            </div>
        )
    }
}

export default NotFound;
