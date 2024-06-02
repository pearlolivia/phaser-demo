# Phaser 3 Tutorial Follow Along
Followed tutorial from Mr Coxall: https://www.youtube.com/watch?v=V7kxA2Ga-UM&list=PLJafb_gms6qNednIIrd5RB0F5qbYamz0t&index=7

## Basic Phaser App Structure
index.html -> set entry point as main/game.js*tsx file
game.js -> declare gameConfig
            import and add scenes to game
            define starting scene
exampleScene.js -> Skeleton
import { Scene } from 'phaser';

class ExampleScene extends Scene {
    constructor() {
      super({ key: 'exampleScene' }); // binds defined extension (Phaser's Scene component) so built in methods are available through 'this' + declares key for scene
    }
  
    init(data) {
      // when scene first loads, execute your code here
      // e.g. set background colour
    }

    preload() {
        // execute code before scene can load
        // e.g. load necessary assets
    }

    create() {
        // create sprites, text, etc and position them on screen
    }
  
    update(time, delta) {
      // execute dynamic code here (will run 60 times ps)
    }
}

export default ExampleScene; // export scene component