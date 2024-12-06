import Phaser from 'phaser';

const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 600;

let score = 0;
let hearts = 3;
let gameOver = false;
let barrels = [];
let diverImage;
let boat;

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    // Load assets
    this.load.image('bg', '../assets/bg.jpg');
    this.load.image('boat', '/assets/boat.png');
    this.load.image('barrel', '/assets/barrel.png');
    this.load.image('diver1', '/assets/diver1.png');
    this.load.image('diver2', '/assets/diver2.png');
    this.load.image('menuBg', '../assets/bg2.png');
  }
  create() {
    this.add.image(0, 0, 'bg').setOrigin(0, 0).setDisplaySize(SCREEN_WIDTH, SCREEN_HEIGHT);
    boat = this.add.sprite(SCREEN_WIDTH / 2, 200, 'boat').setOrigin(0.5, 0.5);
    diverImage = this.add.sprite(SCREEN_WIDTH / 2, SCREEN_HEIGHT - 100, 'diver1').setOrigin(0.5, 0.5);
    barrels = this.physics.add.group();
    this.input.on('pointermove', pointer => {
      diverImage.x = pointer.x;
      diverImage.setTexture(pointer.x > diverImage.x ? 'diver2' : 'diver1');
    });

    // Start game loop
    this.time.addEvent({
      delay: 1000,
      callback: this.spawnBarrel,
      callbackScope: this,
      loop: true
    });

    // Timer for game over
    this.time.addEvent({
      delay: 1000 / 60,
      callback: this.update,
      callbackScope: this,
      loop: true
    });
  }

  spawnBarrel() {
    const barrelX = boat.x + boat.width / 2 - 20;
    const barrelY = boat.y - 40;
    const barrel = this.physics.add.image(barrelX, barrelY, 'barrel');
    barrels.add(barrel);
    barrel.setVelocityY(200);  // Falling speed
  }

  handleCollisions() {
    // Check for collisions between diver and barrels
    this.physics.world.collide(diverImage, barrels, (diver, barrel) => {
      barrel.destroy();
      score += 50;
    });
  }

  update() {
    if (gameOver) {
      this.scene.start('GameOverScene');
    }

    // Move barrels
    barrels.children.iterate(barrel => {
      if (barrel.y > SCREEN_HEIGHT) {
        barrel.destroy();
        hearts -= 1;
      }
    });

    // Handle collisions
    this.handleCollisions();

    // Display score and hearts
    this.displayScoreAndHearts();
  }

  displayScoreAndHearts() {
    this.add.text(10, 10, `Score: ${score}`, { font: '36px Arial', fill: '#fff' });
    this.add.text(10, 50, `Hearts: ${hearts}`, { font: '36px Arial', fill: '#f00' });

    if (hearts <= 0) {
      gameOver = true;
    }
  }
}

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  preload() {
    this.load.image('menuBg', 'assets/bg2.png');
  }

  create() {
    this.add.image(0, 0, 'menuBg').setOrigin(0, 0).setDisplaySize(SCREEN_WIDTH, SCREEN_HEIGHT);
    const titleText = this.add.text(SCREEN_WIDTH / 2, 150, 'Diver Rescue', { font: '74px Arial', fill: '#fff' }).setOrigin(0.5, 0.5);
    const startButton = this.add.text(SCREEN_WIDTH / 2, 300, 'Start', { font: '36px Arial', fill: '#fff' })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on('pointerdown', () => this.startGame());

    this.input.on('pointermove', pointer => {
      if (startButton.getBounds().contains(pointer.x, pointer.y)) {
        startButton.setStyle({ fill: '#ff0' });
      } else {
        startButton.setStyle({ fill: '#fff' });
      }
    });
  }

  startGame() {
    this.scene.start('GameScene');
  }
}

export { GameScene, MenuScene };
