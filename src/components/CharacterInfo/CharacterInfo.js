import React, { Component } from 'react';

class CharacterInfo extends Component {
    render() {
        return (
            <div className="character-info">
                <img src="http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_large.jpg" alt="Spider-Man"/>
                <h2 className="character-info__title">spider-man</h2>
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
                    available: 765
                    <div className="character-info__list">
                        <div>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</div>
                        <div>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</div>
                        <div>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</div>
                        <div>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</div>
                        <div>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</div>
                        <div>Spider-Man: 101 Ways to End the Clone Saga (1997) #1</div>
                    </div>
                </div>
                <div className="character-info__content">
                    <a className="character-info__link" href="http://gateway.marvel.com/v1/public/characters/1009610/stories" target="blank">stories</a>
                    available: 765
                    <div className="character-info__list">
                        <div>Interior #483 ~~~~ cover</div>
                        <div>Interior #483 ~~~~ cover</div>
                        <div>Interior #483 ~~~~ cover</div>
                        <div>Interior #483 ~~~~ cover</div>
                        <div>Interior #483 ~~~~ cover</div>
                        <div>Interior #483 ~~~~ cover</div>
                        <div>Interior #483 ~~~~ cover</div>
                        <div>Interior #483 ~~~~ cover</div>
                    </div>
                </div>
                <div className="character-info__content">
                    <a className="character-info__link" href="http://gateway.marvel.com/v1/public/characters/1009610/stories" target="blank">series</a>
                    available: 765
                    <div className="character-info__list">
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                        <div>A Year of Marvels: April Infinite Comic (2016 - Present)</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterInfo;