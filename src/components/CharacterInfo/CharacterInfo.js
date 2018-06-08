import React, { Component } from 'react';
import './CharacterInfo.css';

class CharacterInfo extends Component {
    render() {
        return (
            <div className="character-info">
                <div className="character-info__header">
                    <button className="character-info__button">
                        <i className="material-icons">clear</i>
                    </button>
                    <img className="character-info__image" src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_large.jpg" alt="Spider-Man"/>
                    <h2 className="character-info__title">spider-man</h2>
                </div>
                <div className="character-info__content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente perferendis, quas explicabo perspiciatis recusandae, ab voluptatibus consectetur sint sed modi molestiae maxime temporibus autem officiis hic neque nesciunt quis!
                    <div className="character-info__link-content">
                        <a href="http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=b91712fbe43cb1432019131a90cf2bb7" target="blank">detail</a>
                        <a href="http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=b91712fbe43cb1432019131a90cf2bb7" target="blank">detail</a>
                        <a href="http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=b91712fbe43cb1432019131a90cf2bb7" target="blank">detail</a>
                    </div>
                </div>
                <div className="character-info__content">
                    <a className="character-info__link" href="http://gateway.marvel.com/v1/public/characters/1009610/stories" target="blank">comics</a>
                    <h6 className="character-info__available">Available: <span className="emphasize">765</span> </h6>
                    <ul className="character-info__list">
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                    </ul>
                </div>
                <div className="character-info__content">
                    <a className="character-info__link" href="http://gateway.marvel.com/v1/public/characters/1009610/stories" target="blank">stories</a>
                    <h6 className="character-info__available">Available: <span className="emphasize">765</span> </h6>
                    <ul className="character-info__list">
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                    </ul>
                </div>
                <div className="character-info__content">
                    <a className="character-info__link" href="http://gateway.marvel.com/v1/public/characters/1009610/stories" target="blank">series</a>
                    <h6 className="character-info__available">Available: <span className="emphasize">765</span> </h6>
                    <ul className="character-info__list">
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                        <li>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CharacterInfo;