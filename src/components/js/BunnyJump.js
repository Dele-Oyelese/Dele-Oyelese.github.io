import React, { useEffect, useRef }  from 'react';
import Phaser from '../games/bunny-jump/src/lib/phaser';
import Game from '../games/bunny-jump/src/scenes/Game.js'
import GameOver from '../games/bunny-jump/src/scenes/GameOver.js'
import Title from '../games/bunny-jump/src/scenes/Title.js'
import '../css/Game.css'



const BunnyJump = () => {
  const gameContainer = useRef(null);

  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 480,
      height: 640,

      
      parent: gameContainer.current,

      physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: false
        }
    },
    scene:[Title,Game, GameOver]
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameContainer} />;
};

export default BunnyJump;
