const gameState = {}

function preload() {
  this.load.image('codey', '../assets/sprites/codey.png'),
  this.load.audio('incredible', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/incredible.mp3'),
  this.load.audio('awesome', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/reallyawesome.mp3');
}

function create() {
  gameState.incredible = this.sound.add('incredible')
  gameState.awesome = this.sound.add('awesome')
  gameState.incredibleBox = this.add.rectangle(200, 150, 300, 200, 0xdadaaa)
  gameState.awesomeBox = this.add.rectangle(200, 400, 300, 200, 0xaadada)
  gameState.incredibleText = this.add.text(150, 135, "Incredible", { fill: "#222222", font: "20px Times New Roman"})
  gameState.awesomeText = this.add.text(110, 385, "Really, really awesome", { fill: "#222222", font: "20px Times New Roman"})
  gameState.codey = this.add.sprite(150, 200, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys()
  gameState.incredibleBox.setInteractive();
  gameState.awesomeBox.setInteractive();
  gameState.codey.setInteractive();
}

function update() {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 2;
  }
  if (gameState.cursors.up.isDown) {
    gameState.codey.y -= 2;
  }
  if (gameState.cursors.left.isDown) {
    gameState.codey.x -= 2;
  }
  if (gameState.cursors.right.isDown) {
    gameState.codey.x += 2;
  }
  gameState.incredibleBox.on('pointerup',
  function() {
    gameState.incredible.play()
    })
    gameState.awesomeBox.on('pointerup', 
    function() {
    gameState.awesome.play()
    })
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 550,
	backgroundColor: "0xdda0dd",
	scene: {
	  preload,
	  create,
    update
	}
}

const game = new Phaser.Game(config);