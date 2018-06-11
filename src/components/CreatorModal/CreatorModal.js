import React, { Component } from 'react'
import './CreatorModal.css';

export default class CreatorModal extends Component {

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <div className={`creator-modal ${data ? '' : 'creator-modal--close'}`}>
                    <button className="creator-modal__button-close" onClick={this.props.close}>
                        <i className="material-icons">clear</i>
                    </button>
                    {data ? 
                        <React.Fragment>
                            <div className="creator-modal__header">
                                <img className="creator-modal__image" src={`${data.thumbnail.path}/standard_large.${data.thumbnail.extension}`} alt={data.fullName}/>
                                <h2 className="creator-modal__title">{data.fullName}</h2>
                                {data.urls.map((el, index) => <a key={index} className="creator-modal__link" href={el.url} target="blank">{el.type}</a>)}
                            </div>              

                            <div className="creator-modal__content">
                                <div className="creator-modal__content-item creator-modal__content--stories">
                                    <h3 className="creator-modal__content-title ">stories</h3>
                                    <h6 className="creator-modal__content-info">Available: <span className="emphasize">{data.stories.available}</span> </h6>
                                    <ul className="list-story">
                                        {data.stories.items.slice(0, 5).map((el, index) => {
                                            return <li className={`list-story__item ${el.type === 'interiorStory' ? 'story--interior' : 'story--cover'}`} key={index}>
                                                {el.name}
                                                {el.type === 'interiorStory' ? <i className="material-icons" title="Interior">assignment_returned</i> : <i className="material-icons" title="Cover">assignment_ind</i> }
                                            </li>
                                        })}
                                    </ul>
                                </div>
                                <div className="creator-modal__content-item creator-modal__content--comics">
                                    <h3 className="creator-modal__content-title ">comics</h3>
                                    <h6 className="creator-modal__content-info">Available: <span className="emphasize">{data.comics.available}</span> </h6>
                                    <ul className="creator-modal__content-list">
                                        {data.comics.items.slice(0, 5).map((el, index) => <li key={index}>{el.name}</li>)}
                                    </ul>
                                </div>
                                <div className="creator-modal__content-item creator-modal__content--series">
                                    <h3 className="creator-modal__content-title ">series</h3>
                                    <h6 className="creator-modal__content-info">Available: <span className="emphasize">{data.series.available}</span> </h6>
                                    <ul className="creator-modal__content-list">
                                        {data.series.items.slice(0, 5).map((el, index) => <li key={index}>{el.name}</li>)}
                                    </ul>
                                </div>
                                <div className="creator-modal__content-item creator-modal__content--events">
                                    <h3 className="creator-modal__content-title ">events</h3>
                                    <h6 className="creator-modal__content-info">Available: <span className="emphasize">{data.events.available}</span> </h6>
                                    <ul className="creator-modal__content-list">
                                        {data.events.items.slice(0, 5).map((el, index) => <li key={index}>{el.name}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment> : ''
                    }                    
                </div>
                {data ? <div className="backdrop" onClick={this.props.close}></div> : ''}
            </React.Fragment>
        );
    }
}
