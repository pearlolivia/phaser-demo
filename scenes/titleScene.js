import { Scene } from 'phaser';
import { gameConsts } from '../consts';

const { gameWidth, gameHeight } = gameConsts;

class TitleScene extends Scene {
    constructor() {
      super({ key: 'titleScene' });
      this.titleSceneBG = null;
      this.titleSceneText = null;
      this.titleSceneTxtStyle = { font: '200px', fill: '#FDE4B9', align: 'center' };
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor('#b3a8ec');
    }

    preload() {
        console.log('Title scene loaded');
        this.load.image('titleSceneBG', 'images/aliens_screen_image.jpg');
    }

    create() {
        this.titleSceneBG = this.add.sprite(0, 0, 'titleSceneBG').setScale(2.75);
        this.titleSceneBG.x = gameWidth / 2;
        this.titleSceneBG.y = gameHeight / 2;

        this.titleSceneText = this.add.text(
            gameWidth / 2,
            (gameHeight / 2) + 350,
            'Space Aliens',
            this.titleSceneTxtStyle,
        ).setOrigin(0.5)
    }
  
    update(time, delta) {
        if (time > 6000) { // time relative to whole game, not just one scene. Must be incremental
            this.scene.switch('menuScene');
        }
    }
}

export default TitleScene;