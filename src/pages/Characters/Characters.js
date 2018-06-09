import React, { Component } from 'react';
import ApiService from '../../api/api.service';
import Sidebar from '../../components/Sidebar/Sidebar';
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';

class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                limit: 12,
                offset: 1,
                total: 0
            },
            orderBy: 'name',
            config: '',
            characterSelected: undefined
        }
    }

    componentDidMount() {
        ApiService().getData('characters', `limit=${this.state.pagination.limit}&offset=${this.state.pagination.offset}&nameStartsWith=spider`)
            .then(response => {
                if (response.status !== 200) throw new Error('Error');
                return response.json();
            })
            .then(response => {
                console.log(response);
                this.setState((prevState) => ({
                    data: response.data.results,
                    config: response.attributionText,
                    pagination: {...prevState.pagination, total: response.data.total }
                }));
            })
            .catch(err => {
                console.log('error', err);
            });
    }

    selectedCharacter = (id) => {
        this.setState({
            characterSelected: this.state.data.find(el => el.id === id)
        });
    }

    clearSelectedCharacter = () => {
        this.setState({
            characterSelected: undefined
        });
    }

    render() {
        return (
            <div className="pos_relative">
                <Sidebar />
                <div className="container__cards">
                    {
                        this.state.data.map((character) => {
                            return <Card key={character.id}
                                        selectedCharacter={this.selectedCharacter}
                                        data={{id: character.id, name: character.name, thumbnail: character.thumbnail}} />
                        })
                    }
                </div>
                <CharacterInfo data={this.state.characterSelected} close={this.clearSelectedCharacter}/>
                <Pagination data={this.state.pagination}/>
            </div>
        );
    }
}

export default Characters;