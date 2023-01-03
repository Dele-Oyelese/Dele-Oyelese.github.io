import React from 'react';
import Phaser from '../bunny-jump/src/lib/phaser';
import Game from '../bunny-jump/src/scenes/Game.js'
import GameOver from '../bunny-jump/src/scenes/GameOver.js'
// import bg_layer1 from '../bunny-jump/assets/bg_layer1.png'
// import ground_grass from '../bunny-jump/assets/ground_grass.png'
// import bunny1_stand from '../bunny-jump/assets/bunny1_stand.png'
// import bunny1_jump from '../bunny-jump/assets/bunny1_jump.png'
// import carrot from '../bunny-jump/assets/carrot.png'
// import phaseJump1 from '../bunny-jump/assets/sfx/phaseJump1.ogg'


class BunnyJump extends React.Component {

  componentDidMount() {
    // Create a new instance of the Phaser.Game class
    new Phaser.Game({
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        // preload: (Game) =>{
        //   // Preload the assets using the load.image() method
        //   Game.load.image('background', bg_layer1.png)
        //   Game.load.image('platform', ground_grass.png)
        //   Game.load.image('bunny-stand', bunny1_stand.png)
        //   Game.load.image('bunny-jump', bunny1_jump.png)
        //   Game.load.image('carrot', carrot)
        //   Game.load.audio('jump', phaseJump1.ogg)
        // },
         
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 200
                },
                debug: true
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
    return <div id="phaser-game" />;

    
  }

}

export default BunnyJump;
