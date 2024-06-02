import { Scene } from 'phaser';
import { gameConsts } from '../consts';

const {
    gameWidth,
    gameHeight,
    shipSpeed,
    missileSpeed,
    alienSpeed,
} = gameConsts;

class GameScene extends Scene {
    createAlien() {
        const alienXLocation = Math.floor(Math.random() * gameWidth) + 1; // set position anywhere within screen width
        const alien = this.physics.add.sprite(alienXLocation, -100, 'alien'); // set y just off screen
        let alienXVelocity = Math.floor(Math.random() * 50) + 1;
        alienXVelocity *= Math.round(Math.random()) ? 1 : -1;
        alien.body.velocity.y = alienSpeed;
        alien.body.velocity.x = alienXVelocity;
        this.alienGroup.add(alien);
    }

    constructor() {
      super({ key: 'gameScene' });
      this.background = null;
      this.spaceship = null;
      this.fireMissle = false;
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor('#b3a8ed');
    }

    preload() {
        console.log('Game scene loaded');
        this.load.image('starBackground', 'assets/starBackground.png');
        this.load.image('spaceship', 'assets/spaceShip.png');
        this.load.image('missile', 'assets/missile.png');
        this.load.image('alien', 'assets/alien.png');

        this.load.audio('laser', 'assets/laser1.wav');
    }

    create() {
        this.background = this.add.image(0, 0, 'starBackground').setScale(2);
        this.background.setOrigin(0, 0);

        this.spaceship = this.physics.add.sprite(gameWidth / 2, gameHeight - 100, 'spaceship'); // physics turns sprite into game object with necessary properties i.e. collision box, etc

        this.missileGroup = this.physics.add.group();

        this.alienGroup = this.add.group();
        this.createAlien();

        // pass in object you want to monitor for collision, access objects that do collide, write logic
        this.physics.add.collider(this.alienGroup, this.missileGroup, function (alienCollide, missileCollide) {
            alienCollide.destroy();
            missileCollide.destroy();
            this.createAlien();
            this.createAlien();
        }.bind(this));

        this.physics.add.collider(this.alienGroup, this.spaceship, function(alienCollide, spaceShipCollide) {
            alienCollide.destroy();
            spaceShipCollide.destroy();
        }.bind(this));
    }
  
    update(time, delta) {
      const keyLeftObj = this.input.keyboard.addKey('LEFT');
      const keyRightObj = this.input.keyboard.addKey('RIGHT');
      const keySpaceObj = this.input.keyboard.addKey('SPACE');

      if (keyLeftObj.isDown === true) {
        this.spaceship.x -=shipSpeed;
        if (this.spaceship.x < 0) {
            this.spaceship.x = 0;
        }
      }
      if (keyRightObj.isDown === true) {
        this.spaceship.x +=shipSpeed;
        if (this.spaceship.x > gameWidth) {
            this.spaceship.x = gameWidth;
        }
      }
      if (keySpaceObj.isDown === true && this.fireMissle === false) {
        this.fireMissle = true;
        const newMissle = this.physics.add.sprite(this.spaceship.x, this.spaceship.y, 'missile'); // create new missle sprite
        this.missileGroup.add(newMissle); // add the new missile to the group
        this.sound.play('laser');
      }
      if (keySpaceObj.isUp === true) {
        this.fireMissle = false;
      }

      this.missileGroup.children.each((item) => {
        item.y = item.y - missileSpeed;
        if (item.y < 0) {
            item.destroy(); // remove sprite from group to save RAM space
        }
      });
    }
}

export default GameScene;