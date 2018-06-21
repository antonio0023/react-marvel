import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import ApiService from '../../api/api.service';
import InputSearch from '../../components/InputSearch/InputSearch';
import Pagination from '../../components/Pagination/Pagination';
import './Series.css';

class Series extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                perPage: 1,//48,
                offset: 0,
                total: 0
            },
            search: '',
            loading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async (search) => {
        await this.setState({
            loading: true,
            search
        });

        let query = this.state.search ? `&titleStartsWith=${this.state.search}` : '';
        query += `&orderBy=-startYear&limit=${this.state.pagination.perPage}&offset=${this.state.pagination.offset}`;

        ApiService().getData('series', query)
        .then(response => {
            if (response.status !== 200) throw new Error('Error');
            return response.json();
        })
        .then(response => {
            console.log(response.data.results);
            this.setState((prevState) => ({
                data: response.data.results,
                pagination: {...prevState.pagination, total: response.data.total },
                loading: false
            }));
        })
        .catch(err => {
            console.log('error', err);
        });
    }

    render() {
        return (
            <div className="container-creators">
                <InputSearch className="input__group--creators" placeHolder="Title starts with" onSearch={this.getData}/>
                <div className="container__cards container__cards--creators">
                    {this.state.loading ? <Loading /> :
                        <React.Fragment>
                            <div className="card-tv">
                                <img className="card__image" src="https://i.annihil.us/u/prod/marvel/i/mg/9/e0/575ef296bfd40/standard_fantastic.jpg" alt="Spider-man"/>
                                <div className="card-tv__info">
                                    <h4 className="card-tv__title">The Amazing Spider-Man</h4>
                                    <button className="card-tv__button"><i className="material-icons">power_settings_new</i></button>
                                </div>
                            </div>
                            {/* {this.state.data.map(creator =>
                                <div key={creator.id} className="card card--creator" data-id={creator.id} onClick={() => this.toggleClassActive(creator.id)}>
                                    <img className="card__image" src={`${creator.thumbnail.path}/standard_large.${creator.thumbnail.extension}`} alt={creator.fullName}/>
                                    <h3 className="card__title card__title--creator">{creator.fullName ? creator.fullName : 'NAMELESS'}</h3>
                                    <div className="card__information">
                                        <h4>comics</h4>
                                        <ul>
                                            {creator.comics.items.map((el, index) => <li key={index}>{el.name}</li>)}
                                        </ul>
                                        <h4>stories</h4>
                                        <ul>
                                            {creator.stories.items.map((el, index) => <li key={index}>{el.name}</li>)}
                                        </ul>
                                        <a className="card-creator__link" href={creator.urls[0].url} target="blank">{creator.urls[0].type}</a>
                                    </div>
                                </div>
                            )} */}
                        </React.Fragment>
                    }
                </div>
                <Pagination className="pagination-creators" pageSelected={this.pageSelected} data={this.state.pagination}/>
            </div>
        );
    }
}

export default Series;