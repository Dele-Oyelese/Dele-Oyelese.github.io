import React from 'react';
import Phaser from '../bunny-jump/src/lib/phaser';
import Game from '../bunny-jump/src/scenes/Game.js'
import GameOver from '../bunny-jump/src/scenes/GameOver.js'
import '../css/Game.css'


class BunnyJump extends React.Component {

  componentDidMount() {
    // Create a new instance of the Phaser.Game class
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 480,
        height: 640,
     
         
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 200
                },
                debug: false
            }
        },
        scene:[Game, GameOver]
    });

  }

  shouldComponentUpdate() {
    return false
  }


  // render() {
  //   let comp;
  //   if (this.state.display) {
  //     comp = <BunnyJump />;
  //   }
  //   return (
  //     <div>
  //       {comp}
  //       <button onClick={this.delete}>
  //         Delete the component
  //       </button>
  //     </div>
  //   );
  // }
  render() {
    return <div classname='my-game' id="phaser-game" />;    
  }

}

export default BunnyJump;
