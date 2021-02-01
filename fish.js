class Fish{
    constructor(x,y,width,height){
        var options = {
            'friction':1,
            'restitution':0,
            'density':1
        }
this.body = Bodies.rectangle(x,y,50,50,options)
this.width = 50 
this.height = 50
this.image = loadImage("images/Fish2.jpg")
//Matter.Body.setVelocity(this.body,3)
//this.body.speedX = -3

       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
       // rect(pos.x,pos.y,this.width,this.height)
        image(this.image,0,0,this.width,this.height)
        pop()
        
    }
}