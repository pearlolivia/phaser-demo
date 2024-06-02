/* global Phaser */
// Created by Pearl Vernon-Howe
// Created in June 2024

import Phaser from 'phaser';
import { gameConsts } from './consts';
import SplashScene from './scenes/splashScene';
import TitleScene from './scenes/titleScene';
import MenuScene from './scenes/menuScene';
import GameScene from './scenes/gameScene';

const { gameWidth, gameHeight } = gameConsts;

const splashScene = new SplashScene();
const titleScene = new TitleScene();
const menuScene = new MenuScene();
const gameScene = new GameScene();

const config = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: '#FFFFFF',
    physics: {
      default: 'arcade',
      arcade: {
        // gravity: { x: 0, y: 0 },
        debug: true // boundary boxes will be displayed
      }
    },
    scale: {
        mode: Phaser.Scale.FIT, // responsive
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}

// create Phaser game instance
const game = new Phaser.Game(config);
game.scene.add('splashScene', splashScene); // add new scene, keys must be unique
game.scene.add('titleScene', titleScene);
game.scene.add('menuScene', menuScene);
game.scene.add('gameScene', gameScene);

game.scene.start('splashScene'); // game will start on declared scene
