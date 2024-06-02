import { Scene } from 'phaser';
import { gameConsts } from '../consts';

const { gameWidth, gameHeight } = gameConsts;

class MenuScene extends Scene {
    constructor() {
      super({ key: 'menuScene' });

      this.menuSceneBG = null;
      this.startButton = null;
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor('#b3a8ec');
    }

    preload() {
        console.log('Menu scene loaded');
        this.load.image('menuSceneBG', 'assets/aliens_screen_image2.jpg');
        this.load.image('startButton', 'assets/start.png');
    }

    create() {
        this.menuSceneBG = this.add.sprite(0, 0, 'menuSceneBG');
        this.menuSceneBG.x = gameWidth / 2;
        this.menuSceneBG.y = gameHeight / 2;

        this.startButton = this.add.sprite(gameWidth / 2, (gameHeight / 2) + 100, 'startButton');
        this.startButton.setInteractive({ useHandCursor: true });
        this.startButton.on('pointerdown', () => this.handleClick())
    }
  
    update(time, delta) {
      
    }

    handleClick() {
        this.scene.start('gameScene');
    }
}

export default MenuScene;