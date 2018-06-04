import React, { Component } from 'react';
import ApiService from '../../api/api.service';
import './Sidebar.css';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            attribution: ''
        }
    }

    componentDidMount() {
        this.mainContainer = document.querySelector('.main-container');
        this.mainContainer.classList.add('main-container--sidebar');
        ApiService().getData('creators', `limit=30`)
            .then(response => {
                if (response.status !== 200) throw new Error('Error');
                return response.json();
            })
            .then(response => {
                //console.log(response);
                this.setState({
                    data: response.data.results,
                    attribution: response.attributionText
                });
            })
            .catch(err => {
                console.log('Error', err);
            });
    }

    componentWillUnmount() {
        this.mainContainer.classList.remove('main-container--sidebar');
    }

    findByCreator = (e, id) => {
        console.log(id);
        e.target.classList.toggle('sidebar__link-creator--active');
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__item sidebar__item--search">
                    <div className="input__group">
                        <input type="text" placeholder="Search by name" />
                        <button className="button__search"><i className="material-icons">search</i></button>
                    </div>
                    <div className="select__container">
                        <label htmlFor="perPage">Per page</label>
                        <select name="perPage" id="perPage">
                            <option value="10">10</option>
                            <option value="10">20</option>
                            <option value="10">30</option>
                            <option value="10">40</option>
                            <option value="10">50</option>
                        </select>
                    </div>
                    <div className="sidebar__filters">
                        Order by Name
                        <div className="checkbox">
                            <input type="checkbox" name="name" id="name" />
                            <label htmlFor="name">Ascendant</label>
                        </div>
                    </div>
                </div>
                <div className="sidebar__item sidebar__item--creators">
                    <h2 className="sidebar__title">Creators</h2>
                    <div className="input__group">
                        <input type="text" placeholder="Search by name" />
                        <button className="button__search"><i className="material-icons">search</i></button>
                    </div>
                    <div className="sidebar-creators-container">
                        {this.state.data.map((creator) => {
                            return creator.fullName ?
                                <div key={creator.id} className="sidebar__filters sidebar__filters--creators">
                                    <a className="sidebar__link-creator" onClick={(e) => this.findByCreator(e, creator.id)}>
                                        {creator.fullName}
                                    </a>
                                    <a className="sidebar__link-view-creator"><i className="material-icons">account_circle</i></a>
                                </div> : ''
                        })}
                    </div>
                </div>
                <div className="sidebar__item">
                    <a className="sidebar__link-attribution" href="http://marvel.com" target="blank">{this.state.attribution}</a> <br />
                </div>
            </div>
        );
    }
}

export default Sidebar;