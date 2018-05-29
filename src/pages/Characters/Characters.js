import React, { Component } from 'react';
import ApiService from '../../api/api.service';

class Characters extends Component {

    componentDidMount() {
        ApiService().getData('characters')
            .then(response => {
                if (response.status !== 200) throw new Error('Error');
                return response.json();
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log('error', err);
            })
    }

    render() {
        return (
            <div>
                Characters
            </div>
        );
    }
}

export default Characters;