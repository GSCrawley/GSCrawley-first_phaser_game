function create() {
    this.add.text(50, 100, "My first Phaser Game", { font: "40px Times New Roman", fill: "#ffa0d0"});
  
    this.add.text(130, 300, "by Gideon Crawley", { font: "20px Times New Roman", fill: "#ffa0d0"});
  }
  function create() {
    let circle1 = this.add.circle(50, 100, 90, 0xFFF070);
    let circle2 = this.add.circle(95, 300, 80, 0xFF0000);
    let circle3 = this.add.circle(200, 200, 100, 0x9F00D0);
    let circle4 = this.add.circle(300, 400, 10, 0x00E030);
    let circle5 = this.add.circle(150, 250, 60, 0x61b8ed);
  
    // Add in a circle here!
  
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      scene: {
      create
      }
  }
  
  const game = new Phaser.Game(config)
  
  
  