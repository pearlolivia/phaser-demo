// import Phaser from "phaser";

// const game = new Phaser.Game(600, 400, Phaser.AUTO);
// game.state.add('state1', demo.state1);
// game.state.add('state2', demo.state1);
// game.state.start('state1');

import { Scene, Game, WEBGL, GameObjects } from 'phaser';
import { gameConsts } from './consts';
import './style.css';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const { gameWidth, gameHeight } = gameConsts;

class GameScene extends Scene {
  private textbox: GameObjects.Text | undefined;

  constructor() {
    super('scene-game');
  }

  create() {
    this.textbox = this.add.text(
      gameWidth / 2,
      gameHeight / 2,
      'Welcome to Phaser x Vite!',
      {
        color: '#FFF',
        fontFamily: 'monospace',
        fontSize: '26px'
      }
    );

    this.textbox.setOrigin(0.5, 0.5);
  }

  update(time: number, delta: number) {
    if (!this.textbox) {
      return;
    }

    this.textbox.rotation += 0.0005 * delta;
  }
}

const config = {
  type: WEBGL,
  width: gameWidth,
  height: gameHeight,
  canvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      // debug: true
    }
  },
  scene: [
    GameScene
  ]
}

new Game(config);