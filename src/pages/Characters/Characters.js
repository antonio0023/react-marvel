import React, { Component } from 'react';
import ApiService from '../../api/api.service';
import Sidebar from '../../components/Sidebar/Sidebar';
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Pagination from '../../components/Pagination/Pagination';

class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                limit: 10
            },
            orderBy: 'name'
        }
    }

    componentDidMount() {
        ApiService().getData('characters', `limit=${this.state.pagination.limit}`)
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
                <Sidebar />
                Characters
                <CharacterInfo />
                <Pagination />
            </div>
        );
    }
}

export default Characters;