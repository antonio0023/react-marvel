import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

    showInformation = () => {
        console.log(this.props.data);
    }

    render() {
        const { data } = this.props;
        const imgSrc = `${data.thumbnail.path}/standard_large.${data.thumbnail.extension}`;
        return (
            <div className="card" onClick={this.showInformation}>
                <h3 className="card__title">{data.name}</h3>
                <img className="card__image" src={imgSrc} alt={data.name}/>
            </div>
        );
    }
}

export default Card;