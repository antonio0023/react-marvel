import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

    componentDidMount() {
        this.mainContainer = document.querySelector('.main-container');
        this.mainContainer.classList.add('main-container--sidebar');
    }

    componentWillUnmount() {
        this.mainContainer.classList.remove('main-container--sidebar');
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__item">
                    <div className="input__group">
                        <input type="text" placeholder="Search by name"/>
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
                </div>
                {/* <div className="sidebar__item">
                    <h2 className="sidebar__title">Order by</h2>
                    <div className="sidebar__filters">
                        <div>
                            Name
                            <div>
                                <label htmlFor="name">Ascendant</label>
                                <input type="checkbox" name="name"/>
                            </div>
                        </div>
                        <div>
                            Name
                            <div>
                                <label htmlFor="name">Ascendant</label>
                                <input type="checkbox" name="name"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar__item">
                    <h2 className="sidebar__title">Creators</h2>
                    <div className="sidebar__filters">
                        <div>
                            <a>Stan Lee</a>
                            <a>&#9673;</a>
                        </div>
                        <div>
                            <a>Stan Lee</a>
                            <a>&#9673;</a>
                        </div>
                        <div>
                            <a>Stan Lee</a>
                            <a>&#9673;</a>
                        </div>
                        <div>
                            <a>Stan Lee</a>
                            <a>&#9673;</a>
                        </div>
                        <div>
                            <a>Stan Lee</a>
                            <a>&#9673;</a>
                        </div>
                    </div>
                </div>
                <div className="sidebar__footer">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, voluptate. Veritatis cumque doloribus dolore sequi! Reprehenderit dignissimos libero id et blanditiis aut voluptates dolorem non tenetur itaque. Sapiente, ea odit!
                    </p>
                </div> */}
            </div>
        );
    }
}

export default Sidebar;