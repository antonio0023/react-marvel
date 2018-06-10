import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: 1,
            end: 5,
            current: 1
        }
    }

    getNumberPage = () => {
        const { limit, total } = this.props.data;
        return Math.ceil(total / limit);
    }

    firstPage = () => {
        this.setState((prevState) => ({
            current: 1,
            start: 1,
            end: 5
        }));
        this.props.pageSelected(0);
    }

    nextPage = () => {
        const maxPages = this.getNumberPage();

        if (this.state.current !== maxPages) {
            const currentPage = this.state.current + 1;
            
            this.setState((prevState) => ({
                current: currentPage,
                start: prevState.start + 1,
                end: prevState.end + 1
            }));
            const page = ((currentPage - 1) * this.props.data.limit) + 1;
            this.props.pageSelected(page);
        }
    }

    previousPage = (currentPage) => {

    }

    specificPage = (numberPage) => {
        this.setState({
            current: numberPage
        });
        const currentPage = ((numberPage - 1) * this.props.data.limit) + 1;
        this.props.pageSelected(currentPage === 1 ? 0 : currentPage);
    }

    lastPage = () => {
        const numPage = this.getNumberPage();
        const currentPage = ((numPage - 1) * this.props.data.limit) + 1;

        this.setState((prevState) => ({
            current: numPage,
            start: numPage - 5,
            end: numPage
        }));
        this.props.pageSelected(currentPage);
    }

    drawButtons = () => {
        let buttons = [];

        for (let index = this.state.start; index <= this.state.end; index++) {
            buttons.push(
                <button key={index}
                    onClick={() => this.specificPage(index)}
                    className={`pagination__button pagination__button--item ${this.state.current === index ? 'pagination__button--activate' : ''}`}>
                    {index}
                </button>
            );
        }

        return buttons;
    }

    render() {
        return (
            <div className="pagination">
                <div className="pagination__container">
                    <button className="pagination__button" onClick={this.firstPage}><i className="material-icons">first_page</i></button>
                    <button className="pagination__button"><i className="material-icons">chevron_left</i></button>

                    {this.drawButtons()}
                    
                    <button className="pagination__button" onClick={this.nextPage}><i className="material-icons">chevron_right</i></button>
                    <button className="pagination__button" onClick={this.lastPage}><i className="material-icons">last_page</i></button>
                </div>
                <div className="pagination__info">
                    {this.props.data.limit} of {this.props.data.total} <span className="pagination__info--span">Reg</span>
                </div>
            </div>
        );
    }
}

export default Pagination;