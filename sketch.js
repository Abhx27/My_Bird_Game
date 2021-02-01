const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var BirdGroup;


function preload(){
bowImage = loadImage("images/Bow.png")
//fishImage = loadImage("images/Fish2.jpg")
}
function setup(){
createCanvas(displayWidth - 30,displayHeight - 200);
background(204, 233, 246)


engine = Engine.create();
world = engine.world;

arrow = new Arrow(500,400)
bow = new Bow(arrow.body,{x:210,y:400})
sea = new Sea(1000,700, 2000,400);
land = new Land(190,450,400,400);
fish = new Fish(displayWidth-100,700,50,50)


Matter.Body.setVelocity(fish.body,3)

//fish.speed = -3
}

function draw(){
  Engine.update(engine)

  //  drawSprites()

  //console.log(displayWidth)
  //console.log(displayHeight)
  sea.display();
  arrow.display();
  fish.display();
  bow.display();
  land.display();
//image(bowImage,500,400,50,50)
//image(fishImage,displayWidth-100,700,50,50)
}