import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img className="loading__image" src="images/ironman-loading.png" alt="Iron Man Loading"/>
            </div>
        );
    }
}

export default Loading;