function preload() {
    // Load in the sprite here!
    this.load.image('codey', '../assets/sprites/codey.png');
  
  function create() {
    // Create a sprite game object here!
    this.add.sprite(40, 80, 'codey');
  
  }
  
  const game = new Phaser.Game(config)
  
  
  