class Paper extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("pic/57c59f6cd9d050ee155f5ce9c905b028.jpg");
      //this.smokeImage = loadImage("sprites/smoke.png");
      //this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
    }
  }
  