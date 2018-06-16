import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="container__loading">
                    <img className="loading__image" src="images/ironman-loading.png" alt="Iron Man Loading"/>
                    <div className="container__loading--shadown">Loading...</div>
                </div>
            </div>
        );
    }
}

export default Loading;