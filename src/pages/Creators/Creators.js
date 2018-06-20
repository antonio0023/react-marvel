import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import ApiService from '../../api/api.service';
import InputSearch from '../../components/InputSearch/InputSearch';
import Pagination from '../../components/Pagination/Pagination';
import './Creators.css';

class Creators extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pagination: {
                perPage: 12,
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

        let query = this.state.search ? `&nameStartsWith=${this.state.search}` : '';
        query += `&orderBy=firstName&limit=${this.state.pagination.perPage}&offset=${this.state.pagination.offset}`;

        ApiService().getData('creators', query)
        .then(response => {
            if (response.status !== 200) throw new Error('Error');
            return response.json();
        })
        .then(response => {
            //console.log(response.data.results);
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

    toggleClassActive = (id) => {
        const ele = document.querySelector(`.card--creator[data-id='${id}']`);
        const eleInfo = ele.querySelector('.card__information');
        
        ele.classList.toggle('card--active');

        if (!ele.classList.contains('card--active'))
            eleInfo.classList.toggle('card__information--collapse')
        else
            setTimeout(() => eleInfo.classList.toggle('card__information--collapse'), 270);
    }
    

    render() {
        return (
            <div className="container-creators">
                <InputSearch className="input__group--creators" onSearch={this.getData}/>
                <div className="container__cards container__cards--creators">
                    {this.state.loading ? <Loading /> :
                        <React.Fragment>
                            {this.state.data.map(creator =>
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
                            )}
                        </React.Fragment>
                    }
                </div>
                <Pagination className="pagination-creators" pageSelected={this.pageSelected} data={this.state.pagination}/>
            </div>
        );
    }
}

export default Creators;