class Bow{
    constructor(bodyA , pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
               this.bow = loadImage("images/Bow.png");
               this.pointB = pointB;
       this.bow = Constraint.create(options);
       World.add(world, this.bow);
    }
    display(){
        strokeWeight(7)
        stroke("black")
       var pointA  = this.bow.bodyA.position
        var pointB = pointB;
      // line(pointA.x,pointA.y,pointB.x,pointB.y) 
        
    }
}