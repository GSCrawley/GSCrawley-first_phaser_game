function preload() {
    // Load in the sprite here!
    this.load.image('codey', '../assets/sprites/codey.png');
    this.load.image('sky', '../assets/images/sky.jpg');
    }

  function create() {
    // Create a sprite game object here!
    this.add.sprite(40, 80, 'codey');
    this.add.image(200, 200, 'sky');
  }
  
  const config = {
	type: Phaser.AUTO,
	width: 450,
	height: 600,
	backgroundColor: "#5f2a55",
	scene: {
    create,
    preload
	}
}

  const game = new Phaser.Game(config)
