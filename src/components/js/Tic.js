import React, { useEffect, useRef } from 'react';
import Phaser from '../games/Tic-Tac-Toe_v1/src/lib/phaser';
import Intro from '../games/Tic-Tac-Toe_v1/src/scenes/Intro.js'
import Level1 from '../games/Tic-Tac-Toe_v1/src/scenes/Level1.js'
import '../css/Game.css'


const TicTacToe = () => {
    const gameContainer = useRef(null);

    useEffect(() => {
        var config = {
            type: Phaser.AUTO,
            width: 180,
            height: 320,
            scale: {
                scale: 'SHOW_ALL',
                orientation: 'LANDSCAPE'
            },
            resolution: window.devicePixelRatio,
            parent: gameContainer.current,
            pixelArt: true,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true,
                    gravity: {
                        y: 500
                    }
                }
            },
            scene: [Intro, Level1]
        };

        var game = new Phaser.Game(config);
        function resize() {
            let canvas = document.querySelector('canvas');
            let width = window.outerWidth;
            let height = window.outerHeight;
            let wratio = width / height;
            let ratio = game.config.width / game.config.height;
            if (wratio < ratio) {
                canvas.style.width = width + 'px';
                canvas.style.height = width / ratio + 'px';
            } else {
                canvas.style.width = height * ratio + 'px';
                canvas.style.height = height + 'px';
            }
        }

        window.onload = () => {
            resize();
            window.addEventListener('resize', resize, false);
        };

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameContainer} />;
};

export default TicTacToe;

