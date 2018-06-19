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
        await this.setState((prevState) => ({
            loading: true,
            search: search //? search : prevState.search
        }));

        let query = `&nameStartsWith=stan`;//this.state.search ? `&nameStartsWith=${this.state.search}` : '';
        query += `&orderBy=firstName&limit=${this.state.pagination.perPage}&offset=${this.state.pagination.offset}`;

        ApiService().getData('creators', query)
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
                {this.state.loading ? <Loading /> :
                    <React.Fragment>
                        <InputSearch className="input__group--creators"/>
                        <div className="container__cards container__cards--creators">
                            <div className="card card--creator" data-id="20" onClick={() => this.toggleClassActive(20)}>
                                <img className="card__image" src="http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_large.jpg" alt="Stan Lee"/>
                                <h3 className="card__title card__title--creator">Stan Lee</h3>
                                <div className="card__information">
                                    <h4>comics</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                    </ul>
                                    <h4>stories</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                    </ul>
                                    <a className="card-creator__link" href="http://marvel.com/" target="blank">detail</a>
                                </div>
                            </div>


                        </div>
                    </React.Fragment>
                }
                <Pagination className="pagination-creators" pageSelected={this.pageSelected} data={this.state.pagination}/>
            </div>
        );
    }
}

export default Creators;