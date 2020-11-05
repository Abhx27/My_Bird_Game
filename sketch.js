const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var sea, land, backgroundImage;

function preload(){

}
function setup(){
createCanvas(displayWidth - 30,displayHeight - 200);
background(204, 233, 246)

land = createSprite(0,800,500,200)
land.shapeColor = "green"

sea = createSprite(1080,800,1670,200)
sea.shapeColor = "blue"

fish = new Fish(1200,800,20,20)
}

function draw(){

    drawSprites()
}