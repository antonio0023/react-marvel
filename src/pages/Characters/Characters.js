import React, { Component } from 'react';
import ApiService from '../../api/api.service';
import Sidebar from '../../components/Sidebar/Sidebar';
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';

class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                perPage: 12,
                offset: 0,
                total: 0
            },
            orderBy: '',
            search: '',
            config: '',
            comics: [],
            characterSelected: undefined,
            loading: true
        }
        this.sidebarActions = {
            comic: this.comicSelected,
            search: this.getData,
            order: this.getData
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async (search, orderBy, isOrder) => {
        await this.setState((prevState) => ({
            loading: true,
            search: isOrder ? prevState.search : search,
            orderBy: orderBy ? '-name' : 'name'
        }));

        let query = this.state.search ? `&nameStartsWith=${this.state.search}` : '';
        query += this.state.comics.length ? `&comics=${this.state.comics.join()}` : '';
        query += `&orderBy=${this.state.orderBy}&limit=${this.state.pagination.perPage}&offset=${this.state.pagination.offset}`;

        ApiService().getData('characters', query)
        .then(response => {
            if (response.status !== 200) throw new Error('Error');
            return response.json();
        })
        .then(response => {
            this.setState((prevState) => ({
                data: response.data.results,
                config: response.attributionText,
                pagination: {...prevState.pagination, total: response.data.total },
                loading: false
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

    pageSelected = (currentPage) => {
        console.log('offset', currentPage);
    }

    comicSelected = (idComic, isDeselected) => {
        if (isDeselected) {
            this.setState((prevState) => ({
                comics: prevState.comics.filter(el => el !== idComic)
            }));
        } else {
            this.setState((prevState) => ({
                comics: prevState.comics.concat(idComic)
            }));
        }
        this.getData();
    }

    render() {
        const paginationAux = {
            perPage: 100,
            offset: 0,
            total: 1491
        };

        return (
            <div className="pos_relative">
                <Sidebar actions={this.sidebarActions}/>
                <div className="container__cards">
                    {this.state.loading ? <Loading /> :
                        <React.Fragment>
                            {this.state.data.map((character) => {
                                return <Card key={character.id}
                                            selectedCharacter={this.selectedCharacter}
                                            data={{id: character.id, name: character.name, thumbnail: character.thumbnail}} />
                                })
                            }
                        </React.Fragment>
                    }
                </div>
                <CharacterInfo data={this.state.characterSelected} close={this.clearSelectedCharacter}/>
                <Pagination pageSelected={this.pageSelected} data={paginationAux}/>
                {/* <Pagination pageSelected={this.pageSelected} data={this.state.pagination}/> */}
            </div>
        );
    }
}

export default Characters;