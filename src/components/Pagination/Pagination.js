import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {
    render() {
        return (
            <div className="pagination">
                <div className="pagination__container">
                    <button className="pagination__button"><i className="material-icons">first_page</i></button>
                    <button className="pagination__button"><i className="material-icons">chevron_left</i></button>
                    <button className="pagination__button pagination__button--item pagination__button--activate">1</button>
                    <button className="pagination__button pagination__button--item">2</button>
                    <button className="pagination__button pagination__button--item">3</button>
                    <button className="pagination__button pagination__button--item">4</button>
                    <button className="pagination__button pagination__button--item">5</button>
                    <button className="pagination__button"><i className="material-icons">chevron_right</i></button>
                    <button className="pagination__button"><i className="material-icons">last_page</i></button>
                </div>
                <div className="pagination__info">
                    10 of 12345 <span className="pagination__info--span">Reg</span>
                </div>
            </div>
        );
    }
}

export default Pagination;