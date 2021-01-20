class Arrow {
    constructor(x,y){
      //var options = {
        //'restitution':0.8,
      //  'friction':1.0,
        //'density':1.0
   // }
    this.body = Bodies.rectangle(x,y,50,50)
      this.Arrow = loadImage("images/Arrow.png");
      this.width = 50;
      this.height = 50;
    }
  
    display() {
      
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      imageMode(CENTER)
     image(this.Arrow,0,0,this.width,this.height)

     pop()
    }
  }