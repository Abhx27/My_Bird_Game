class bow{
    constructor(bodyA , pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       // this.bow = loadImage("");
       this.bow = Constraint.create(options);
       World.add(world, this.bow);
    }
    display(){

    }
}