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

    toggleClassActive = (e) => {
        document.querySelector('.card--creator').classList.toggle('card--active');
    }
    

    render() {
        return (
            <div className="container-creators">
                {this.state.loading ? <Loading /> :
                    <React.Fragment>
                        <InputSearch className="input__group--creators"/>
                        <div className="container__cards container__cards--creators">
                            <div className="card card--creator" onClick={this.toggleClassActive}>
                                <img className="card__image" src="http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_large.jpg" alt="Stan Lee"/>
                                <h3 className="card__title card__title--creator">Stan Lee</h3>

                                <div className="card__information">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga perferendis nobis fugiat praesentium nihil earum, obcaecati, voluptatum quisquam ratione placeat! Illum mollitia fugiat sapiente sequi? Sapiente eos soluta tenetur.
                                    Culpa voluptate ex aspernatur voluptatum, aliquam autem eum eaque nulla excepturi dolorem reiciendis modi ab veniam blanditiis amet! Dolorem illo, asperiores blanditiis debitis magni porro nemo exercitationem a quaerat rerum.
                                    Blanditiis, error. Dolorem dolorum alias magni, ratione quibusdam impedit veniam ut. Ad placeat quasi numquam quos. Deserunt, facilis. Maiores rerum, ullam quo sunt voluptate adipisci. Deleniti, quas harum? Fugit, ex.
                                    Culpa explicabo, saepe laboriosam praesentium voluptatum voluptatibus nesciunt quis corrupti voluptatem sit doloremque magni earum, incidunt numquam veniam ipsum odio reprehenderit itaque quam ducimus, omnis eos! Libero fugit recusandae eius.
                                    Deserunt eligendi debitis fuga autem id. Impedit nemo, repellendus aut perspiciatis iure hic eos repudiandae ipsa consectetur unde quod, dignissimos sapiente, quasi maxime nam ducimus ipsum vel ex sunt quaerat?
                                    {/* <h5>comics</h5>
                                    <ul className="comic-modal__content-list">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                    </ul>
                                    <h5>stories</h5>
                                    <ul className="comic-modal__content-list">
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis nesciunt quod dolores qui.</li>
                                    </ul>
                                    <a href="http://marvel.com/">detail</a> */}
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