import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here Are a Few of My Current Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../../images/SpaceShipLaunch.jpeg')}
              text='Interactive Spaceship Launch Map'
              label='React/JSON'
              path='/projects/map-project'
            />
            <CardItem
              src={require('../../images/YYCHubLanding.png')}
              text='YYC Hub'
              label='Hackathon Second Place'
              path='/projects'
            />
     
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={require('../../images/Phaser.jpeg')}
              text='Infinite Jumper Mini Game'
              label='JavaScript'
              path='/projects/game'
            />
        
            <CardItem
              src={require('../../images/Maze.jpeg')}
              text='Maze Solver'
              label='Python'
              path='/projects'
            />
            <CardItem
              src={require('../../images/BlackJack.jpeg')}
              text='Functional BlackJack Game'
              label='Python'
              path='/projects'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;