const gameState = {}

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
}

function create() {
  gameState.codey = this.add.sprite(150, 200, 'codey');
  gameState.cursors = this.input.keyboard.createCursorKeys()
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
}

const config = {
	type: Phaser.AUTO,
	width: 400,
	height: 500,
	backgroundColor: "0xdda0dd",
	scene: {
	  preload,
	  create,
    update
	}
}

const game = new Phaser.Game(config);