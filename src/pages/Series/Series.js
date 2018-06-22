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
                perPage: 48,
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

    toggleTurnTV = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div className="container-creators">
                <InputSearch className="input__group--creators" placeHolder="Title starts with" onSearch={this.getData}/>
                <div className="container__cards container__cards--series">
                    {this.state.loading ? <Loading /> :
                        <React.Fragment>
                            {this.state.data.map(serie =>
                                <div key={serie.id} className="card-device" data-id={serie.id}>
                                    <img className="card__image" src="https://i.annihil.us/u/prod/marvel/i/mg/9/e0/575ef296bfd40/standard_fantastic.jpg" alt="Spider-man"/>
                                    <div className="card__content-wrapper">
                                        <div className="card-device__content">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium in eum esse earum similique dolorum quae ipsam corrupti nisi aperiam, sed, alias iste tempora nulla aliquam molestiae repellat rem ipsa?
                                            Dignissimos officiis impedit in, veniam non eius. Mollitia exercitationem commodi similique, dolores animi voluptates. Culpa nostrum, nulla dicta accusantium earum nisi tempora perferendis officiis, voluptas minima, autem odit consectetur tenetur.
                                            Possimus magnam unde iure, voluptas eligendi veritatis. Harum quas, ex id magni odio itaque modi temporibus atque quia fuga magnam nobis tempora quis. Aliquam eligendi non iusto, voluptates excepturi suscipit.
                                            Dicta dolorem quis cum, obcaecati optio cumque quibusdam sapiente quam autem quia at quisquam, minus culpa atque earum facere placeat sunt incidunt itaque repudiandae veniam? Recusandae iusto laboriosam tempore ab.
                                        </div>
                                    </div>
                                    <div className="card-device__info">
                                        <h4 className="card-device__title">The Amazing Spider-Man</h4>
                                        <button className="card-device__button"><i className="material-icons">power_settings_new</i></button>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    }
                </div>
                <Pagination className="pagination-creators" pageSelected={this.pageSelected} data={this.state.pagination}/>
            </div>
        );
    }
}

export default Series;