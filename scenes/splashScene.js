import { Scene } from 'phaser';
import { gameConsts } from '../consts';

const { gameWidth, gameHeight } = gameConsts;

class SplashScene extends Scene {
    constructor() {
      super({ key: 'splashScene' }); // binds defined extension (Phaser's Scene component) so built in methods are available through 'this'
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor('#FFFFFF');
    }

    preload() {
        console.log('Splash scene loaded');
        this.load.image('splashSceneBG', 'images/splashSceneImage.png');
    }

    create() {
        this.splashSceneBG = this.add.sprite(0, 0, 'splashSceneBG'); // create image var and define position on screen
        this.splashSceneBG.x = gameWidth / 2;
        this.splashSceneBG.y = gameHeight / 2;
    }
  
    update(time, delta) { // regularly runs (60 times a second)
        if (time > 3000) {
            this.scene.switch('titleScene');
        }
    }
}

export default SplashScene;