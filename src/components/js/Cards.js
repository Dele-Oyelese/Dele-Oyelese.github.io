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
              src={require('../../images/BlackJack.jpeg')}
              text='Functional BlackJack Game'
              label='Python'
              path='/projects'
            />
            <CardItem
              src={require('../../images/pandasPython.png')}
              text='Country Tech Use Dataframe'
              label='Python/Pandas'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../../images/Sudoku.jpeg')}
              text='Sudoku Problem Solver'
              label='Python'
              path='/projects'
            />
            <CardItem
              src={require('../../images/Maze.jpeg')}
              text='Maze Solver'
              label='Python'
              path='/projects'
            />
            <CardItem
              src={require('../../images/API.png')}
              text='API Scrapper'
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