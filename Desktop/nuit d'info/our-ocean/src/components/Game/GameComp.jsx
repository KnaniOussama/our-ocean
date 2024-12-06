import React, { useEffect } from 'react';
import Phaser from 'phaser';
import { GameScene, MenuScene } from './game';

const GameComponent = () => {
  useEffect(() => {
    const SCREEN_WIDTH = 960;
    const SCREEN_HEIGHT = 600;

    // Game configuration
    const config = {
      type: Phaser.AUTO,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      scene: [MenuScene, GameScene],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      }
    };
    const game = new Phaser.Game(config);
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" />;
};

export default GameComponent;
